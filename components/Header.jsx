import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks';
import { useRef } from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Router, { useRouter } from 'next/router';
import Link from '@mui/material/Link';
import clsx from 'clsx';
// import { keyframes } from '@mui/system';

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

const useStyles = makeStyles(theme => ({
  menuButton: {
    // marginRight: theme.spacing(2),
    color: theme.palette.black,
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    '& svg': {
      fontSize: '4.5rem',
    },
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  linkButtons: {
    minWidth: 'fit-content',
    padding: '0 10px',
    margin: '0 5px 0',
    display: 'none',
    // opacity: 0,
    color: theme.palette.neonGreen,
    animationName: '$fadeIn',
    animationDuration: '1s',
    animationFillMode: 'backwards',
    // animationDelay: '1s',
    // animation: `$fadeIn 4s infinite ease`,
    // animation: `fade 3000ms ${theme.transitions.easing.easeInOut}`,
    // fontFamily: 'Ubuntu, sans-serif',
    textDecoration: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  aniZero: {
    animationDelay: '0s',
  },
  aniFirst: {
    animationDelay: '.2s',
  },
  aniSecond: {
    animationDelay: '.4s',
  },
  aniThird: {
    animationDelay: '.6s',
  },
  aniFourth: {
    animationDelay: '.8s',
  },
  aniFifth: {
    animationDelay: '1s',
  },
  aniSixth: {
    animationDelay: '1.2s',
  },
  aniSeventh: {
    animationDelay: '1.4s',
  },
  // aniEighth: {
  //   animationDelay: '1.4s',
  // },

  // "@keyframes fade": {
  //   "0%": {
  //     opacity: 0,
  //     transform: "translateY(-200%)",
  //   },
  //   "100%": {
  //     opacity: 1,
  //     transform: "translateY(0)",
  //   },
  // },
  // donateLinkButton: {
  //   // colors for 'donate' and 'nominate' / colors for 'home', 'the big idea', and 'stories' below as 'other':
  //   color: theme.palette.yellow,
  //   backgroundColor: theme.palette.black,
  //   '&:hover': {
  //     color: theme.palette.black,
  //     transition: '0.3s linear',
  //   },
  // },
  // donateLinkOtherPage: {
  //   color: theme.palette.black,
  //   backgroundColor: theme.palette.yellow,
  //   '&:hover': {
  //     color: theme.palette.black,
  //     transition: '0.3s linear',
  //   },
  // },
  // donateLinkTermsPrivacyLegalPages: {
  //   color: theme.palette.orange,
  //   backgroundColor: theme.palette.black,
  //   '&:hover': {
  //     color: theme.palette.black,
  //     transition: '0.3s linear',
  //   },
  // },
  headerBar: {
    // colors for 'donate' / colors for 'home', 'the big idea', 'stories', and 'nominate' below:
    // backgroundColor: theme.palette.yellow,
    backgroundColor: theme.palette.darkNavy,
    // backgroundImage: 'linear-gradient(to bottom, rgba(34, 38, 35, 0), rgba(34, 38, 35, 1))',
    boxShadow: 'none',
    // padding: '40px 0 15px 20px',
    height: '100px',
    // backgroundImage: 'linear-gradient(to bottom right, rgba(43, 47, 69, 0), rgba(43, 47, 69, 1))', // SHOULD I USE THIS? DON'T KNOW IF THIS IS A GOOD LOOK (ALSO USING SOME RED?)

  },
  // headerHomePage: {
  //   backgroundColor: theme.palette.green,
  // },
  // headerBigIdeaPage: {
  //   backgroundColor: theme.palette.blue,
  // },
  // headerStoriesPage: {
  //   backgroundColor: theme.palette.yellow,
  // },
  // headerNominatePage: {
  //   backgroundColor: theme.palette.blue,
  // },
  // headerTermsPrivacyLegalPages: {
  //   backgroundColor: theme.palette.orange,
  // },
  toolbar: {
    padding: '0 50px',
  },
  logo: {
    width: '53px',
    height: 'auto',
    textAlign: 'center',
    fontSize: '40px',
    color: theme.palette.neonGreen,
    border: 'solid 3px',
    borderRadius: '30px',
    animationName: '$fadeIn',
    animationDuration: '1s',
    animationFillMode: 'backwards',
    // backgroundColor: '#022052',
  },
  verticalLine: {
    borderLeft: '1px solid',
    borderColor: 'beige',
    width: '1px',
    height: '30px',
    margin: '0 10px 0',
    display: 'none',
    animationName: '$fadeIn',
    animationDuration: '1s',
    animationFillMode: 'backwards',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  border: {
    border: 'solid 3px',
    borderRadius: '10px',
    padding: '5px 10px',
  },
}));

export default function MenuAppBar() {
  const router = useRouter();
  const classes = useStyles();
  const anchorRef = useRef(null);
  const navMenuState = usePopupState({
    variant: 'popover',
    popupId: 'navMenu',
  });
  const profileMenuState = usePopupState({
    variant: 'popover',
    popupId: 'profileMenu',
  });

  const handleMenuCloseWithLink = ({
    event,
    link = '',
    target = '',
    callback = null,
  }) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    if (link) {
      if (target === '_blank') {
        window.open(link, '_blank');
      } else {
        Router.push(link);
      }
    }

    if (callback) {
      callback();
    }

    profileMenuState.close();
    navMenuState.close();
  };
  return (
    <AppBar
      position="static"
      className={clsx(
        classes.headerBar //,
        // router.pathname === '/' && classes.headerHomePage,
        // router.pathname === '/the-big-idea' && classes.headerBigIdeaPage,
        // router.pathname === '/stories' && classes.headerStoriesPage,
        // router.pathname === '/nominate' && classes.headerNominatePage,
        // router.pathname === '/nominate/thank-you' && classes.headerNominatePage,
        // router.pathname === '/terms' && classes.headerTermsPrivacyLegalPages,
        // router.pathname === '/privacy' && classes.headerTermsPrivacyLegalPages,
        // router.pathname === '/legal' && classes.headerTermsPrivacyLegalPages
      )}
    >
      <Toolbar className={classes.toolbar}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={6} md={3}>
            <Menu keepMounted {...bindMenu(navMenuState)}>
              <MenuItem
                data-cy="profile"
                onClick={event =>
                  handleMenuCloseWithLink({
                    event,
                    link: '#profile',
                  })
                }
              >
                Profile
                </MenuItem>
              <MenuItem
                data-cy="experience"
                onClick={event =>
                  handleMenuCloseWithLink({
                    event,
                    link: '#experience',
                  })
                }
              >
                Experience
                </MenuItem>
              <MenuItem
                data-cy="projects"
                onClick={event =>
                  handleMenuCloseWithLink({
                    event,
                    link: '#projects',
                  })
                }
              >
                Projects
                </MenuItem>
              {/* <MenuItem
                data-cy="contact"
                onClick={event =>
                  handleMenuCloseWithLink({
                    event,
                    link: '#contact',
                  })
                }
              >
                Contact
                </MenuItem> */}
              <MenuItem
                data-cy="resume"
                onClick={event =>
                  handleMenuCloseWithLink({
                    event,
                    link: '/documents/IanPollackSoftwareEngineerResume.pdf',
                    target: '_blank',
                  })
                }
              >
                Resume
                </MenuItem>
            </Menu>
            <Link href="/" underline="none">
              {/* <img
                className={classes.logo}
                alt="logo"
                src="/images/ian.jpeg"
              /> */}
              <h2 className={clsx(classes.logo, classes.aniZero)}>I</h2>
            </Link>
          </Grid>
        </Grid>
        {/* Desktop Buttons Below */}
        <Link
          className={clsx(classes.linkButtons, classes.first)}
          componenttype="button"
          href="#profile"
        >
          Profile
          </Link>
        <div className={clsx(classes.verticalLine, classes.aniFifth)} />

        <Link
          className={clsx(classes.linkButtons, classes.aniSecond)}
          componenttype="button"
          href="#experience"
        >
          Experience
          </Link>
        <div className={clsx(classes.verticalLine, classes.aniSixth)} />

        <Link
          className={clsx(classes.linkButtons, classes.aniThird)}
          componenttype="button"
          href="#projects"
        >
          Projects
          </Link>
        {/* <div className={classes.verticalLine} />
        <Link
          className={classes.linkButtons}
          componenttype="button"
          variant="outlined"
          href="#contact"
        >
          Contact
          </Link> */}
        <div className={clsx(classes.verticalLine, classes.aniSeventh)} />

        <Link
          className={clsx(classes.linkButtons, classes.aniFourth, classes.border)}
          componenttype="button"
          variant="outlined"
          href="/documents/IanPollackSoftwareEngineerResume.pdf"
          target="_blank"
        >
          Resume
          </Link>
        {/* Mobile Hamburger Menu Below */}
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          data-cy="auth-menu-button"
          {...bindTrigger(navMenuState)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
