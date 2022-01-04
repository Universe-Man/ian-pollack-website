// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import { Grid, Typography, Link } from '@material-ui/core';
import { Grid, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../theme/theme';


const useStyles = makeStyles(() => ({
  container: {
    padding: '90px 0 60px',
    backgroundColor: theme.palette.green,
    backgroundImage: 'url(/images/ian.jpeg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  text: {
    fontSize: '100px',
    marginRight: '300px',
  }
}));



const Index = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className={classes.container}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.text}>
            hi there
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text}>
            hi there
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text}>
            hi there
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text}>
            hi there
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text}>
            hi there
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text}>
            hi there
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text}>
            hi there
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text}>
            hi there
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text}>
            hi there
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text}>
            hi there
          </Typography>
        </Grid>
        <Grid item>
          <Typography id="profile" className={classes.text}>
            profile
          </Typography>
        </Grid>

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