import React, { Component } from "react";

import styles from "@/styles/home.module.css";
import Layout, { PageWrapper } from "../helpers/layout";
import NextArrow from "@/helpers/nextArrow";
import Image from "@/helpers/image";
import Footer from "@/components/footer";
import { Age, myPersonalAndWorkEmail } from "@/utils/meUtils";

interface HomeProps {}

interface HomeState {
  age: number;
}

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      age: Age()
    };
  }

  render() {
    const { age } = this.state;

    return (
      <Layout title="Home">
        <PageWrapper className="mid">
          <div className={styles.content}>
            <div className={styles.shortintro}>
              <h1>A {age}-years-old based in Cebu, Philippines</h1>
              <p>I design and code beautifully simple things, and I really love what I do</p>
              <div className={styles.action}>
                <a href={`mailto:${myPersonalAndWorkEmail}`} id="cardHover">Hire <b>JOHN</b> as Freelance/Employee</a>
                <NextArrow path="about" text="See More About Me" className="icon-after" />
              </div>
              <Footer className="socials" />
            </div>
            <div className={styles.avatar}>
              <Image src="/imgs/me-2.png" />
            </div>
          </div>
        </PageWrapper>
      </Layout>
    );
  }
}

export default Home;
