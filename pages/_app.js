import '../styles/globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles, ThemeProvider } from '@mui/styles';
import { CssBaseline, Grid } from '@mui/material';
import Router from 'next/router';
// import { SnackbarProvider } from 'notistack';
// import NProgress from 'nprogress';
import theme from '../theme/theme';
// import { CurrentUserProvider } from 'models/user';
// import isServer from 'util/isServer';
// import '../style.css';

// import Header from 'components/Header';
// import Footer from 'components/Footer';

// import { StripeSecretProvider } from 'models/stripe';

// import FacebookPixel from 'components/FacebookPixel';

const useStyles = makeStyles({
  Footer: {
    marginTop: 'auto',
  },
  swiperContainer: {
    width: '600px',
    height: '300px',
  },
  Site: props => ({
    'min-height': '100vh',
    backgroundColor: props.color ? props.color : '#fff',
    flexWrap: 'nowrap',
  }),
});


function App({ Component, pageProps }) {
  // const { Component, pageProps } = props;
  const classes = useStyles(pageProps.styles);

  return (
    <>
      <Head>
        <title>Ian Pollack</title>
      </Head>
      <ThemeProvider theme={theme}>

        <Header />

        <Component {...pageProps} />
        {/* <Footer /> */}
      </ThemeProvider>

    </>

  )
}

export default App
