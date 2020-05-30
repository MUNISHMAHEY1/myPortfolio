import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {FaPhoneSquare, FaSkype} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

export class ContactList extends Component {
    render() {
        return (
            <div className="contact-list">
                <List >
                    <ListItem >
                        <ListItemIcon>
                            <FaPhoneSquare style={{fontSize:"3rem", color:"black"}}></FaPhoneSquare>
                        </ListItemIcon>
                        <ListItemText><p style={{fontSize:"20px"}} >+1 (226) 975-6101</p></ListItemText>
                    </ListItem>
                    
                    <ListItem >
                        <ListItemIcon>
                            <MdEmail style={{fontSize:"3rem", color:"black"}}/>
                        </ListItemIcon>
                        <ListItemText><p style={{fontSize:"20px"}} >munish@uwindsor.ca</p></ListItemText>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon>
                            <MdEmail style={{fontSize:"3rem", color:"black"}}/>
                        </ListItemIcon>
                        <ListItemText> <p style={{fontSize:"20px"}} >munish2mahey@gmail.com </p></ListItemText>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon>
                            <FaSkype style={{fontSize:"3rem", color:"black"}}/>
                        </ListItemIcon>
                        <ListItemText> <p style={{fontSize:"20px"}} >munishmahey1</p></ListItemText>
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default ContactList
