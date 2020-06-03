import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
// import { HomeIcon, MenuIcon } from '@material-ui/icons'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {MdHome} from 'react-icons/md'

const useStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(10),
    },
    title: {
        flexGrow: 1,
        // marginLeft: theme.spacing(1),
    },
}));



function Navbar() {
    const [ isOpen, setIsOpen ] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    const classes = useStyle();
    return (
        <div>
            <AppBar position="static" className="header-color">
                <Toolbar>
                <Link to="/"><MdHome className="homelogo"/></Link>
                    <Typography variant="h4" className={classes.title}>
                        Munish
                    </Typography>

                    
                    <div className={isOpen ? "nav-links show-nav": "nav-links"}>
                        <Link to="/aboutme" className="nav-link">
                            <Button color="inherit">About Me</Button>
                        </Link>
                        <Link to="/projects" className="nav-link" >
                            <Button color="inherit">Projects</Button>
                        </Link>
                        <Link to="/contact" className="nav-link" >
                            <Button color="inherit">Contact</Button>
                        </Link>
                    </div>
                    <button type="button" className="nav-btn" onClick={handleToggle}>
                        <FaAlignRight className="nav-icon"></FaAlignRight>
                    </button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
