import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './Landing.css';

import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaBlogger } from 'react-icons/fa';

/* style helpers using our theme colors as "props" */
const useStyles = makeStyles({
  resumeBtn: (p) => ({
    color: p.primary,
    borderRadius: '30px',
    textTransform: 'inherit',
    textDecoration: 'none',
    width: '150px',
    fontSize: '1rem',
    fontWeight: 500,
    height: '50px',
    fontFamily: 'var(--primaryFont)',
    border: `3px solid ${p.primary}`,
    transition: '100ms ease-out',
    '&:hover': {
      backgroundColor: p.tertiary,
      color: p.secondary,
      border: `3px solid ${p.tertiary}`,
    },
  }),
  contactBtn: (p) => ({
    backgroundColor: p.primary,
    color: p.secondary,
    borderRadius: '30px',
    textTransform: 'inherit',
    textDecoration: 'none',
    width: '150px',
    height: '50px',
    fontSize: '1rem',
    fontWeight: 500,
    fontFamily: 'var(--primaryFont)',
    border: `3px solid ${p.primary}`,
    transition: '100ms ease-out',
    '&:hover': {
      backgroundColor: p.secondary,
      color: p.tertiary,
      border: `3px solid ${p.tertiary}`,
    },
  }),
});

function Landing() {
  const { theme, drawerOpen } = useContext(ThemeContext);
  const classes = useStyles(theme);

  return (
    <section className="landing" aria-label="Landing">
      <div className="landing--container">
        {/* LEFT STRIPE (color + socials at bottom) */}
        <div className="landing--left" style={{ backgroundColor: theme.primary }}>
          <div className="lcl--content">
            {socialsData?.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="landing--social" style={{ color: theme.secondary }} />
              </a>
            )}
            {socialsData?.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub className="landing--social" style={{ color: theme.secondary }} />
              </a>
            )}
            {socialsData?.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X">
                <FaTwitter className="landing--social" style={{ color: theme.secondary }} />
              </a>
            )}
            {socialsData?.youtube && (
              <a href={socialsData.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <FaYoutube className="landing--social" style={{ color: theme.secondary }} />
              </a>
            )}
            {socialsData?.blogger && (
              <a href={socialsData.blogger} target="_blank" rel="noreferrer" aria-label="Blog">
                <FaBlogger className="landing--social" style={{ color: theme.secondary }} />
              </a>
            )}
          </div>
        </div>

        {/* PHOTO overlapping the split */}
        <img
          className="landing--profile"
          src={headerData.image}
          alt={`${headerData.name} profile`}
          style={{ opacity: drawerOpen ? 0 : 1 }}
        />

        {/* RIGHT CONTENT */}
        <div className="landing--right" style={{ backgroundColor: theme.secondary }}>
          <div className="lcr--content" style={{ color: theme.tertiary }}>
	    <h6>{headerData.title}</h6>
            <h1>{headerData.name}</h1>

            <div className="lcr-buttonContainer">
              {headerData?.resumePdf && (
                <a href={headerData.resumePdf} download="resume" target="_blank" rel="noreferrer">
                  <Button className={classes.resumeBtn}>Download CV</Button>
                </a>
              )}
              <NavLink to="/#contacts" smooth spy duration={800}>
                <Button className={classes.contactBtn}>Contact</Button>
              </NavLink>
            </div>

            {/* Mobile-only socials (left stripe is hidden on mobile) */}
            <div className="socials--mobile">
              {socialsData?.linkedIn && (
                <a href={socialsData.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="landing--social" style={{ color: theme.tertiary }} />
                </a>
              )}
              {socialsData?.github && (
                <a href={socialsData.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub className="landing--social" style={{ color: theme.tertiary }} />
                </a>
              )}
              {socialsData?.twitter && (
                <a href={socialsData.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X">
                  <FaTwitter className="landing--social" style={{ color: theme.tertiary }} />
                </a>
              )}
              {socialsData?.youtube && (
                <a href={socialsData.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                  <FaYoutube className="landing--social" style={{ color: theme.tertiary }} />
                </a>
              )}
              {socialsData?.blogger && (
                <a href={socialsData.blogger} target="_blank" rel="noreferrer" aria-label="Blog">
                  <FaBlogger className="landing--social" style={{ color: theme.tertiary }} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
