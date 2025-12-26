//
// export class Users {
//     // L&T Staging
//     static readonly user_lnt_stg = process.env.USER_LNT_STG_ID || '';
//     static readonly url_lnt_stg = process.env.USER_LNT_STG_URL || '';
//     static readonly domain_lnt_stg = process.env.USER_LNT_STG_DOMAIN || '';
//
//     // L&T Production
//     static readonly user_lnt = process.env.USER_LNT_ID || '';
//     static readonly url_lnt = 'https://www.lyonandturnbull.com';
//     static readonly domain_lnt = 'www.lyonandturnbull.com';
//     // static readonly url_lnt = process.env.USER_LNT_URL || 'https://www.lyonandturnbull.com';
//     // static readonly domain_lnt = process.env.USER_LNT_DOMAIN || 'www.lyonandturnbull.com';
//
//     static readonly strapi_lnt_jwt = process.env.STRAPI_LNT_JVT || '';
//     static readonly strapi_lnt_domain = process.env.STRAPI_LNT_DOMAIN || '';
//
//     // SGB Staging
//     static readonly user_sgb_stg = process.env.USER_SGB_STG_ID || '';
//     static readonly url_sgb_stg = process.env.USER_SGB_STG_URL || '';
//     static readonly domain_sgb_stg = process.env.USER_SGB_STG_DOMAIN || '';
//
//     // SGB Production
//     static readonly vercel_jwt = process.env.VERCEL_JWT || '';
//     static readonly vercel_uuid = process.env.VERCEL_UUID || '';
//     static readonly vercel_domain = process.env.VERCEL_DOMAIN || '';
//
//     static readonly user_sgb = process.env.USER_SGB_ID || '';
//     static readonly url_sgb = process.env.USER_SGB_URL || '';
//     static readonly domain_sgb = process.env.USER_SGB_DOMAIN || '';
// }


export const users = {
    lnt_stg: {
        user: process.env.USER_LNT_STG_ID || '',
        url: 'https://staging-lyonandturnbull.auctionfusion.com/',
        domain: 'staging-lyonandturnbull.auctionfusion.com/',
    },
    lnt_prod: {
        user: process.env.USER_LNT_ID || '',
        url: 'https://www.lyonandturnbull.com',
        domain: 'www.lyonandturnbull.com',
    },
    sgb_stg: {
        user: process.env.USER_SGB_STG_ID || '',
        url: 'https://staging-stanleygibbonsbaldwins.auctionfusion.com/',
        domain: 'staging-stanleygibbonsbaldwins.auctionfusion.com/',
    },
    sgb_prod: {
        user: process.env.USER_SGB_ID || '',
        url: 'https://www.lyonandturnbull.com',
        domain: 'www.lyonandturnbull.com',

        vercel_jwt: process.env.VERCEL_JWT || '',
        vercel_uuid: process.env.VERCEL_UUID || '',
        vercel_domain: process.env.VERCEL_DOMAIN || '',
    },
};

const environment = (process.env.TEST_ENV || 'lnt_stg') as 'lnt_stg' | 'lnt_prod' | 'sgb_stg' | 'sgb_prod';
export const currentUser = users[environment];



// export const users = {
//     staging: {
//         user: process.env.USER_LNT_STG_ID || '',
//         url: 'https://staging-lyonandturnbull.auctionfusion.com/',
//         domain: 'www.staging-lyonandturnbull.auctionfusion.com/',
//     },
//     production: {
//         user: process.env.USER_LNT_ID || '',
//         url: 'https://www.lyonandturnbull.com',
//         domain: 'www.lyonandturnbull.com',
//     },
// };
//
// const environment = (process.env.TEST_ENV || 'staging') as 'staging' | 'production';
// export const currentUser = users[environment];