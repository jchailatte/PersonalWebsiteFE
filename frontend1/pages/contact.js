import React, {useState, useEffect, memo} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

import Background from '../components/background';
import Sidebar from '../components/sidebar';

const useStyles = makeStyles((theme)=>(
{
    fontstyle:{
        color: 'white',
        textShadow: '0 0 5px black, 0 0 5px black', 
        fontFamily: "'Caveat', cursive",
        textAlign: 'center'
    },
    formbackground:{
        minHeight: '60vh',
        backgroundImage: `url(/graphics/whitestrokes.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
    },
}));

function ContactContent(prop) {
    const classes = useStyles();
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    const [values, setValues] = React.useState({
        name: "",
        email:"",
        subject: "",
        message:"",
    });

    const [errors, setErrors] = React.useState({
        valid: false
    });

    React.useEffect(()=>{
        if(errors.valid)
        {
            console.log(values)
        }
    }, [errors]);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    //I hate form validation -_-
    const errorCheck = (e) => {
        e.preventDefault();
        console.log("click");

        Object.keys(values).forEach((key, index) =>
            {
                if(values[key] == "")
                {
                    setErrors(prevState=>{return{...prevState, [key]: true}});
                }
                else
                {
                    setErrors(prevState=>{return{...prevState, [key]: false}});
                }
            }
        );

        if(!validEmailRegex.test(values.email))
        {
            setErrors(prevState=>{return{...prevState, email: true}});
        }
        else
        {
            setErrors(prevState=>{return{...prevState, email: false}});
        }
        
        setErrors(prevState=>{return{...prevState, valid: !(prevState.name || prevState.subject || prevState.email || prevState.message )}})
    };

    return(
        <Grid container item spacing={3} xs={12} md={7} className={classes.formbackground}>
            <Grid item xs={12}>
                <Typography variant="h2" className={classes.fontstyle}>
                    Contact Me!
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Name" 
                    variant="outlined" 
                    required
                    fullWidth
                    value={values.name || ""}
                    onChange={handleChange('name')}
                    error={errors.name || false}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Email"
                    variant="outlined"
                    required
                    fullWidth
                    value={values.email || ""}
                    onChange={handleChange('email')}
                    error={errors.email || false}
                /> 
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Subject"
                    variant="outlined"
                    required
                    fullWidth
                    value={values.subject || ""}
                    onChange={handleChange('subject')}
                    error={errors.subject || false}
                /> 
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Message"
                    variant="outlined"
                    required
                    fullWidth
                    multiline
                    rows={15}
                    value={values.message || ""}
                    onChange={handleChange('message')}
                    error={errors.message || false}
                />
            </Grid>
            <Grid item xs={12}>
                <Button 
                    type="submit"
                    variant="contained" 
                    size="large" 
                    endIcon={<SendIcon/>} 
                    onClick={errorCheck}
                >
                    Submit
                </Button>
            </Grid>
        </Grid>
    )
}

export default function Contact(prop) {
    return(
        <Background>
            <Sidebar
                selected={'Contact Me'}
                blur={false}
                quote={"Whether it’s a thousand words or ten thousand arguments, none of them can compare to one's own eyes!"}
                by={"Records of the Human Emperor"}
                
            >
                <ContactContent></ContactContent>
            </Sidebar>
        </Background>
    )
}