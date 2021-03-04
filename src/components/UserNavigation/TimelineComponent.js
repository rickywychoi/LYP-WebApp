import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import Typography from '@material-ui/core/Typography'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
// import FastfoodIcon from '@material-ui/icons/Fastfood';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '6px 16px'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main
  }
}))

function TimelineComponent () {
  const classes = useStyles()
  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant='body2' color='textSecondary'>
          March 3rd 2021
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant='outlined' color='primary'>
          {/* variant="outlined" color="primary" 아니면 secondary */}
          {/* <FastfoodIcon />아이콘은 지워도되고 선택가능 */}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant='h6' component='h1'>
            Post
          </Typography>
          <Typography>Write Description for post</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  )
}

export default TimelineComponent
