import { createTheme } from '@vanilla-extract/css';
import { trispaceSemiCondensed } from './fonts.css';

export const [themeClass, vars] = createTheme({
    color: {
        black: '#000000',
        white: '#E4E6E7',
        white20: '#424343',
        white50: '#7F8081',
        blue: '#0197F6',
    },
    space: {
        xs: '0.3rem',
        s: '0.5rem',
        m: '1.2rem',
        l: '2rem',
        xl: '3rem',
    },
    font: {
        family: {
            default: trispaceSemiCondensed,
        },
        size: {
            xs: '0.9rem',
            s: '1.1rem',
            m: '1.3rem',
            l: '1.6rem',
            xl: '2.2rem',
            xxl: '4rem',
        },
        weight: {
            thin: '100',
            extraLight: '200',
            light: '300',
            regular: '400',
            medium: '500',
            semiBold: '600',
            bold: '700',
            extraBold: '800',
        },
    },
});
