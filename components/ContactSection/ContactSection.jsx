import { useState, useRef } from 'react'

import emailjs from '@emailjs/browser';
import { Box, Button, Typography } from '@mui/material'

import styles from './ContactSection.module.css';

export default function ContactSection() {
    const form = useRef();
    const [status, setMessageStatus] = useState("")
    const [isDisabled, setDisabled] = useState(false)
    const [messageData, setMessageData] = useState({
        user_name: "",
        user_email: "",
        phone: "",
        message: ""
    })

    function handleChange (e) {
        setMessageData({
            ...messageData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit (e) {
        e.preventDefault()
        if (!messageData.user_name) {
            setMessageStatus("Please provide a name")
            return
        } else if (!messageData.user_email) {
            setMessageStatus("Please provide an email address")
            return
        } else if (!messageData.message) {
            setMessageStatus("Please provide a message")
            return
        }

        emailjs.sendForm('service_ayvdp8h', 'template_fnm1ty4', form.current, 'QxOOcszgK8UxwmM-h')
        .then((result) => {
            setMessageStatus("We got your message. Thanks for the feedback!")
            setDisabled(true)
        }, (error) => {
            setMessageStatus("Oops, looks like something went wrong, please contact the administrator")
        });
    }

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactMessage}>
                <h1>Get in touch with us!</h1>
                <h3>help@KOWmeds.com</h3>
                <br/>
                <h3>If you have a question, a comment, or need help using our services, leave us a message. We'll get back to you as soon as possible.</h3>
                <br/>
                <h3>Are you a pharmacy looking to join our network? Please provide your contact information so that one of our executives can reach you to schedule a meeting.</h3>
            </div>
                <form className={styles.contactForm} onSubmit={handleSubmit} ref={form}>
                    <h2>Name*</h2>
                        <input
                        type='text'
                        name='user_name'
                        placeholder='Your Name'
                        className={styles.contactInput}
                        required
                        onChange={handleChange}
                        />
                    <br/>
                    <h2>Email*</h2>
                        <input
                        type='email'
                        name='user_email'
                        placeholder='Your Email' 
                        className={styles.contactInput}
                        required
                        onChange={handleChange}
                        />
                    <br/>
                    <h2>Phone</h2>
                        <input
                        type='tel'
                        name='phone'
                        placeholder='Phone Number'
                        className={styles.contactInput}
                        onChange={handleChange}
                        />
                    <br/>
                    <h2>Comments*</h2>
                        <textarea
                        name='message'
                        placeholder='Comments'
                        className={styles.contactInputComment}
                        onChange={handleChange}
                        rows={8}
                        />
                    {
                        status? 
                            <Box sx={{textAlign: "center", mt: "5px", color: status === "We got your message. Thanks for the feedback!"? "green" : "red"}}>
                                <Typography>
                                    {status}
                                </Typography>
                            </Box> : null
                    }
                    <Button 
                        variant='contained' 
                        type="submit" 
                        disabled={isDisabled} 
                        sx={{width: "100%", margin: "15px auto"}}
                    >
                        Send Message
                    </Button>
                </form>
        </div>
    );
}
