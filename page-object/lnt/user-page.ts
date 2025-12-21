import { Page } from '@playwright/test';

export class UserPage {
    constructor(private page: Page) {}

    async open(user: string, url: string, domain: string): Promise<void> {
        // Set the cookies
        await this.page.context().addCookies([
            {
                name: '__Secure-next-auth.session-token',
                value: user,
                domain: domain,
                path: '/',
                secure: true,
                sameSite: 'Lax'
            }
        ]);

        // Open the page with the cookies set
        await this.page.goto(url);

        try {
            await this.page.getByRole('button', { name: 'Allow all' }).click();
        } catch {
            // Cookies popup did not appear
        }
    }

    async openVercel(
        user: string,
        url: string,
        domain: string,
        vercelUuid: string | null,
        vercelDomain: string,
        vercelJwt: string
    ): Promise<void> {
        // Set the cookies
        const baseCookies = [
            {
                name: '_vercel_jwt',
                value: vercelJwt,
                domain: domain,
                path: '/',
                secure: true,
                sameSite: 'Lax' as const
            },
            {
                name: '__Secure-next-auth.session-token',
                value: user,
                domain: domain,
                path: '/',
                secure: true,
                sameSite: 'Lax' as const
            }
        ];

        const cookies = vercelUuid
            ? [
                  ...baseCookies,
                  {
                      name: 'vercel-experiment-uuid',
                      value: vercelUuid,
                      domain: vercelDomain,
                      path: '/',
                      secure: true,
                      sameSite: 'Lax' as const
                  }
              ]
            : baseCookies;

        await this.page.context().addCookies(cookies);
        await this.page.goto(url);
    }
}