import React, { PropsWithChildren } from "react";
import Head from "next/head";
import { Karla } from "next/font/google";

import Header from "@/components/header";
import Cursor from "@/components/cursor";

const karla = Karla({ subsets: ["latin"] })

const Layout: React.FC<PropsWithChildren<{
    title?: string;
  }>> = ({ children, title = "Home" }) => {
    return (
    <>
      <Head>
        <title>{`${title} | John Carlo - Full Stack Developer`}</title>
        <meta
          name="msapplication-TileColor"
          // content={`${false ? '#000000' : '#FFFFFF'}`}
        />
        {/* <meta name="theme-color" content={`${false ? '#000000' : '#FFFFFF'}`} /> */}
      </Head>
      <div className={karla.className}>
        {children}
      </div>
    </>
  );
};
  
export const PageWrapper: React.FC<PropsWithChildren<{}> &
    React.HTMLAttributes<HTMLDivElement>> = ({
    children,
    title = null,
    // className = '',
    ...rest
    }) => {
    return (
      <>
        <Header />
          <section {...rest} id="main-content">
            <main className="container">
                {title && <h1 className="pages-title">{title}</h1>}
                {children}
            </main>
          </section>
        <Cursor />
      </>
    );
};
  
export default Layout;
  