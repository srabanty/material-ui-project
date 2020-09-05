import React from 'react';
import './Post.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
const Post = (props) => {
    // console.log(props);
    const {id,title,body} = props.post;
    const classes = useStyles();
    return (
    <Container flexDirection="row">
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                <Typography style={{color:'#E3004E'}} gutterBottom variant="h5" component="h2">
                    Post {id}
                </Typography>
                <Typography class="fixedHeight" style={{color:'black'}} gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {body}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="secondary">
                <Link to={`/posts/${id}`}>Read More</Link>
                </Button>
            </CardActions>
        </Card>
    </Container>
    );
};

export default Post;