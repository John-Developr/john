import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

import { transporter, mailOptions } from '@/config/nodemailer';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormDataTuple extends Array<[string, string]> {}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'ERROR - 400 [Invalid Request]' });
  }

  const data: FormData = req.body;
  const entries: FormDataTuple = Object.entries(data);
  const emptyFieldsIndices = entries.filter(([key, value]) => !value.trim()).map(([key, value]) => ({[key]: value}));
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emptyFieldsIndices.length !== 0) {
    return res.status(400).json({
      message: 'Oops! We need you to complete all of the required fields so that we can proceed with email verification.',
      error: { fields: emptyFieldsIndices, },
    });
  }

  if (!data.email.match(validRegex)) {
    return res.status(400).json({
      message: 'Oops! Please provide a valid email address so we can successfully deliver the contact information to the website owner.',
      error: { fields: [{email: data.email}] }, // Differentiate error type for invalid email
    });
  }

  try {
    const htmlContent = await generateHTMLContent(entries);
    await transporter.sendMail({
      ...mailOptions,
      subject: 'Contact Message',
      html: htmlContent,
    });

    return res.status(200).json({ message: 'The email has been successfully sent to the website owner. Thank you for reaching out.' });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}

async function generateHTMLContent(entries: FormDataTuple) {
  const htmlPath = path.join(process.cwd(), 'public/templates', 'emailTemplateContact.html');
  let htmlContent: string;

  try {
    htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    entries.forEach(([key, value]) => {
      const regex = new RegExp(`{{ ${key} }}`, 'g');
      htmlContent = htmlContent.replace(regex, value);
    });
  } catch (error) {
    throw new Error('Error generating HTML content');
  }

  return htmlContent;
}
