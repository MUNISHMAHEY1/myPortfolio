import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../images/crown-clothing.png';

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
                                CROWN Clothing
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Crown clothing is an E-Commerce website. This is an on going project built using JavaScript| React| Redux| Firebase| Stripe API| Google Login API.
                            
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="contained" color="primary" >
                            <a className="card-btn" href="https://github.com/MUNISHMAHEY1/crown-clothing" target="_blank" rel="noopener noreferrer">
                            GitHub
                            </a>
                        </Button>
                        <Button variant="contained" color="secondary">
                            <a className="card-btn" href="https://crown-clothing-private-limited.herokuapp.com/" target="_blank" rel="noopener noreferrer">
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
