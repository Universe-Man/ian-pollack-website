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
    backgroundImage: 'linear-gradient(to bottom right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1))',
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
    color: theme.palette.neonGreen,
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
              i'm formerly a baby,
          </Typography>
            <Typography variant="h3" className={clsx(classes.text, classes.rightAlign)}>
              and currently a <span className={classes.green}>Software Engineer</span>.
          </Typography>

          </Grid>
        </Grid>
        <Grid container className={classes.container} xs={12}>
          <Grid item xs={12}>
            <Typography variant="h3" id="profile" className={clsx(classes.text, classes.smPadBottom)}>
              profile<span className={classes.green}>.</span>
            </Typography>
            <Typography variant="h5" id="profile" className={clsx(classes.text, classes.bodyText)}>
              stuff to read about<span className={classes.green}>.</span>
            </Typography>
          </Grid>

        </Grid>
        <Grid container className={classes.container} xs={12}>
          <Grid item xs={12}>
            <Typography variant="h3" id="experience" className={clsx(classes.text, classes.smPadBottom)}>
              experience<span className={classes.green}>.</span>
            </Typography>
            <Typography variant="h5" id="profile" className={clsx(classes.text, classes.bodyText)}>
              stuff to read about<span className={classes.green}>.</span>
            </Typography>

          </Grid>
        </Grid>
        <Grid container className={classes.container} xs={12}>
          <Grid item xs={12}>
            <Typography variant="h3" id="projects" className={clsx(classes.text, classes.smPadBottom)}>
              projects<span className={classes.green}>.</span>
            </Typography>
            <Typography variant="h5" id="profile" className={clsx(classes.text, classes.bodyText)}>
              stuff to read about<span className={classes.green}>.</span>
            </Typography>

          </Grid>
        </Grid>
        <Grid container className={classes.container} xs={12}>
          <Grid item xs={12}>
            <Typography variant="h3" id="contact" className={clsx(classes.text, classes.smPadBottom)}>
              contact<span className={classes.green}>.</span>
            </Typography>
            <Typography variant="h5" id="profile" className={clsx(classes.text, classes.bodyText)}>
              stuff to read about<span className={classes.green}>.</span>
            </Typography>

          </Grid>
        </Grid>

        {/* <Grid item>
          <Typography id="profile" className={classes.text}>
            profile
          </Typography>
        </Grid> */}

      </Grid>

    </>
  )
}
// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>YO!!! Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }
export default Index;