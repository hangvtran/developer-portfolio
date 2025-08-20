import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import { FaPlay, FaCode } from 'react-icons/fa';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
  // Demo exists if it's a non-empty string
  const hasDemo = typeof demo === 'string' && demo.trim().length > 0;

  const useStyles = makeStyles(() => ({
    iconBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: 'all 0.25s ease',
      textDecoration: 'none',
      '&:hover': {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: 'scale(1.08)',
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: '1.15rem',
      lineHeight: 1,
      display: 'block',
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div
        key={id}
        className="singleProject"
        style={{ backgroundColor: theme.primary400 }}
      >
        <div className="projectContent">
          <h2
            id={name.replace(/\s+/g, '-').toLowerCase()}
            style={{ color: theme.tertiary }}
          >
            {name}
          </h2>

          <img src={image || placeholder} alt={name} />

          {/* Buttons row */}
          <div
            className={`project--showcaseBtn ${hasDemo ? '' : 'no-demo'}`}
            style={{ justifyContent: hasDemo ? 'space-between' : 'flex-end' }}
          >
            {/* Play / Demo (only if URL exists) */}
            {hasDemo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className={classes.iconBtn}
                aria-label="Demo"
              >
                <FaPlay className={classes.icon} />
              </a>
            )}

            {/* Code */}
            {code && (
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                className={classes.iconBtn}
                aria-label="Code"
              >
                <FaCode className={classes.icon} />
              </a>
            )}
          </div>
        </div>

        {/* Description slide-in */}
        <p
          className="project--desc"
          style={{ background: theme.secondary, color: theme.tertiary }}
        >
          {desc}
        </p>

        {/* Tags panel */}
        <div
          className="project--lang"
          style={{ background: theme.secondary, color: theme.tertiary80 }}
        >
          {Array.isArray(tags) &&
            tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
        </div>
      </div>
    </Fade>
  );
}

export default SingleProject;

