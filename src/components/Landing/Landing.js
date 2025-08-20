import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './Landing.css';

import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaBlogger } from 'react-icons/fa';
import tableauLogo from '../../assets/png/tableau2.png'; // ensure this file exists

/* style helpers using theme colors as props */
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
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="landing--social">
                <div className="icon-box">
                  <FaLinkedin style={{ color: theme.secondary }} />
                </div>
              </a>
            )}

            {socialsData?.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="landing--social">
                <div className="icon-box">
                  <FaGithub style={{ color: theme.secondary }} />
                </div>
              </a>
            )}

            {socialsData?.tableau && (
              <a href={socialsData.tableau} target="_blank" rel="noreferrer" aria-label="Tableau" className="landing--social">
                <div className="icon-box">
                  <img src={tableauLogo} alt="Tableau" />
                </div>
              </a>
            )}

            {socialsData?.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X" className="landing--social">
                <div className="icon-box">
                  <FaTwitter style={{ color: theme.secondary }} />
                </div>
              </a>
            )}

            {socialsData?.youtube && (
              <a href={socialsData.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="landing--social">
                <div className="icon-box">
                  <FaYoutube style={{ color: theme.secondary }} />
                </div>
              </a>
            )}

            {socialsData?.blogger && (
              <a href={socialsData.blogger} target="_blank" rel="noreferrer" aria-label="Blog" className="landing--social">
                <div className="icon-box">
                  <FaBlogger style={{ color: theme.secondary }} />
                </div>
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

            {/* Mobile-only socials (left stripe hidden on mobile) */}
            <div className="socials--mobile">
              {socialsData?.linkedIn && (
                <a href={socialsData.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="landing--social">
                  <div className="icon-box">
                    <FaLinkedin style={{ color: theme.tertiary }} />
                  </div>
                </a>
              )}

              {socialsData?.github && (
                <a href={socialsData.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="landing--social">
                  <div className="icon-box">
                    <FaGithub style={{ color: theme.tertiary }} />
                  </div>
                </a>
              )}

              {socialsData?.tableau && (
                <a href={socialsData.tableau} target="_blank" rel="noreferrer" aria-label="Tableau" className="landing--social">
                  <div className="icon-box">
                    <img src={tableauLogo} alt="Tableau" />
                  </div>
                </a>
              )}

              {socialsData?.twitter && (
                <a href={socialsData.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X" className="landing--social">
                  <div className="icon-box">
                    <FaTwitter style={{ color: theme.tertiary }} />
                  </div>
                </a>
              )}

              {socialsData?.youtube && (
                <a href={socialsData.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="landing--social">
                  <div className="icon-box">
                    <FaYoutube style={{ color: theme.tertiary }} />
                  </div>
                </a>
              )}

              {socialsData?.blogger && (
                <a href={socialsData.blogger} target="_blank" rel="noreferrer" aria-label="Blog" className="landing--social">
                  <div className="icon-box">
                    <FaBlogger style={{ color: theme.tertiary }} />
                  </div>
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
