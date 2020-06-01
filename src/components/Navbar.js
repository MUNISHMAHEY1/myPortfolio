import React from 'react'
import { makeStyles } from '@material-ui/core'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
// import { HomeIcon, MenuIcon } from '@material-ui/icons'
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

    const classes = useStyle();
    return (
        <div className="">
            <AppBar position="static" className="header-color">
                <Toolbar>
                <Link to="/"><MdHome className="homelogo"/></Link>
                    <Typography variant="h4" className={classes.title}>
                        Munish
                    </Typography>
                    <Link to="/aboutme" className="nav-links">
                        <Button color="inherit">About Me</Button>
                    </Link>
                    <Link to="/projects" className="nav-links" >
                        <Button color="inherit">Projects</Button>
                    </Link>
                    <Link to="/contact" className="nav-links" >
                        <Button color="inherit">Contact</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
