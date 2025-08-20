import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';
import './Volunteer.css';

function VolunteerCard({ id, title, details, date, field, image }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    volunteerCard: {
      backgroundColor: theme.primary30,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem',
      borderRadius: '20px',
      marginBottom: '1.5rem',
      width: '100%',
      '&:hover': {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div key={id} className={`volunteercard ${classes.volunteerCard}`}>
        {/* Left content: date, title, org, details */}
        <div className="volunteercard-content">
          {/* Date (like Experience h6) */}
          <h6 style={{ color: theme.primary }}>{date}</h6>

          {/* Title (like Experience h4) */}
          <h4 style={{ color: theme.tertiary }}>{title}</h4>

          {/* Org / field (like Experience h5) */}
          <h5 style={{ color: theme.tertiary80 }}>{field}</h5>

          {/* Optional details paragraph */}
          {details && <p style={{ color: theme.tertiary80 }}>{details}</p>}
        </div>

        {/* Right image */}
        <div className="volunteercard-imgcontainer">
          <img src={image} alt={title} style={{ objectFit: 'contain' }} />
        </div>
      </div>
    </Fade>
  );
}

export default VolunteerCard;



