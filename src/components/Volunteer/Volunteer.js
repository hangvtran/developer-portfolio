import React, { useContext } from 'react';
import './Volunteer.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { volunteerData } from '../../data/volunteerData';
import VolunteerCard from './VolunteerCard';

function Volunteer() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {volunteerData.achievements.length > 0 && (
                <div className="volunteers" id="volunteer" style={{ backgroundColor: theme.secondary }}>
                    <div className="volunteer-body">
                        <h1 style={{ color: theme.primary }}>Volunteer Work</h1>
                        <h4 style={{ color: theme.tertiary }}>{volunteerData.bio}</h4>
                    </div>
                    <div className="volunteer-cards">
                        {volunteerData.achievements.map(vol => (
                            <VolunteerCard
                                key={vol.id}
                                id={vol.id}
                                title={vol.title}
                                details={vol.details}
                                date={vol.date}
                                field={vol.field}
                                image={vol.image}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Volunteer;
