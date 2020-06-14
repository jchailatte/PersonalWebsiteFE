import React, {useEffect} from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux'

import theme from '../components/theme';
import Background from '../components/background';
import Sidebar from '../components/sidebar';
import { useStore } from '../utils/store';

import 'react-pdf/dist/Page/AnnotationLayer.css';

//https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
//https://github.com/vercel/next.js/blob/canary/examples/with-redux/pages/_app.js

export default function App(props) {
    const { Component, pageProps } = props;
    const store = useStore(props.initialReduxState);

    useEffect(() => {
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
                <meta name="description" content="A little personal website for me or as I like to call it, my developer sandbox"></meta>
                <link rel="icon" href='/graphics/logo.ico'/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Provider store={store}>
                    <Background>
                        <Sidebar
                            selected={pageProps.selected}
                            quote={pageProps.quote}
                            by={pageProps.by}
                            blur={pageProps.blur}
                        >
                            <Component {...pageProps}></Component>
                        </Sidebar>
                    </Background>
                </Provider>
            </ThemeProvider>
        </React.Fragment>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
