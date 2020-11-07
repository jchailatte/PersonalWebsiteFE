import React from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSSR from '@material-ui/core/NoSsr';

import PDFViewer from '../components/pdfviewer';
import { useResize } from '../utils/hooks/useResize';

const useStyles = makeStyles((theme) => ({

}));

export async function getStaticProps(context){
    return{
        props:{
            selected: 'Resume',
            quote: "Every single life has his or her own dreams. Precisely because all living beings have their own will makes this world so much more brilliant and exciting.",
            by: "Lord Xue Xing",
        }
    }
}

export default function Resume(props){
    const classes = useStyles();
    const dimensions = useResize('content');

    return(
        <React.Fragment>
            <Head>
                <title key="title">Jonathan Chai - Resume</title>
            </Head>
            <Typography variant='h5'>
                Updated: 11/06/2020
            </Typography>
            <NoSSR>
                <PDFViewer
                    url={"/doc/res.pdf"}
                    width={0.8*dimensions.width}
                    pageNumber={1}
                />
            </NoSSR>
        </React.Fragment>
    )
}