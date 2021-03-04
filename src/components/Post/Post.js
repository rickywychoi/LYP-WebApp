import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
      maxWidth: 345
    }
  });

function Post() {
    const classes = useStyles();
    return(
        <Card className={classes.root}>
        <CardActionArea>
            <CardContent>
                
                <Typography gutterBottom variant="h5" component="h2">
                    Post
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    posting 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    posting 1
                </Typography>

            </CardContent>
        </CardActionArea>
        </Card>
    )
}

export default Post;