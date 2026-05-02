'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Zap, Shield } from 'lucide-react'

const pilares = [
    {
        icono: Globe,
        titulo: 'Innovación Mundial',
        descripcion:
            'Referentes globales en cannabis biotecnológico. Invitados a Change Now, el congreso internacional de impacto medioambiental. Red de expertos en más de 15 países.',
    },
    {
        icono: Zap,
        titulo: 'Escalabilidad',
        descripcion:
            'Reducimos tiempos de desarrollo de 8 años a 1 año. Multiplicamos la producción 4x a 8x en ciclos de tres semanas. Tecnología lista para operar a escala industrial.',
    },
    {
        icono: Shield,
        titulo: 'Trazabilidad y Seguridad',
        descripcion:
            'Trazabilidad completa desde el laboratorio hasta el producto final. Huella dactilar de ADN en cada cultivar. Estándares de seguridad alimentaria internacionales.',
    },
]

export default function VisionFuturo() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="vision"
            className="section-padding relative overflow-hidden"
            style={{
                background: 'linear-gradient(160deg, #0d1f15 0%, #1a3a2a 40%, #2d5a3d 70%, #1a3a2a 85%, #0d1f15 100%)',
            }}
        >
            {/* Orbe de luz central */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />

            {/* Patrón de fondo */}
            <div
                className="absolute inset-0 pointer-events-none pattern-celular"
                style={{ opacity: 0.4 }}
            />

            <div className="container-anima relative z-10">
                {/* Header */}
                <div ref={ref} className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="flex items-center justify-center gap-4 mb-6"
                    >
                        <span className="h-px w-8 bg-[var(--dorado)]" style={{ opacity: 0.4 }} />
                        <span className="label-caps text-[var(--dorado)] tracking-[0.3em] text-xs">
                            Visión a Futuro
                        </span>
                        <span className="h-px w-8 bg-[var(--dorado)]" style={{ opacity: 0.4 }} />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="heading-lg text-[var(--texto-claro)] mb-6"
                    >
                        Hacia un modelo de consumo
                        <br />
                        <span className="text-gradient-dorado">responsable basado en ciencia</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="body-lg text-[var(--texto-gris)] max-w-2xl mx-auto"
                    >
                        Nuestra visión es impulsar una nueva etapa en la industria del cannabis, donde el conocimiento científico permita integrar su uso de forma responsable, segura y cada vez más vinculada a la salud.
                    </motion.p>
                </div>

                {/* Pilares */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {pilares.map((pilar, i) => {
                        const Icono = pilar.icono
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.7, delay: i * 0.15 }}
                                className="text-center group"
                            >
                                {/* Icono */}
                                <div className="inline-flex items-center justify-center w-14 h-14 mb-6 border border-[rgba(201,168,76,0.3)] group-hover:border-[rgba(201,168,76,0.6)] transition-colors duration-300">
                                    <Icono
                                        size={24}
                                        className="text-[var(--dorado)] group-hover:text-[var(--dorado-claro)] transition-colors duration-300"
                                    />
                                </div>

                                {/* Título */}
                                <h3 className="heading-md text-[var(--texto-claro)] mb-4">
                                    {pilar.titulo}
                                </h3>

                                {/* Línea dorada */}
                                <div
                                    className="w-8 h-px mx-auto mb-4"
                                    style={{ background: 'var(--dorado)', opacity: 0.4 }}
                                />

                                {/* Descripción */}
                                <p className="text-[var(--texto-gris)] text-sm leading-relaxed">
                                    {pilar.descripcion}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Quote final */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-24 text-center"
                >
                    <div
                        className="inline-block px-12 py-14 border border-[rgba(201,168,76,0.2)] max-w-4xl w-full"
                        style={{ background: 'rgba(13,31,21,0.5)' }}
                    >
                        <p className="font-editorial text-xl md:text-2xl text-[var(--texto-claro)] italic mb-4">
                            El futuro del cannabis no está en la polarización entre lo medicinal y lo recreativo, sino en la construcción de un modelo donde el consumo se base en información, control y responsabilidad. Creemos en un enfoque donde la calidad del producto, la consistencia genética y el respaldo científico sean la base para un uso consciente, tanto en aplicaciones de salud como en el uso adulto.
                        </p>
                        <div className="divider-dorado" />
                        <p className="text-[var(--dorado)] text-sm tracking-widest label-caps mt-4">
                            No se trata de limitar el acceso, sino de elevar los estándares.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
