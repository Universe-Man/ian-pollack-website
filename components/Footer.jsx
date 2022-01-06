import { Typography, Grid, Link } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

// import Link from 'components/router/Link';

const thisyear = new Date().getFullYear();

const useStyles = makeStyles(theme => ({
  container: {
    color: 'beige',
    // backgroundImage: 'url(/images/footer/Screen_1920_black.jpg)',
    backgroundColor: theme.palette.darkNavy,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '40px 0 20px',
    [theme.breakpoints.up('md')]: {
      // height: '300px',
      padding: '0',
    },
  },
  innerContainer: {
    marginBottom: '25px',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      flexFlow: 'row',
    },
  },
  spacer: {
    width: '30px',
  },
  verticalLine: {
    borderLeft: '1px solid',
    borderColor: theme.palette.yellow,
    width: '1px',
    margin: '0 5px 0',
  },
  legalSection: {
    marginTop: '20px',
  },
  lawyerLinks: {
    textDecoration: 'underline',
  },
  linkButtons: {
    minWidth: 'fit-content',
    padding: '5px 15px',
    margin: '0 auto 10px',
    display: 'flex',
    color: theme.palette.yellow,
    justifyContent: 'center',
    border: `${theme.palette.yellow} 1px solid`,
    maxWidth: '300px',
    '&.yellow': {
      color: theme.palette.black,
      backgroundColor: theme.palette.yellow,
      border: 'none',
    },
    '&:hover': {
      textDecoration: 'none',
    },
  },
  sticker: {
    width: '100px',
    position: 'relative',
    top: '-30px',
    left: '30px',
    transform: 'rotate(-12.5deg)',
  },
  howToHelp: {},
  caption: {
    width: '300px',
  },
  socialGroup: {
    padding: '35px 0 10px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      position: 'relative',
      top: '30px',
      padding: '0',
    },
  },
  moveUp: {
    position: 'relative',
    top: '-5px',
  },
  socialIcon: {
    // backgroundColor: theme.palette.yellow,
    width: '22.5px',
    height: '22.5px',
    marginLeft: '10px',
  },
  socialText: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  mobileOnly: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  desktopOnly: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
}));

const Footer = ({ className }) => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <>
      <Grid container className={clsx(classes.container, className)}>
        <Grid
          container
          item
          justify="center"
          alignItems="center"
          xs={10}
          className={classes.innerContainer}
          elevation={0}
        >
          <div>
            <Grid item xs={12}>
              <Typography className={classes.howToHelp} variant="subtitle2">
                Designed & Built by Ian Pollack
              </Typography>
              <Grid
                item
                xs={12}
                className={clsx(classes.legalSection, classes.desktopOnly)}
              >
                <Typography variant="subtitle1" align="center">
                  <span className={classes.moveUp}>
                    {'© '}
                    {thisyear}{' '}
                    <span className={classes.verticalLine} />
                  </span>
                  <Link
                    href="https://github.com/Universe-Man/"
                    underline="none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={classes.socialIcon}
                      alt="social-icon"
                      src="/images/logos/GitHub-Mark-Light-64px.png"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/ianjpollack/"
                    underline="none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={classes.socialIcon}
                      alt="social-icon"
                      src="/images/logos/linkedin-logo-white-1024x1024.png"
                    />
                  </Link>
                  <Link
                    href="mailto:ianjpollack@gmail.com"
                    underline="none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={classes.socialIcon}
                      alt="social-icon"
                      src="/images/logos/email-logo-white.png"
                    />
                  </Link>

                </Typography>
              </Grid>
            </Grid>
          </div>
          {/* <span className={classes.spacer} /> */}
          <Grid
            item
            xs={12}
            className={clsx(classes.legalSection, classes.mobileOnly)}
          >
            <Typography variant="subtitle2" align="center">
              <span className={classes.moveUp}>

                {'© '}
                {thisyear}{' '}
                <span className={classes.verticalLine} />
              </span>
              <Link
                href="https://github.com/Universe-Man/"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={classes.socialIcon}
                  alt="social-icon"
                  src="/images/logos/GitHub-Mark-Light-64px.png"
                />
              </Link>

              <Link
                href="https://www.linkedin.com/in/ianjpollack/"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={classes.socialIcon}
                  alt="social-icon"
                  src="/images/logos/linkedin-logo-white-1024x1024.png"
                />
              </Link>
              <Link
                href="mailto:ianjpollack@gmail.com"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={classes.socialIcon}
                  alt="social-icon"
                  src="/images/logos/email-logo-white.png"
                />
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
