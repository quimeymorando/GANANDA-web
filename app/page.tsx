import HeroSection from '@/components/sections/HeroSection'
import PropositoSection from '@/components/sections/PropositoSection'
import AutoridadCientifica from '@/components/sections/AutoridadCientifica'
import ServiciosSection from '@/components/sections/ServiciosSection'
import VisionFuturo from '@/components/sections/VisionFuturo'
import ContactoSection from '@/components/sections/ContactoSection'

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AutoridadCientifica />
            <PropositoSection />
            <ServiciosSection />
            <VisionFuturo />
            <ContactoSection />
        </>
    )
}
