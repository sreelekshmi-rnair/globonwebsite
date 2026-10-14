// import 'swiper/css';
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
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
import { Public_Sans } from 'next/font/google'

const publicSans = Public_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})
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
                <link rel="icon" type="image/png" href="/images/logo/logo.png?v=globon3" sizes="any" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/logo/logo.png?v=globon3" />
                <link rel="icon" type="image/png" sizes="192x192" href="/images/logo/logo.png?v=globon3" />
                <link rel="apple-touch-icon" href="/images/logo/logo.png?v=globon3" />
                <link rel="shortcut icon" href="/images/logo/logo.png?v=globon3" />
            </head>
            <body className={`${publicSans.className}`}>{children}</body>
        </html>
    )
}
