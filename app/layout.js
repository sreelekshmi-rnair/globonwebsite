import "@/node_modules/react-modal-video/css/modal-video.css"
import "/public/css/bootstrap.css"
import "/public/css/swiper-bundle.min.css"
import "/public/css/odometer.min.css"
import "/public/css/magnific-popup.min.css"
import "/public/css/animate.min.css"
import "/public/css/animate2.min.css"
import "/public/css/textanimation.css"
import "/public/font/fonts.css"
import "/public/icons/icomoon/style.css"
import "/public/icons/flaticon/font/flaticon_saylo.css"
import "/public/css/styles.css"
import "/public/css/light-theme.css"
import "/public/css/responsive-overrides.css"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
})

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#1f4e7a',
}

export const metadata = {
    title: 'Globon Business Solutions - Loan Assistance, Financial Solutions & Business Support',
    description: 'Globon Business Solutions specializes in loan assistance, business consulting, registrations, compliance, insurance, real estate, and digital solutions.',
    icons: {
        icon: [
            { url: '/images/logo/logo.png?v=globon3', type: 'image/png' },
            { url: '/logo.png?v=globon3', type: 'image/png' },
        ],
        shortcut: '/images/logo/logo.png?v=globon3',
        apple: '/images/logo/logo.png?v=globon3',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <link rel="icon" type="image/png" href="/images/logo/logo.png?v=globon3" sizes="any" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/logo/logo.png?v=globon3" />
                <link rel="icon" type="image/png" sizes="192x192" href="/images/logo/logo.png?v=globon3" />
                <link rel="apple-touch-icon" href="/images/logo/logo.png?v=globon3" />
                <link rel="shortcut icon" href="/images/logo/logo.png?v=globon3" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
            </head>
            <body className={`${poppins.className} ${poppins.variable}`}>{children}</body>
        </html>
    )
}
