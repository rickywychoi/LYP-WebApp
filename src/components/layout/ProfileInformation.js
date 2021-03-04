import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import UplaodIcon from '../Icon/UploadIcon'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  empty_container: {
    height: 50,
  }
});

function ProfileInformation() {
  const classes = useStyles();
  return (
    <>
    <Typography className={classes.pos} color="textSecondary">

      <Box alignItems="center" display="flex">
        <Box>
          <HomeRoundedIcon /> 
        </Box>
        <Box>
          Vancouver
        </Box>
      </Box>

      <Box alignItems="center" display="flex">
        <Box>
          <LocationOnIcon/>
        </Box>
        <Box>
          Born in Seoul
        </Box>
      </Box>


      <Typography variant="body2" component="p" align='center'>
        Love Your Planet is a social media platform for connecting people in the world who love nature, collaborating, and having voices towards sustainable living.
      </Typography>


      <Typography align='center'>
        <Box alignItems="center" display="flex" align='center'>
          <Box>
            <Fab size="small"color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
          </Box>
          <Box>
            <UplaodIcon/>
          </Box>
        </Box>
      </Typography>
      
    </Typography>
    </>
  );
}
export default ProfileInformation;