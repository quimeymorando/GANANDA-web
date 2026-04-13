import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Script from 'next/script'

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-playfair',
})

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    display: 'swap',
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'GANANDA — Ciencia. Experiencia. Propósito.',
    description:
        'GANANDA es el puente entre la biotecnología de vanguardia y la expansión humana consciente. Cultivo de tejidos, genética, saneamiento e I+D+i en cannabis.',
    keywords: [
        'cannabis biotecnología',
        'cultivo de tejidos cannabis',
        'genética cannabis',
        'AgTech cannabis',
        'saneamiento cultivos',
        'GANANDA cannabis',
    ],
    openGraph: {
        title: 'GANANDA — Ciencia. Experiencia. Propósito.',
        description:
            'El puente entre lo que somos biológicamente y lo que podemos ser conscientemente.',
        type: 'website',
        locale: 'es_ES',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
            <body className="antialiased">
                <Script id="scroll-restoration" strategy="beforeInteractive">
                    {`
                        if ('scrollRestoration' in history) {
                            history.scrollRestoration = 'manual';
                        }
                        window.scrollTo(0, 0);
                    `}
                </Script>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
