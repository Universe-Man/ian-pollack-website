import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        neonGreen: '#00eb5e',
        orange: '#FF4701',
        yellow: '#F4D63B',
        green: '#389E8B',
        blue: '#7ED1FF',
        black: '#000000',
        error: {
            main: '#000000',
        },
    },
    typography: {
        fontFamily: ['American Typewriter', 'sans-serif'],
        h1: {
            fontFamily: ['Krisha', 'sans-serif'],
        },
    },
});

export default theme;
