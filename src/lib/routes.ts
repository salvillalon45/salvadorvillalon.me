import { RoutesLabels, RoutesValues } from "./types";

export const base = 'https://salvador-villalon.vercel.app/'

export const inAppRoutes = {
    [RoutesLabels.HOME]: RoutesValues.HOME,
    [RoutesLabels.NOW]: RoutesValues.NOW,
    [RoutesLabels.ABOUT]: RoutesValues.ABOUT,
    [RoutesLabels.BLOG]: RoutesValues.BLOG,
    [RoutesLabels.EXPERIENCE]: RoutesValues.EXPERIENCE,
    [RoutesLabels.GALLERY]: RoutesValues.GALLERY,
}

export const externalRoutes = {
    'Version 2': 'https://salvillalon45.github.io/portfolio-version-2/',
    'version 4': 'https://salvador-villalon.netlify.app/',
}

export const inAppRoutesArray = Object.entries(inAppRoutes).map(entry => {
    const [key, value] = entry

    return {
        href: value,
        text: key
    }
});

export const externalRoutesArray = Object.entries(externalRoutes).map(entry => {
    const [key, value] = entry

    return {
        href: value,
        text: key
    }
})