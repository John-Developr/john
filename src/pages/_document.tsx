import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="author" content="John Carlo" />
          <meta
            name="keywords"
            content="Full Stack Developer, Software Engineer, Web Development, Coding, John Carlo"
          />
          <meta property="og:locale" content="en_PH" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Hey there! I'm John Carlo, a passionate Full Stack Developer creating awesome web experiences."
          />
          <meta
            property="og:description"
            content="Hey there! I'm John Carlo, a passionate Full Stack Developer creating awesome web experiences."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta property="og:title" content="John Carlo - Full Stack Developer" />
          <meta property="og:url" content="https://johncarlo.dev" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
