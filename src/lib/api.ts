export const sendContactForm = async (formData: FormData) => {
    const plainFormData = Object.fromEntries(formData.entries());
    const jsonData = JSON.stringify(plainFormData);

    const fetchConfig = {
      method: 'POST',
      body: jsonData,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
  
    return fetch('/api/contact', fetchConfig);
};
  