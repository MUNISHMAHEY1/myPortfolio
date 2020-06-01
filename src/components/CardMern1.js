import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../images/mern1.png';

class CardMern1 extends Component {
    
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
                        <hr style={{height:"0.05rem", backgroundColor:"black"}}></hr>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Post Your Thoughts
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            A website were you can post your thoughts as posts. Like and comment on other post as well.
                            Technology used is React, Express, Node, MongoDB, GraphQL, HTML5, CSS3

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="contained" color="primary" >
                            <a className="card-btn" href="https://github.com/MUNISHMAHEY1/MERN-GraphQL-Project" target="_blank" rel="noopener noreferrer">
                            GitHub
                            </a>
                        </Button>
                        <Button variant="contained" color="secondary" >
                            <a className="card-btn" href="https://postyourthoughts.netlify.app/" target="_blank" rel="noopener noreferrer">
                            Live Demo
                            </a>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default CardMern1
