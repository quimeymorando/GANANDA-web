import HeroSection from '@/components/sections/HeroSection'
import PropositoSection from '@/components/sections/PropositoSection'
import AutoridadCientifica from '@/components/sections/AutoridadCientifica'
import MarcoRegulatorio from '@/components/sections/MarcoRegulatorio'
import ServiciosSection from '@/components/sections/ServiciosSection'
import VisionFuturo from '@/components/sections/VisionFuturo'
import ContactoSection from '@/components/sections/ContactoSection'

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AutoridadCientifica />
            <PropositoSection frase="Los resultados extraordinarios son consecuencia de procesos diseñados con precisión." />
            <MarcoRegulatorio />
            <PropositoSection>
                Transformamos conocimiento científico en soluciones concretas para quienes buscan liderar la nueva era del cannabis con{' '}
                <span className="text-gradient-dorado not-italic">visión</span>,{' '}
                <span className="text-gradient-dorado not-italic">trazabilidad</span> y{' '}
                <span className="text-gradient-dorado not-italic">ventaja competitiva.</span>
            </PropositoSection>
            <ServiciosSection />
            <PropositoSection frase="El verdadero progreso ocurre cuando la ciencia y la conciencia trabajan en la misma dirección." />
            <VisionFuturo />
            <PropositoSection frase="Trabajamos para que esta planta deje de ser discutida y empiece a ser comprendida." />
            <ContactoSection />
        </>
    )
}
