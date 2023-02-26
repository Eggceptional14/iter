import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  CardMedia, 
  Paper,
  Grid,
  Button
} from '@material-ui/core';
import Rating from '@mui/material/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../src/components/Navbar';


const itineraryData = [
  {
    date: 'Mon, Feb 14',
    startTime: '10:00 AM',
    endTime: '1:00 PM',
    rating: 4.2,
    location: 'Museum of Modern Art',
    details: 'Tour of the modern art exhibit',
    image: 'https://imageio.forbes.com/specials-images/imageserve/62baf0bb91f8ba58ef4a638a/Sunrise-with-Grand-Palace-of-Bangkok--Thailand/960x0.jpg?format=jpg&width=960'
  },
  {
    date: 'Tue, Feb 15',
    startTime: '3:00 PM',
    endTime: '4:00 PM',
    rating: 4.6,
    location: 'Central Park Zoo',
    details: 'Visit to the zoo and feeding the penguins',
    image: 'https://imageio.forbes.com/specials-images/imageserve/62baf0bb91f8ba58ef4a638a/Sunrise-with-Grand-Palace-of-Bangkok--Thailand/960x0.jpg?format=jpg&width=960'
  },
  {
    date: 'Wed, Feb 16',
    startTime: '5:00 PM',
    endTime: '6:00 PM',
    rating: 4.7,
    location: 'Restaurant XYZ',
    details: 'Dinner reservation',
    image: 'https://imageio.forbes.com/specials-images/imageserve/62baf0bb91f8ba58ef4a638a/Sunrise-with-Grand-Palace-of-Bangkok--Thailand/960x0.jpg?format=jpg&width=960'
  },
];

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg') no-repeat center center fixed`,
    backgroundSize: 'cover',
  },
  title: {
    fontFamily: 'ASAP, sans-serif',
    color: '#fff',
    fontSize: '5rem',
    textAlign: 'center',
    margin: 0,
  },
  detail: {
    fontFamily: 'ASAP, sans-serif',
    color: '#fff',
    fontSize: '2rem',
    textAlign: 'center',
    margin: 0,
  },
  itineraryCard: {
    maxWidth: 600,
    margin: '20px auto',
    backgroundColor: 'var(--light-ivory)',
  },
  itineraryCardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px !important',
    backgroundColor: 'white',
  },
  itineraryCardImage: {
    width: '200px',
    height: 'auto',
    marginRight: '16px',
  },
  itineraryCardTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  itineraryCardDetail: {
    fontSize: '1rem',
    marginBottom: '8px',
  },
  itineraryCardRating: {
    fontSize: '1rem',
  },
  bookNowButton: {
    display: 'block',
    margin: '0',
    backgroundColor: 'var(--black)',
    borderRadius: 50,
    width: 250,
  },
}));

const ItineraryPage = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.imageContainer}>
        <h1 className={classes.title}>Bangkok</h1>
        <h2 className={classes.detail}>Dec 15, 2022 - Dec 17, 2022</h2>
      </div>
      <Grid container spacing={3} style={{ marginLeft: -200}} className={classes.itineraryCardContainer}>
        {itineraryData.map((item) => (
          <Grid item xs={12} key={item.location}>
            <Card className={classes.itineraryCard}>
              <CardContent className={classes.itineraryCardContent}>
                <CardMedia
                  component="img"
                  image={item.image}
                  className={classes.itineraryCardImage}
                />
                <div>
                  <Typography variant="h6" className={classes.itineraryCardTitle}>
                    {item.location}
                  </Typography>
                  <Typography variant="body1" className={classes.itineraryCardDetail}>
                    {item.details}
                  </Typography>
                  <Typography variant="body1" className={classes.itineraryCardDetail}>
                    {item.date} - {item.startTime} to {item.endTime}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={item.rating}
                    precision={0.1}
                    readOnly
                    className={classes.itineraryCardRating}
                  />
                  <Button variant="contained" color="primary" className={classes.bookNowButton}>
                    Book now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};


export default ItineraryPage;
