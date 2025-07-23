/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'badun.nestle.es',
          port: '',
          pathname: '/**',
        }, {
          protocol: 'https',
          hostname: 'i.pinimg.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'thestayathomechef.com',
          port: '',
          pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'pedrosuarezysusrecetas.es',
            port: '',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'misrecetasdecocina.net',
            port: '',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'img-global.cpcdn.com',
            port: '',
            pathname: '/**',
        },
          
      
      ],
    },
}

module.exports = nextConfig
