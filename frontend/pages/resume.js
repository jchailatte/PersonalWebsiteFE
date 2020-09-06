import React, { useState } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Document, Page, pdfjs } from 'react-pdf';

import { useResize } from '../utils/hooks/useResize';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme) => ({
    restyle:{
        display: 'flex',
        paddingTop: '5vh',
        justifyContent: 'center',
    },
    border:{
        borderStyle: 'solid',
        borderWidth: 'thick',
    },
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

export default function About(props){
    const classes = useStyles();
    const dimensions = useResize('content');

    return(
        <React.Fragment>
            <Head>
                <title key="title">Jonathan Chai - Resume</title>
            </Head>
            <Typography variant='h5'>
                Updated: 09/06/2020
            </Typography>
            <Document file={"/doc/res.pdf"} className={classes.restyle}>
                <Page 
                    pageNumber={1} 
                    className={classes.border}
                    width={0.8*dimensions.width}
                ></Page>
            </Document>
        </React.Fragment>
    )
}