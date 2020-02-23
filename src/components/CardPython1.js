import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../images/python.jpg';

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
                                Ballot Block
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Worked on developing a blockchain based voting system that can used to conduct elections and have the 
                            information available publicly without having to worry about the data reliability. 
                            

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" >
                            <a className="card-btn" href="https://github.com/MUNISHMAHEY1/BallotBlock" target="_blank" rel="noopener noreferrer">
                            GitHub
                            </a>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default CardReact1
