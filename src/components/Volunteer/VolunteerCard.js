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
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`volunteercard ${classes.volunteerCard}`}>
                {/* Left content: date, title, details, field */}
                <div className="volunteercard-content">
                    <h5
                        style={{
                            fontSize: '1.2rem',
                            fontWeight: '500',
                            color: theme.primary,
                            marginBottom: '0.5rem',
                        }}
                    >
                        {date}
                    </h5>

                    <div className="volunteercard-details1">
                        <h2 style={{ color: theme.tertiary }}>{title}</h2>
                        <p style={{ color: theme.tertiary80 }}>{details}</p>
                    </div>

                    <h5
                        style={{
                            fontSize: '1rem',
                            color: theme.primary,
                            marginTop: '0.5rem',
                        }}
                    >
                        {field}
                    </h5>
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


