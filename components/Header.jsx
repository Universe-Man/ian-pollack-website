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
  linkButtons: {
    minWidth: 'fit-content',
    padding: '0 10px',
    margin: '0 5px 0',
    display: 'none',
    color: theme.palette.neonGreen,
    // fontFamily: 'Ubuntu, sans-serif',
    textDecoration: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
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
    backgroundImage: 'linear-gradient(to bottom right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1))',
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
    // backgroundColor: '#022052',
  },
  verticalLine: {
    borderLeft: '1px solid',
    borderColor: 'beige',
    width: '1px',
    height: '30px',
    margin: '0 10px 0',
    display: 'none',
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
                data-cy="donate"
                onClick={event =>
                  handleMenuCloseWithLink({
                    event,
                    link: '/donate',
                  })
                }
              >
                Donate
                </MenuItem>
              <MenuItem
                data-cy="nominate"
                onClick={event =>
                  handleMenuCloseWithLink({
                    event,
                    link: '/nominate',
                  })
                }
              >
                Nominate
                </MenuItem>
              <MenuItem
                data-cy="the-big-idea"
                onClick={event =>
                  handleMenuCloseWithLink({
                    event,
                    link: '/the-big-idea',
                  })
                }
              >
                The Big Idea
                </MenuItem>
              <MenuItem
                onClick={event =>
                  handleMenuCloseWithLink({
                    event,
                    link: '/stories',
                  })
                }
              >
                Stories
                </MenuItem>
              <MenuItem
                onClick={event =>
                  handleMenuCloseWithLink({
                    event,
                    link: 'https://cvd.cm/syc',
                    target: '_blank',
                  })
                }
              >
                Volunteers
                </MenuItem>
            </Menu>
            <Link href="/" underline="none">
              {/* <img
                className={classes.logo}
                alt="logo"
                src="/images/ian.jpeg"
              /> */}
              <h2 className={classes.logo}>I</h2>
            </Link>
          </Grid>
        </Grid>
        {/* Desktop Buttons Below */}
        <Link
          className={classes.linkButtons}
          componenttype="button"
          href="#profile"
        >
          Profile
          </Link>
        <div className={classes.verticalLine} />

        <Link
          className={classes.linkButtons}
          componenttype="button"
          href="#experience"
        >
          Experience
          </Link>
        <div className={classes.verticalLine} />

        <Link
          className={classes.linkButtons}
          componenttype="button"
          href="#projects"
        >
          Projects
          </Link>
        <div className={classes.verticalLine} />
        <Link
          className={classes.linkButtons}
          componenttype="button"
          variant="outlined"
          href="#contact"
        >
          Contact
          </Link>
        <div className={classes.verticalLine} />

        <Link
          className={clsx(classes.linkButtons, classes.border)}
          componenttype="button"
          variant="outlined"
          href="/nominate"
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
