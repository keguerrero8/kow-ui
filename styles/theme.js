import { Figtree } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const figtree = Figtree({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});


const theme = createTheme({
  palette: {
    primary: {
      main: '#050533',
      light: '#009ffb'
    },
    secondary: {
      main: '#f2f2f2',
    },
  },
  typography: {
    fontFamily: figtree.style.fontFamily,
  },
});

export default theme;