import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Image from '../images/mypic.jpg'
import ContactList from './ContactList'

export class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid container spacing={3} className="contact-grid">
                    <Grid item xs={6}>
                        <h2 style={{fontSize:"2.5rem"}}>Munish Munish</h2>
                        <img
                            src={Image}
                            className="contact-img"
                            alt="Contact"
                        />
                        <p style={{ fontWeight:"bold", width:"75%", margin:"auto", paddingTop:"1rem"}}>
                        Enthusiastic Software Developer with 8 months of Software Development Experience. 
                        1 year of web development experience through projects. 3+ Academic and Individual projects successfully completed using Java, JavaScript and Python. 
                        Always open to challenges as it helps in growth of a person. Excellent Interpersonal and Problem solving Skills.
                        </p>
                    </Grid>
                    <Grid item xs={6}>
                        <h2 style={{fontSize:"2.5rem"}}>Contact Me</h2>
                        <hr className="contact-hr-style" />
                        <ContactList></ContactList>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Contact
