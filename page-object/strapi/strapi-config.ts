//
// export const StrapiConfig = {
//     email: process.env.STRAPI_EMAIL || '',
//     password: process.env.STRAPI_PASSWORD || '',
//     loginUrl: 'https://integral-cow-029df26137.strapiapp.com/admin/auth/login',
//
//     // Masked versions for reporting
//     get maskedEmail(): string {
//         return this.email ? '***@***.com' : '';
//     },
//
//     get maskedPassword(): string {
//         return this.password ? '***' : '';
//     }
// };

export const StrapiConfig = {
    email: process.env.STRAPI_EMAIL || '',
    password: process.env.STRAPI_PASSWORD || '',
    loginUrl: 'https://integral-cow-029df26137.strapiapp.com/admin/auth/login'
};
