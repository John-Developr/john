
import React, { Component } from 'react';

import styles from '@/styles/about.module.css';
import Layout, { PageWrapper } from '@/helpers/layout';
import NextArrow from '@/helpers/nextArrow';
import Footer from '@/components/footer';
import { Age } from '@/utils/meUtils';

interface HomeProps {}

interface HomeState {
  age: number;
}

class About extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      age: Age()
    };
  }

  render() {
      const { age } = this.state; 

      return (
      <Layout title="About">
        <PageWrapper title="About Me.">
          <br/>
          <p className={styles.intro}>Hi! I'm a <b>{age}-year-old full-stack developer living in Cebu, Philippines</b>, with a passion for building scalable web, software, and mobile applications that work across platforms, specializing in developing solutions with JavaScript, PHP, and other languages. Also, when I'm not writing code, I enjoy watching movies, reading, playing video games, exploring, riding, traveling, and playing sports.</p>
          <section className={styles['work-experience']}>
            <h3>Work Experience</h3>
            <ul className={styles.tree}>
              <li>
                <h3>iOS Developer</h3>
                <p>Forty Degrees Celcius, Inc.</p>
                <span>2023 - Present</span>
                <ul className={styles['to-dos']}>
                  <li>
As an iOS Developer, my role encompasses the end-to-end development lifecycle, from designing and testing applications on the iOS platform to collaborating closely with Planning and Design teams for specification delivery. I am dedicated to enhancing code quality by adhering to standards and best practices, with a focus on implementing UI/UX elements according to approved client designs. My responsibilities extend to ensuring the performance, quality, and responsiveness of applications, assessing the technical feasibility of features, and actively contributing to code maintenance. Additionally, I specialize in resolving memory leaks, fine-tuning performance, and seamlessly handling RESTful APIs to create robust and efficient iOS applications</li>
                </ul>
              </li>
              <li>
                <h3>Web Developer</h3>
                <p>Forty Degrees Celcius, Inc.</p>
                <span>2023 - Present</span>
                <ul className={styles['to-dos']}>
                  <li>As a Web Developer for nativecamp.net, the number one online teaching platform in Japan, I oversee both backend and front-end development, ensuring the maintenance and scalability of our large web applications. My responsibilities include designing, documenting, and delivering APIs that seamlessly manage data between the server and users on Android and iOS devices. Additionally, I provide ongoing support for existing applications and undertake the planning, design, and documentation of optimized database changes essential for meeting specified requirements. My role extends to performing SQL optimizations on existing application features and conducting thorough data analysis and investigations to address any issues that may arise.</li>
                </ul>
              </li>
              <li>
                <h3>Web Programmer</h3>
                <p>Proweaver, Inc.</p>
                <span>2021 - 2023</span>
                <ul className={styles['to-dos']}>
                  <li>My position as Web Programmer is responsible for front-end, back-end, database planning, and creating scrum technique when building special projects, WordPress plugins, Company Tools. Also, I'm responsible on maintaining/fixing errors launched projects, Company Tools, Plugins, WordPress sites, Prestashop sites, and Shopify sites, as well as fixing Payments, Integration Payments (Paypal, Authorize, Square) considering myself as Full Stack Developer. Also, we are in charge of responding to client inquiries, concerns, and meetings with the client's agent in order to better understand their points of view.</li>
                </ul>
              </li>
              <li>
                <h3>Web Programmer - Internship</h3>
                <p>Coredev Solution Inc.</p>
                <span>2021 - 2021</span>
                <ul className={styles['to-dos']}>
                  <li>In charge of Developing and maintaining web application for Client's</li>
                </ul>
              </li>
              <li>
                <h3>IT Department - Internship</h3>
                <p>University of Cebu Medical Center.</p>
                <span>2020 - 2020</span>
                <ul className={styles['to-dos']}>
                  <li>In charge of Maintaining Company Tools application</li>
                </ul>
              </li>
              <li>
                <h3>Cashier - Full Time Working Student</h3>
                <p>Lizgan Distributors, Inc.</p><span>2016 - 2017</span>
                <ul className={styles['to-dos']}>
                  <li>In charge of Selling, Managing Books, and School Appearance</li>
                </ul>
              </li>
            </ul>
          </section>
          <NextArrow path="projects" text="Let's Continue To Projects." className="icon-after" />
          <Footer className="socials" />
        </PageWrapper>
      </Layout>
    )
  }
}

export default About;