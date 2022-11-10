// ----------------------------------------------------------------------

const Routes = {
    // Common
    about: '/about-us',
    contact: '/contact-us',
    loginCover: '/auth/login-cover',
    registerCover: '/auth/register-cover',
    login: '/auth/login',
    registerIllustration: '/auth/register-illustration',
    forgotPassword: '/auth/forgot-password',
    resetPassword:'/auth/reset-password',
    verifyCode: '/auth/verify-code',
    maintenance: '/maintenance',
    comingsoon: '/coming-soon',
    pricing01: '/pricing-01',
    pricing02: '/pricing-02',
    checkout: '/checkout',
    support: '/support',
    page404: '/404',
    page500: '/500',
    teacher: '/teacher',
    // Others
    pages: '/pages',
    componentsUI: '/components-ui',
    componentUI: (slug) => `/components-ui/${slug}`,
    muiComponents: 'https://mui.com/components',
    docs: 'https://zone-docs.vercel.app',
    license: 'https://material-ui.com/store/license/#i-standard-license',
    minimalDashboard: 'https://material-ui.com/store/items/minimal-dashboard',
    buyNow: 'https://material-ui.com/store/items/zone-landing-page',
};

  export default Routes;