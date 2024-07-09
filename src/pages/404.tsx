import React, { Component } from "react";
import Image from "next/image";

import styles from "@/styles/404.module.css";
import Layout, { PageWrapper } from "@/helpers/layout";
import NextArrow from "@/helpers/nextArrow";
import Footer from "@/components/footer";

interface Custom404Props {}

interface Custom404State {
  age: number;
}

class Custom404 extends Component<Custom404Props, Custom404State> {
    
  render() {
    return (
      <Layout title="404 - Page Not Found">
        <PageWrapper className="mid page-404-wrapper">
          <div className={styles.container}>
            <div className={styles.content}>
              <h1>404</h1>
              <h2>Page Not Found</h2>
              <p>Looks like the page you're trying to reach doesn't exist or might have been deleted.</p>
              <Footer className="socials align-right" />
              <NextArrow path="/" text="Go Back Home." className="icon-before" />
            </div>
            <Image 
              className={styles["dot-image"]}
              src="/imgs/group-dot(2).png" 
              alt="" 
              width={47} 
              height={200} 
              objectFit="cover" 
              priority={true} />
          </div>
        </PageWrapper>
      </Layout>
    );
  }
}

export default Custom404;
