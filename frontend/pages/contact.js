import React, {useState, useEffect, memo} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import NoSSR from '@material-ui/core/NoSsr';

import NetworkRequest from '../utils/NetworkRequest';
import Sidebar from '../components/sidebar';

const useStyles = makeStyles((theme)=>({
    fontstyle:{
        color: 'white',
        textShadow: '0 0 5px black, 0 0 5px black', 
        fontFamily: "'Caveat', cursive",
        textAlign: 'center'
    },
    formbackground:{
        minHeight: '60vh',
        backgroundImage: `url(/graphics/whitestrokes3.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center'
    },
    paper: {
        width: 400,
        backgroundImage: `url(/graphics/splat1.png)`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        padding: theme.spacing(2, 4, 3),
    },
    responsiveFont: {
        //do responsive font here
        //maybe shift fontStyle into theme
    }
}));

function ContactContent(prop) {
    const classes = useStyles();
    const rootRef = React.useRef(null);
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    const initialState ={
        name: "",
        email:"",
        subject: "",
        message:"",
        copy: false
    }

    const [values, setValues] = React.useState({
        name: "",
        email:"",
        subject: "",
        message:"",
        copy: false
    });

    const [errors, setErrors] = React.useState({
        valid: false
    });

    const [open, setOpen] = React.useState(false);
    const [valid, setValid] = React.useState(true);

    React.useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://www.google.com/recaptcha/api.js?render=" + process.env.RECAPTCHA_SITEKEY
        document.body.appendChild(script)
    }, [])

    React.useEffect(()=>{
        if(errors.valid) {
            window.grecaptcha.ready(_ => {
            window.grecaptcha
                .execute(process.env.RECAPTCHA_SITEKEY, { action: "homepage" })
                .then(token => {
                    sendForm(token)
                        .then(response => {
                            if(response.ok){
                                setValues({...initialState})
                                setValid(true);
                            }
                            else{
                                console.log(reponse.message)
                                setValid(false);
                            }
                            handleOpen();
                        })
                        .catch(error => {
                                setValid(false);
                                handleOpen();
                        })
                })
            })
        }
    }, [errors]);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleCheck = (event) => {
        setValues({...values, [event.target.name]: event.target.checked})
    }

    const handleOpen = () => {
        setOpen(true);  
    };

    const handleClose = () => {
        setOpen(false);
    };

    const errorCheck = (e) => {
        e.preventDefault();

        Object.keys(values).forEach((key, index) =>{
            if(values[key] == "") {
                setErrors(prevState=>{return{...prevState, [key]: true}});
            }
            else {
                setErrors(prevState=>{return{...prevState, [key]: false}});
            }
        });

        if(!validEmailRegex.test(values.email)) {
            setErrors(prevState=>{return{...prevState, email: true}});
        }
        else {
            setErrors(prevState=>{return{...prevState, email: false}});
        }
        
        setErrors(prevState=>{return{...prevState, valid: !(prevState.name || prevState.subject || prevState.email || prevState.message )}})
    };

    const sendForm = async(token) => {
        const server = process.env.RESTURL;
        const response = await NetworkRequest.post(
            server + "/contact/send", {
                token: token,
                name: values.name,
                email: values.email,
                subject: values.subject,
                message: values.message,
                copy: values.copy
            }
        );
        return response;
    }

    return(
        <React.Fragment>
        <Modal
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            open = {open}
            onClose = {handleClose}
            className={classes.modal}
            container={() => rootRef.current}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <img src={valid?"graphics/wcheckmark.png" : "graphics/werror.png"}></img>
                    <h1 className={classes.fontstyle}>{valid ? "Message Successfully Sent" : "Message Failed to Send"}</h1>
                </div>
            </Fade>
        </Modal>
            <Grid container item spacing={3} xs={12} md={7} className={classes.formbackground}>
                <Grid item xs={12}>
                    <Typography variant='h2' className={classes.fontstyle}>
                        Contact Me!
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Name" 
                        variant="outlined" 
                        required
                        fullWidth
                        value={values.name}
                        onChange={handleChange('name')}
                        error={errors.name || false}
                        autoFocus={true}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        required
                        fullWidth
                        value={values.email}
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
                        value={values.subject}
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
                        value={values.message}
                        onChange={handleChange('message')}
                        error={errors.message || false}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
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
                <Grid item xs={12} sm={8} >
                    <FormControlLabel
                        control={<Checkbox checked={values.copy} onChange={handleCheck} name="copy"/>}
                        label="Receive a copy"
                    />
                </Grid>
            </Grid>
            <div
                className="g-recaptcha"
                data-sitekey="6LeAYvkUAAAAAP1Lq-kAeelmFNjANdEJUvGjolY9"
                data-size="invisible"
            ></div>
        </React.Fragment>
    )
}

export default function Contact(prop) {
    return(
        <Sidebar
            selected={'Contact Me'}
            blur={false}
            quote={"Whether it’s a thousand words or ten thousand arguments, none of them can compare to one's own eyes!"}
            by={"Records of the Human Emperor"}
            
        >
            <NoSSR>
                <ContactContent></ContactContent>
            </NoSSR>
        </Sidebar>
    )
}