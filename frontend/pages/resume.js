import React, { useState } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
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
            quote: "",
            by: "",
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