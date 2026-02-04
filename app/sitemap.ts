import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    // ⚠️ CHANGE THIS TO YOUR REAL DOMAIN AFTER PURCHASE
    // Example: const baseUrl = 'https://batumi-shipping.ge';
    const baseUrl = 'https://pereezdge.com';

    // Core pages
    const routes = [
        '',
        '/services',
        '/prices',
        '/about',
        '/tips',
        '/contacts',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Major cities
    const cities = ['batumi', 'tbilisi', 'kutaisi', 'rustavi', 'poti', 'kobuleti'].map((city) => ({
        url: `${baseUrl}/${city}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Services
    const services = ['moving', 'office', 'movers', 'taxi', 'intercity'].map((service) => ({
        url: `${baseUrl}/service/${service}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...cities, ...services, {
        url: `${baseUrl}/service/trash`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }];
}
