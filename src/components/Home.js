import React, { Component } from 'react'
import { Grid, Avatar } from '@material-ui/core'
import Image from '../images/my-image.jpg'
import SocialLinks from './SocialLinks'

export class Home extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="home-grid">
                    <Grid item xs={12}>
                    <Avatar alt="Remy Sharp" src={Image}  style={{ margin:"auto", width:"15rem", height:"16rem"}} />
                        <div className='banner-text'>
                            <h1>Software Developer</h1>
                            <hr/>
                            <p>JavaScript | Reactjs | HTML | CSS | Bootstrap | Python | Django | MySQL | SQL</p>
                            <SocialLinks />
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Home
