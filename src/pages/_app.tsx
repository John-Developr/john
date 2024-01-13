import '@/styles/globals.css';
import React, { StrictMode, useEffect } from 'react';
import App from 'next/app';
import { PageTransition } from 'next-page-transitions';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import AppContext from '@/utils/context';

config.autoAddCss = false;

class MyApp extends App {
  componentDidMount() {
    const htmlElement = document.querySelector('html');
    try {
      const darkModeLocal = localStorage.getItem('dark-light-mode');
      if (!darkModeLocal || !['light-mode', 'dark-mode'].includes(darkModeLocal)) {
        htmlElement?.classList.add('light-mode'); // Default to light mode if invalid or not found
        localStorage.setItem('dark-light-mode', 'light-mode');
      } else {
        htmlElement?.classList.add(darkModeLocal);
      }
    } catch (error) {
      console.error('Error accessing local storage:', error);
      htmlElement?.classList.add('light-mode'); // Handle error by setting default mode
    }
  }

  render() {
    const nodeRef = React.createRef();
    const { Component, pageProps } = this.props;

    return (
      <>
        <PageTransition
          in
          nodeRef={nodeRef}
          timeout={400}
          classNames="page-transition"
          loadingDelay={300}
        >
          <AppContext.Provider value={{}}>
            <Component {...pageProps} />
          </AppContext.Provider>
        </PageTransition>
      </>
    );
  }
}

export default MyApp;
