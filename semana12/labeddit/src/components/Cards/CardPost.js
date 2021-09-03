import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import foto from '../../assets/foto.jpg'
import styled from 'styled-components'

export const Cards = styled(Card)`
    height: 350px;
    margin-top: 100px;
`

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 180,
    },
});

export default function MediaCard() {

    const classes = useStyles();

    return (
        <Cards className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={foto}
                    title="Post photo"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Guilherme
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Exemplo de conteúdo escrito do post.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Curtir
                </Button>
                <Button size="small" color="primary">
                    Comentários
                </Button>
            </CardActions>
        </Cards>
    );
}