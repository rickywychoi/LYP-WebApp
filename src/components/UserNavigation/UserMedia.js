import React,  {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';
import styles from './UserMedia.module.css'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1050,
      height: 350,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    }
  }));

function UserMedia() {

    const classes = useStyles();
    return(
        <div className={styles.container}>
            <div className={styles.empty_container}>
            </div>
                <div className={classes.root}>
                    <Paper variant="outlined" square >
                        <GridList cellHeight={200} className={classes.gridList} cols={3}>
                            {tileData.map((tile) => (
                                <GridListTile key={tile.img} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </Paper>
                </div>
        </div>
    )
};

export default UserMedia;
