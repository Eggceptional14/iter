import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: theme.palette.common.white,
    marginRight: theme.spacing(2),
  },
  subtitle: {
    color: theme.palette.common.white,
  },
}));

const Banner = ({ destination, startDate, endDate }) => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <div>
        <Typography variant="h4" className={classes.title}>
          {destination}
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          {startDate} - {endDate}
        </Typography>
      </div>
    </div>
  );
};

export default Banner;
