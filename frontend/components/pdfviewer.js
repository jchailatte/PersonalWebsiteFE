import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Document, Page} from 'react-pdf';

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

export default function PDFViewer ({url, width, pageNumber}){
    const classes = useStyles();
    return(
        <Document 
            file={url} 
            className={classes.restyle}>
            <Page
                pageNumber={pageNumber} 
                width={width}
                className={classes.border}
            />
        </Document>
    );
}

PDFViewer.PropTypes = {
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    pageNumber: PropTypes.number.isRequired
}