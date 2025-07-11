// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import { Grid, Typography, Link } from '@material-ui/core';
import { Grid, Typography, Link, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../theme/theme';
import clsx from 'clsx';



const useStyles = makeStyles(() => ({
  masterContainer: {
    // backgroundColor: theme.palette.darkNavy,
    backgroundImage: 'linear-gradient(to bottom right, rgba(2, 32, 82, 0.8), rgba(2, 32, 82, 0.2)), url("/images/markus-spiske-hvSr_CVecVI-unsplash.jpg")',
    // backgroundImage: 'url("./images/markus-spiske-hvSr_CVecVI-unsplash.jpg")',
  },
  container: {
    padding: '90px 20px 60px',
    [theme.breakpoints.up('md')]: {
      padding: '90px 60px 60px',

    },
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',

  },
  "@keyframes fadeUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  profileText: {
    color: 'beige',
    maxWidth: '1200px',
    margin: '0 auto',
    animationName: '$fadeUp',
    animationDuration: '1s',
    animationFillMode: 'backwards',
    fontFamily: 'Ubuntu, sans-serif',
    fontWeight: '700'
  },
  text: {
    color: 'beige',
    width: '85%',
    margin: '0 auto',
    animationName: '$fadeUp',
    animationDuration: '1s',
    animationFillMode: 'backwards',
    fontFamily: 'Ubuntu, sans-serif',
    fontWeight: '700'
  },
  subText: {
    maxWidth: '910px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'unset',
    },
  },
  bodyText: {
    // marginLeft: '0',
  },
  skills: {
    width: '90%'
  },
  jobTitle: {
    fontSize: '1.75rem'
  },
  rightAlign: {
    textAlign: 'unset',
    [theme.breakpoints.up('md')]: {
      textAlign: 'right',
    },

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
    justifyContent: 'center',
    flexFlow: 'column-reverse',
    [theme.breakpoints.up('md')]: {
      flexFlow: 'row',
    },
  },
  logo: {
    borderRadius: '250px',
    backgroundColor: 'green',
    margin: '50px 0 50px 0',
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      margin: '90px 0 0 50px',
      maxWidth: 'none',
      width: '300px',
    },
    [theme.breakpoints.up('lg')]: {
      width: 'unset',
    },
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
  marginCenter: {
    margin: '0 auto',
  },
  // header animations end at 1.4s delay
  aniZero: {
    animationDelay: '1.6s',
  },
  aniFirst: {
    animationDelay: '1.8s',
  },
  aniSecond: {
    animationDelay: '2s',
  },
  aniThird: {
    animationDelay: '2.2s',
  },
  aniRest: {
    animationDelay: '2.4s',
  },
  widthShyFull: {
    width: '85%',
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
        <Grid container item className={classes.container} xs={12}>
          <Grid item xs={12}>
            <Typography variant="h1" className={clsx(classes.profileText, classes.lrgPadBottom, classes.aniZero)}>
              hello <span className={classes.green}>friend</span>.
            </Typography>
          </Grid>
          <Grid item xs={11} className={classes.subText}>
            <Typography variant="h3" className={clsx(classes.profileText, classes.rightAlign, classes.aniFirst)}>
              my name is <span className={classes.green}>Ian Pollack</span>.
          </Typography>
            <Typography variant="h3" className={clsx(classes.profileText, classes.aniSecond)}>
              i&apos;m formerly a baby,
          </Typography>
            <Typography variant="h3" className={clsx(classes.profileText, classes.rightAlign, classes.aniThird)}>
              and currently a <span className={classes.green}>Software Engineer</span>.
          </Typography>
          </Grid>
        </Grid>
        <Grid container item className={classes.container} xs={12}>
          <Grid item xs={12} className={classes.flex}>
            <div>
              <Typography variant="h3" id="profile" className={clsx(classes.text, classes.smPadBottom, classes.aniRest)}>
                profile<span className={classes.green}>.</span>
              </Typography>
              <Typography variant="h5" className={clsx(classes.text, classes.bodyText, classes.aniRest)} style={{ maxWidth: '85%' }}>
                <br />
                <div>
                  Hey there! My name's Ian and I'm a Full-Stack Software Engineer with over six years of professional experience delivering scalable, user-centric applications across healthcare, social networking, hospitality, education, and fin-tech industries.
                </div>
                <br />
                <div>
                  I'm proficient in a wide range of languages and frameworks, with a strong focus and passion for clean, maintainable code and intuitive user experiences, as well as a proven track record in leading development teams, mentoring engineers, and driving product excellence.
                </div>
                <br />
                <div>
                  During my free time, in addition to building new hobby projects with the newest tech stacks, I perform improv and standup comedy, deal craps and blackjack, and play the ukulele. I love baseball, "Survivor", and the occasional action-comedy.
                </div>
                <br />
                <div>
                  Feel free to contact with me on LinkedIn or shoot me an email (links are in the footer). I'd love to connect and talk all things code (and baseball).
                </div>
              </Typography>
            </div>
            <div className={clsx(classes.marginCenter, classes.aniRest)}>
              <img
                className={classes.logo}
                alt="ians-beautiful-face"
                src="/images/ian.jpeg"
              />
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.container} xs={12}>
          <Typography variant="h3" id="profile" className={clsx(classes.text, classes.skills, classes.smPadBottom, classes.aniRest)}>
            technical skills<span className={classes.green}>.</span>
          </Typography>
          <Typography variant="h5" className={clsx(classes.text, classes.bodyText, classes.skills, classes.aniRest)}>
            <Grid container item spacing={2}>
              <Grid item xs={12} md={4}>
                <ul>
                  <li>React.js | Next.js | Redux.js</li>
                  <li>JavaScript | TypeScript</li>
                  <li>Node.js | Express</li>
                  <li>Ruby | Rails</li>
                </ul>
              </Grid>
              <Grid item xs={12} md={4}>
                <ul>
                  <li>Python | Django | Wagtail</li>
                  <li>HTML | CSS | Sass (SCSS)</li>
                  <li>SQL | PostgreSQL | MySQL</li>
                  <li>NoSQL | Redis</li>
                </ul>
              </Grid>
              <Grid item xs={12} md={4}>
                <ul>
                  <li>AWS | Heroku | Azure</li>
                  <li>Docker | GitHub | CI/CD</li>
                  <li>OpenAI | PyTorch</li>
                  <li>Jest | RSpec | Splunk</li>
                </ul>
              </Grid>
            </Grid>
          </Typography>
        </Grid>
        <Grid container item className={classes.container} xs={12}>
          <Grid item xs={12}>
            <Typography variant="h3" id="experience" className={clsx(classes.text, classes.smPadBottom, classes.aniRest)}>
              experience<span className={classes.green}>.</span>
            </Typography>
            <br />
            <Typography variant="h4" className={clsx(classes.text, classes.bodyText, classes.green, classes.aniRest)}>
              <Link href="https://www.scsitesting.com/" target="_blank" className={clsx(classes.link, classes.green)}>
                SCSI Media
              </Link>
            </Typography>
            <Typography variant="h4" className={clsx(classes.text, classes.bodyText, classes.jobTitle, classes.aniRest)}>
              Full-Stack Software Engineer
            </Typography>
            <Typography variant="h5" className={clsx(classes.text, classes.bodyText, classes.aniRest)}>
              <ul>
                <li className={classes.listItem}>Co-designed and developed the Sabio AI web application with a responsive, accessible frontend built in React.js, Next.js, and Material-UI, enabling efficient management, testing, and certification of interpreter students and professionals through AI-enhanced features.</li>
                <li className={classes.listItem}>Engineered and scaled backend architecture using Node.js, Express, and TypeScript, integrating third-party platforms such as OpenAI, Vimeo, and Synthesia to automate workflows and reduce manual overhead.</li>
                <li className={classes.listItem}> Architected a robust PostgreSQL database, ensuring data consistency and efficient communication across system components while supporting dynamic user interactions.</li>
                <li className={classes.listItem}>Maintained legacy systems by troubleshooting and resolving issues using WordPress, Caspio, Zapier, and related tools, significantly improving platform stability and long-term maintainability.</li>
              </ul>
            </Typography>
            <Typography variant="h4" className={clsx(classes.text, classes.bodyText, classes.green, classes.aniRest)}>
              <Link href="https://www.hp.com/" target="_blank" className={clsx(classes.link, classes.green)}>
                HP
              </Link>
            </Typography>
            <Typography variant="h4" className={clsx(classes.text, classes.bodyText, classes.jobTitle, classes.aniRest)}>
              Senior Software Engineer / Technical Lead
            </Typography>
            <Typography variant="h5" className={clsx(classes.text, classes.bodyText, classes.aniRest)}>
              <ul>
                <li className={classes.listItem}>Optimized HP’s Cloud Bank payment processing platform by streamlining invoice/PDF generation and archiving workflows, reducing financial processing errors by 20% and enhancing the purchasing experience for millions of global customers.</li>
                <li className={classes.listItem}>Led a team of 5 developers as Technical Lead, conducting code reviews, pair programming sessions, and daily stand-ups, ensuring consistent delivery ahead of schedule and promoting team skill growth.</li>
                <li className={classes.listItem}>Developed new features and resolved bugs using Ruby on Rails, Prawn, and Sidekiq, delivering secure, scalable updates that aligned with stakeholder goals and improved user satisfaction.</li>
                <li className={classes.listItem}>Monitored and managed production infrastructure (AWS, Jenkins, Splunk), leading root-cause analysis and post-mortems that resulted in a 50% increase in system error resolution.</li>
                <li className={classes.listItem}>Collaborated cross-functionally with Project Architects and Project Managers to align sprint planning and product roadmaps with long-term goals; actively contributed to hiring by interviewing 5+ candidates and shaping on-boarding.</li>
              </ul>
            </Typography>
            <Typography variant="h4" className={clsx(classes.text, classes.bodyText, classes.green, classes.aniRest)}>
              <Link href="https://lightmatter.com/" target="_blank" className={clsx(classes.link, classes.green)}>
                Lightmatter
              </Link>
            </Typography>
            <Typography variant="h4" className={clsx(classes.text, classes.bodyText, classes.jobTitle, classes.aniRest)}>
              Software Engineer
            </Typography>
            <Typography variant="h5" className={clsx(classes.text, classes.bodyText, classes.aniRest)}>
              <ul>
                <li className={classes.listItem}>Led full-cycle development for client projects, including a resort booking platform, increasing reservations by 14%, using diverse tech stacks including React.js, Next.js, Django, and Wagtail to deliver high-performance, scalable, user-friendly web applications that aligned with business goals and exceeded client expectations.</li>
                <li className={classes.listItem}>Provided “white-glove” customer-service by keeping clients up to speed on projects through regular meetings, live demos, and agile feedback loops, effectively translating client feedback into actionable development tasks, managing scope changes, aligning priorities, removing blockers, and ensuring on-time, on-budget delivery of complex features.</li>
                <li className={classes.listItem}>Rapidly diagnosed and resolved production issues, including system outages and performance bottlenecks, implementing permanent fixes and minimizing downtime to maintain client trust and system reliability.</li>
                <li className={classes.listItem}>Ensured application stability and code quality throughout the development lifecycle by triaging and resolving bugs, implementing new features, and conducting code reviews to support clean, maintainable codebases.</li>
              </ul>
            </Typography>
            <Typography variant="h4" className={clsx(classes.text, classes.bodyText, classes.green, classes.aniRest)}>
              University of Hawaii - School of Medicine
            </Typography>
            <Typography variant="h4" className={clsx(classes.text, classes.bodyText, classes.jobTitle, classes.aniRest)}>
              Software Engineer
            </Typography>
            <Typography variant="h5" className={clsx(classes.text, classes.bodyText, classes.aniRest)}>
              <ul>
                <li className={classes.listItem}>Developed and integrated custom JavaScript within Qualtrics to calculate user scores and averages, enabling real-time feedback upon survey completion.</li>
              </ul>
            </Typography>
            <Typography variant="h4" className={clsx(classes.text, classes.bodyText, classes.green, classes.aniRest)}>
              VisionFriendly.com
            </Typography>
            <Typography variant="h4" className={clsx(classes.text, classes.bodyText, classes.jobTitle, classes.aniRest)}>
              Software Engineer
            </Typography>
            <Typography variant="h5" className={clsx(classes.text, classes.bodyText, classes.aniRest)}>
              <ul>
                <li className={classes.listItem}>Developed and maintained full-stack web applications using Next.js, React.js, Django, Wagtail, CSS/Sass, with Salesforce integration and automated deployment via CircleCI and AWS.</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
        <Grid container item className={classes.container} xs={12}>
          <Grid item xs={12}>
            <Typography variant="h3" id="projects" className={clsx(classes.text, classes.smPadBottom, classes.aniRest)}>
              projects<span className={classes.green}>.</span>
            </Typography>
            <br />
            <Typography variant="h4" className={clsx(classes.text, classes.bodyText, classes.green, classes.smPadBottom, classes.aniRest)}>
              <Link href="https://ai-chat-bot-qn88.onrender.com/" target="_blank" className={clsx(classes.link, classes.green)}>
                AI Chat-Bot
              </Link>
            </Typography>
            <Typography variant="h5" className={clsx(classes.text, classes.bodyText, classes.list, classes.aniRest)}>
              <div className={classes.smPadBottom}>
                AI Chat-Bot is a chat portal that allows users to create and save different chat conversations with an AI Agent powered by OpenAI's LLM ChatGPT.
              </div>
            </Typography>
            <br />
            <Typography variant="h4" className={clsx(classes.text, classes.bodyText, classes.green, classes.smPadBottom, classes.aniRest)}>
              <Link href="https://weather-app-rzgs.onrender.com/" target="_blank" className={clsx(classes.link, classes.green)}>
                Weather App
              </Link>
            </Typography>
            <Typography variant="h5" className={clsx(classes.text, classes.bodyText, classes.list, classes.aniRest)}>
              <div className={classes.smPadBottom}>
                Weather App, as the name suggests, is a quick and easy live weather search by city, styled dynamically based on the city's current forecast.
              </div>
            </Typography>
            <br />
            <Typography variant="h4" className={clsx(classes.text, classes.bodyText, classes.green, classes.smPadBottom, classes.aniRest)}>
              <Link href="https://www.saveyourcity.nyc/" target="_blank" className={clsx(classes.link, classes.green)}>
                Save Your City
              </Link>
            </Typography>
            <Typography variant="h5" className={clsx(classes.text, classes.bodyText, classes.list, classes.aniRest)}>
              <div className={classes.smPadBottom}>
                Save Your City is a non-profit website build to help NYC businesses struggling from the fallout of the COVID-19 pandemic with the goal of allowing customers to donate to their favorite businesses to help keep them afloat during the lock-down.
              </div>
            </Typography>
            <br />
            <Typography variant="h4" className={clsx(classes.text, classes.bodyText, classes.green, classes.smPadBottom, classes.aniRest)}>
              <Link href="https://forgetfulnotes.onrender.com/" target="_blank" className={clsx(classes.link, classes.green)}>
                Forgetful Notes
              </Link>
            </Typography>
            <Typography variant="h5" className={clsx(classes.text, classes.bodyText, classes.list, classes.aniRest)}>
              <div className={classes.smPadBottom}>
                Forgetful Notes is a notes app that is trying really hard guys. It will probably forget your notes as you continue to add them, but just remember it's doing its best.
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