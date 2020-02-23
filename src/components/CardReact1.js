import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../images/projectLogo.png';

class CardReact1 extends Component {
    
    render() {
        return (
            <div>
                <Card className="card-root">
                    <CardActionArea>
                        <CardMedia
                            className="card-media"
                            image={Image}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Resort Recording System
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Developed a website using JavaScript and Reactjs library. 
                            The website displays the recording of different rooms available with a Beach Resort. 

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" >
                            <a className="card-btn" href="https://github.com/MUNISHMAHEY1/react-beach-resort-project" target="_blank" rel="noopener noreferrer">
                            GitHub
                            </a>
                        </Button>
                        <Button size="small" color="primary">
                            <a className="card-btn" href="https://react-resort-recording-system.netlify.com/" target="_blank" rel="noopener noreferrer">
                            Live Demo
                            </a>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default CardReact1
