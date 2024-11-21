import { globalFontFace } from "@vanilla-extract/css";

export const trispaceSemiCondensed = 'Trispace SemiCondensed';
export const trispace = 'Trispace';

const weightsMapping = {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

for (const [weightName, weightValue] of Object.entries(weightsMapping)) {
    globalFontFace(trispaceSemiCondensed, {
        fontWeight: weightValue,
        src: `local('${trispaceSemiCondensed}'), local('TrispaceSemiCondensed-${capitalize(weightName)}'), url('/fonts/TrispaceSemiCondensed-${capitalize(weightName)}.woff2') format('woff2')`,
    });

    globalFontFace(trispace, {
        fontWeight: weightValue,
        src: `local('${trispaceSemiCondensed}'), local('Trispace-${capitalize(weightName)}'), url('/fonts/Trispace-${capitalize(weightName)}.woff2') format('woff2')`,
    });
}
