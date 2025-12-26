
export const strapi = {
    lnt_stg: {
        email: process.env.STRAPI_EMAIL || '',
        password: process.env.STRAPI_PASSWORD || '',
        loginUrl: 'https://integral-cow-029df26137.strapiapp.com/admin/auth/login'
    },
    sgb_stg: {
        email: process.env.STRAPI_EMAIL_SGB || '',
        password: process.env.STRAPI_PASSWORD_SGB || '',
        loginUrl: 'https://integr26137.strapiapp.com/admin/auth/login' //TODO
    },
};

const environment = (process.env.TEST_ENV || 'lnt_stg') as 'lnt_stg' | 'sgb_stg';
export const StrapiConfig = strapi[environment];
