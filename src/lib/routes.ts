export const inAppRoutes = {
    'Home': '/',
    // 'Now': '/now',
    'About': '/about',
    'Blog': '/blog',
    'Experience': '/experience',
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