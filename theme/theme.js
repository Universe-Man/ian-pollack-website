import { createTheme } from '@mui/material/styles';
// import Ubuntu from './fonts/Ubuntu-Bold.ttf';

const theme = createTheme({
    palette: {
        neonGreen: '#00eb5e',
        chillerGreen: '#04c433',
        darkNavy: '#022052',
        blueGray: '#727aa6',
        orange: '#FF4701',
        yellow: '#F4D63B',
        green: '#389E8B',
        blue: '#7ED1FF',
        black: '#000000',
        error: {
            main: '#000000',
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                fontFamily: 'Ubuntu, sans-serif',
                fontWeight: '700',
                // h1: {
                //     fontFamily: '"Ubuntu", sans-serif',
                // },
            }
        },
    }
});
// font-family: Ubuntu, "times new roman", times, roman, serif;
export default theme;
