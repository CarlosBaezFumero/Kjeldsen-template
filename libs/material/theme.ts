import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
    palette: {
        primary: {
          main: '#F0F8FF',
          // main: '#556cd6',
        },
        secondary: {
          main: '#FF3F84',
          // main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
});
