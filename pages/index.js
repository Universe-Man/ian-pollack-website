// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import { Grid, Typography, Link } from '@material-ui/core';
import { Grid, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../theme/theme';
import clsx from 'clsx';



const useStyles = makeStyles(() => ({
  masterContainer: {
    backgroundColor: theme.palette.darkNavy,
    // backgroundImage: 'linear-gradient(to bottom right, rgba(1, 36, 10, 0), rgba(1, 36, 10, 1))',
  },
  container: {
    padding: '90px 60px 60px',
    // backgroundColor: theme.palette.darkNavy,
    // backgroundImage: 'url(/images/ian.jpeg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',

  },
  text: {
    // fontSize: '100px',
    // marginRight: '300px',
    // fontFamily: theme.typography.fontFamily,
    // fontFamily: 'Ubuntu',
    // fontWeight: '700',
    color: 'beige',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  subText: {
    maxWidth: '910px',
  },
  bodyText: {
    marginLeft: '0',
  },
  rightAlign: {
    textAlign: 'right',
  },
  green: {
    color: theme.palette.chillerGreen,
  },
  blueGray: {
    color: theme.palette.blueGray,
  },
  smPadBottom: {
    paddingBottom: '10px',
  },
  lrgPadBottom: {
    paddingBottom: '50px',
  },
  flex: {
    display: 'flex',
  },
  logo: {
    borderRadius: '250px',
    margin: '90px 0 0 50px',
    backgroundColor: 'green',
  },
  link: {
    textDecoration: 'none',
    textDecorationColor: 'none',
  },
  listItem: {
    '&::marker': {
      color: theme.palette.chillerGreen,
    }
  },
}));



const Index = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className={clsx(classes.container, classes.masterContainer)}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid container className={classes.container} xs={12}>

          <Grid item xs={12}>
            <Typography variant="h1" className={clsx(classes.text, classes.lrgPadBottom)}>
              hello <span className={classes.green}>friend</span>.
            </Typography>
          </Grid>
          <Grid item xs={11} className={classes.subText}>
            <Typography variant="h3" className={clsx(classes.text, classes.rightAlign)}>
              my name is <span className={classes.green}>Ian Pollack</span>.
          </Typography>
            <Typography variant="h3" className={clsx(classes.text)}>
              i&apos;m formerly a baby,
          </Typography>
            <Typography variant="h3" className={clsx(classes.text, classes.rightAlign)}>
              and currently a <span className={classes.green}>Software Engineer</span>.
          </Typography>

          </Grid>
        </Grid>
        <Grid container className={classes.container} xs={12}>
          <Grid item xs={12} className={classes.flex}>
            <div>
              <Typography variant="h3" id="profile" className={clsx(classes.text, classes.smPadBottom)}>
                profile<span className={classes.green}>.</span>
              </Typography>

              <Typography variant="h5" className={clsx(classes.text, classes.bodyText)}>
                <br />
                <div>
                  Hey there! I'm a Software Engineer with a passion to be part of a team that builds great products, and a love for creative thinking and solving real-life problems through code. I want to help build a cohesive and efficient team working towards growing an organization I am proud to be a part of.
              </div>
                <br />
                <div>
                  I have experience wearing multiple hats, driving a project forward and facilitating its progress to launch as both an Engineer and a Project Manager, and I'm eager to continue to learn and grow.
              </div>
                <br />
                <div>
                  In my free time, I perform improv and standup comedy, deal craps and blackjack, and play the ukulele. I love baseball, "Survivor", and playing board games with friends.
              </div>

              </Typography>
            </div>
            <div>
              <img
                className={classes.logo}
                alt="logo"
                src="/images/ian.jpeg"
              />

            </div>

          </Grid>

        </Grid>
        <Grid container className={classes.container} xs={12}>
          <Grid item xs={12}>
            <Typography variant="h3" id="experience" className={clsx(classes.text, classes.smPadBottom)}>
              experience<span className={classes.green}>.</span>
            </Typography>
            <br />
            <Typography variant="h4" className={clsx(classes.text, classes.bodyText, classes.green)}>
              <Link href="https://lightmatter.com/" target="_blank" className={clsx(classes.link, classes.green)}>
                Lightmatter
              </Link>
            </Typography>
            <Typography variant="h5" className={clsx(classes.text, classes.bodyText)}>
              {/* <br /> */}
              <ul>
                <li className={classes.listItem}>Built "Save Your City" website using Next.js/React, and Django/Wagtail; the site collects donations to support NYC businesses negatively affected by COVID-19.</li>
                <li className={classes.listItem}>Built new frontend components, page templates, and features to complete client requests (HTML, React.js, Django, Wagtail, WordPress).</li>
                <li className={classes.listItem}>Used CSS and applicable libraries (Sass, MUI, etc.) to style client work to match UI/UX designer's mock-up.</li>
                <li className={classes.listItem}>Updated website content via code changes or WordPress management to support clients with new promos, specials, and business decisions.</li>
                <li className={classes.listItem}>Displayed excellent communication with clients and co-workers by posing questions to ensure a clear understanding of a client’s needs, as well as with the internal team to unblock developers and ensure a sprint’s success.</li>
                <li className={classes.listItem}>Proven experience live-demoing ticketed work in sprint syncs with clients.</li>
                <li className={classes.listItem}>Consulted, supported, and maintained various websites taking care of SSL certificates, domain/hosting renewals, databases, etc.</li>
                <li className={classes.listItem}>Oversaw completion of client work and ensured project sprints go smoothly and deadlines are met.</li>
                <li className={classes.listItem}>Managed client relationships by sending sprint agenda/summary emails.</li>
                <li className={classes.listItem}>Prepped upcoming sprint work by getting priorities from clients and creating tickets for developers.</li>
                <li className={classes.listItem}>Scheduled and ran client sprint sync meeting to demo client work, etc.</li>
                <li className={classes.listItem}>Supported blocked developers by getting assets, media, or decisions from the client.</li>
              </ul>
            </Typography>

          </Grid>
        </Grid>
        <Grid container className={classes.container} xs={12}>
          <Grid item xs={12}>
            <Typography variant="h3" id="projects" className={clsx(classes.text, classes.smPadBottom)}>
              projects<span className={classes.green}>.</span>
            </Typography>
            <br />
            <Typography variant="h4" className={clsx(classes.text, classes.bodyText, classes.green, classes.smPadBottom)}>
              <Link href="https://www.saveyourcity.nyc/" target="_blank" className={clsx(classes.link, classes.green)}>
                Save Your City
              </Link>
            </Typography>
            <Typography variant="h5" className={clsx(classes.text, classes.bodyText, classes.list)}>
              <div className={classes.smPadBottom}>
                Save Your City is a non-profit website build to help NYC businesses struggling from the fallout of the COVID-19 pandemic.
              </div>
              <div className={classes.smPadBottom}>
                Users are able to nominate any local business they frequent and donate to them.
                The site was build with Next.js/React and Django/Wagtail CMS. It's integrated with a zip codes API and Stripe to search for businesses and submit donations.
              </div>
              <div className={classes.smPadBottom}>
                The site also recorded all nomination and donation submissions into its own database for reference during donation payouts and future marketing.
              </div>
            </Typography>
          </Grid>
        </Grid>
        {/* NOTE: Contact section */}
        {/* <Grid container className={classes.container} xs={12}>
          <Grid item xs={12}>
            <Typography variant="h3" id="contact" className={clsx(classes.text, classes.smPadBottom)}>
              contact<span className={classes.green}>.</span>
            </Typography>
            <Typography variant="h5" className={clsx(classes.text, classes.bodyText)}>
              stuff to read about<span className={classes.green}>.</span>
            </Typography>
          </Grid>
        </Grid> */}
      </Grid>
    </>
  )
}

export default Index;