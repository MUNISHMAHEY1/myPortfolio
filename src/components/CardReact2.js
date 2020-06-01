import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../images/portfolioLogo.png';

class CardReact2 extends Component {
    
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
                                Portfolio
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Built using JavaScript | Reactjs | HTML | CSS | Material ui API. 
                            Different concepts and API's were used like React-router-dom, react-icons to build the application.

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="contained" color="primary" >
                            <a className="card-btn" href="https://github.com/MUNISHMAHEY1/myPortfolio" target="_blank" rel="noopener noreferrer">
                            GitHub
                            </a>
                        </Button>
                        <Button variant="contained" color="secondary">
                            <a className="card-btn" href="https://munishportfolio.netlify.com/" target="_blank" rel="noopener noreferrer">
                            Live Demo
                            </a>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default CardReact2
