import { createTheme, createThemeContract } from '@vanilla-extract/css';
import { trispaceSemiCondensed } from './fonts.css';

const space = {
    xs: '0.3rem',
    s: '0.5rem',
    m: '1.2rem',
    l: '2rem',
    xl: '3rem',
};

const font = {
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
};

export const vars = createThemeContract({
    color: {
        primary: '',
        background: '',
        text: '',
        blue: '',
        cardBackground: '',
        cardText: '',
        border: '',
    },
    space,
    font,
});

export const darkTheme = createTheme(vars, {
    color: {
        primary: '#0d0d0d',
        background: '#111111',
        text: '#E4E6E7',
        blue: '#0197F6',
        cardBackground: '#ffffff',
        cardText: '#0d0d0d',
        border: '#E4E6E7CC',
    },
    space,
    font,
});

export const lightTheme = createTheme(vars, {
    color: {
        primary: '#E4E6E7',
        background: '#F5F5F5',
        text: '#272727',
        blue: '#0197F6',
        cardBackground: '#E4E6E7',
        cardText: '#0d0d0d',
        border: '#272727CC',
    },
    space,
    font,
});
