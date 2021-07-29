import React from "react";
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Shoes3 from "./shoes3.png";
import Shoes4 from "./shoes4.png";
import Shoes5 from "./shoes5.png";
import Shoes6 from "./shoes6.png";
const useStyles = makeStyles((theme) => ({
    color:{
      color:"white",
    },
      root: {
        maxWidth: 345,
        backgroundColor:"black",
        display:"flex",
        flexDirection:"column",
      },
      media: {
        height: 180,
        paddingTop:10
      },
      cardContainer:{
          display:"flex",
          justifyContent:"space-around",
      },
      text:{
          color:"white",
      }
    
    }));

    const Hero = () => {
        const classes = useStyles();
        return (
            <>    
            <div className={classes.cardContainer}>    
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
                component="img"
        className={classes.media}
        src={Shoes3}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" className={classes.text} component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
Explore      </Button>
    </CardActions>
  </Card>
  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
                component="img"
        className={classes.media}
        src={Shoes4}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" className={classes.text} component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
Explore      </Button>
    </CardActions>
  </Card>
     <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
                component="img"
        className={classes.media}
        src={Shoes5}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" className={classes.text} component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
Explore      </Button>
    </CardActions>
  </Card>
  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        component="img"
        src={Shoes6}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" className={classes.text} component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
Explore      </Button>
    </CardActions>
  </Card>

  </div>
  </>
  );
};

export default Hero;