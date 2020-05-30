import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../components/theme';
import Background from '../components/background';

import 'react-pdf/dist/Page/AnnotationLayer.css';

//https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js

export default function App (props) {
    const { Component, pageProps } = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>CaeCeus - Jonathan Chai</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <meta name="description" content="A little personal website for me or as I like to call it, my developer sand-box"></meta>
                <link rel="icon" href='/graphics/logo.ico'/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Background>
                    <Component {...pageProps}></Component>
                </Background>
            </ThemeProvider>
        </React.Fragment>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};