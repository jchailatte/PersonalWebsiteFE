import NextApp from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import '../css/styles.css';

const theme = {

}
export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="icon" href='/graphics/logo.ico'/>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}