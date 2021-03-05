import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

const FriendCard = () => {
    const classes = useStyles();
  return (
      <>
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Jay Han"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Jason Jin"
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                Note:
              </Typography>
              {" LOL best Top nani"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Tyler" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Tyler Lee"
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                 
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </>
  )
}

export default FriendCard;