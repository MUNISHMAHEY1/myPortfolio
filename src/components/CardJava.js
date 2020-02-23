import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../images/java.jpg';

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
                            Search Engine
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Technologies used are Java, HTML. Used TST(Ternary Search Trie) data structure at the core to search through HTML files and display the result. 
                            Tried to reduce the Time Complexity to get the best result
                            

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" >
                            <a className="card-btn" href="https://github.com/MUNISHMAHEY1/SearchEngine" target="_blank" rel="noopener noreferrer">
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
