import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    // ⚠️ CHANGE THIS TO YOUR REAL DOMAIN AFTER PURCHASE
    const baseUrl = 'https://pereezdge.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Example of good practice
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
