
export class Users {
    // L&T Staging
    static readonly user_lnt_stg = process.env.USER_LNT_STG_ID || '';
    static readonly url_lnt_stg = process.env.USER_LNT_STG_URL || '';
    static readonly domain_lnt_stg = process.env.USER_LNT_STG_DOMAIN || '';

    // L&T Production
    static readonly user_lnt = process.env.USER_LNT_ID || '';
    static readonly url_lnt = 'https://www.lyonandturnbull.com';
    static readonly domain_lnt = 'www.lyonandturnbull.com';
    // static readonly url_lnt = process.env.USER_LNT_URL || 'https://www.lyonandturnbull.com';
    // static readonly domain_lnt = process.env.USER_LNT_DOMAIN || 'www.lyonandturnbull.com';

    static readonly strapi_lnt_jwt = process.env.STRAPI_LNT_JVT || '';
    static readonly strapi_lnt_domain = process.env.STRAPI_LNT_DOMAIN || '';

    // SGB Staging
    static readonly user_sgb_stg = process.env.USER_SGB_STG_ID || '';
    static readonly url_sgb_stg = process.env.USER_SGB_STG_URL || '';
    static readonly domain_sgb_stg = process.env.USER_SGB_STG_DOMAIN || '';

    // SGB Production
    static readonly vercel_jwt = process.env.VERCEL_JWT || '';
    static readonly vercel_uuid = process.env.VERCEL_UUID || '';
    static readonly vercel_domain = process.env.VERCEL_DOMAIN || '';

    static readonly user_sgb = process.env.USER_SGB_ID || '';
    static readonly url_sgb = process.env.USER_SGB_URL || '';
    static readonly domain_sgb = process.env.USER_SGB_DOMAIN || '';
}

