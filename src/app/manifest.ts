import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Planet Petly',
        short_name: 'PlanetPetly',
        description: 'Eco-friendly pet products for sustainable living.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2e4437',
        icons: [
            {
                src: '/favicon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    }
}
