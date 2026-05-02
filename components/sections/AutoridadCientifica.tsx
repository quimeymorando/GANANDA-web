'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Clock, ClipboardList, ShieldCheck } from 'lucide-react'

const metricas = [
    {
        valor: '30+',
        label: 'Trayectoria',
        descripcion: 'Más de 30 años de experiencia en saneamiento y propagación vegetal. Desarrollo continuo en cultivos de alto valor con enfoque en calidad y consistencia productiva.',
        Icono: TrendingUp,
        grande: false,
    },
    {
        valor: '+40',
        label: 'Plataforma técnica',
        descripcion: '+40 protocolos desarrollados y validados. Metodologías propias aplicadas en múltiples especies, con procesos documentados y escalables.',
        Icono: ClipboardList,
        grande: false,
    },
    {
        valor: 'DH',
        label: 'Investigación avanzada',
        descripcion: 'Desarrollo en doble haploides (DH). Participación en avances pioneros en soja, con proyección hacia cannabis y otras especies estratégicas.',
        Icono: Clock,
        grande: false,
    },
    {
        valor: 'VITRON',
        label: 'Origen del sistema',
        descripcion: 'Impulsado por Vitron. Laboratorio especializado en cultivo de tejidos vegetales, base científica y operativa de GANANDA-Pro.',
        Icono: ShieldCheck,
        grande: false,
    },
]

const badges = [
    'No Transgénico',
    'Seguridad Alimentaria',
    'Trazabilidad Total',
    'Referentes Internacionales',
]

function MetricaCard({
    metrica,
    index,
}: {
    metrica: (typeof metricas)[0]
    index: number
}) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
            className="metrica-card"
        >
            {/* Icono decorativo */}
            <div className="mb-4" style={{ color: 'var(--dorado)', opacity: 0.6 }}>
                <metrica.Icono size={28} strokeWidth={1.5} />
            </div>

            {/* Valor */}
            <div className="font-editorial text-gradient-dorado mb-2 text-4xl sm:text-5xl">
                {metrica.valor}
            </div>

            {/* Label */}
            <div className="label-caps text-[var(--verde-musgo)] tracking-widest text-xs mb-3">
                {metrica.label}
            </div>

            {/* Descripción */}
            <p className="text-[var(--texto-oscuro)] text-sm leading-relaxed" style={{ opacity: 0.75 }}>
                {metrica.descripcion}
            </p>

            {/* Línea inferior dorada */}
            <div
                className="mt-4 h-px"
                style={{ background: 'linear-gradient(90deg, var(--dorado), transparent)' }}
            />
        </motion.div>
    )
}

export default function AutoridadCientifica() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="investigacion"
            className="section-padding section-clara"
        >
            <div className="container-anima">
                {/* Header */}
                <div ref={ref} className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="flex items-center justify-center gap-4 mb-6"
                    >
                        <span className="h-px w-8 bg-[var(--dorado)]" style={{ opacity: 0.5 }} />
                        <span className="label-caps text-[var(--dorado)] tracking-[0.3em] text-xs">
                            Autoridad Científica
                        </span>
                        <span className="h-px w-8 bg-[var(--dorado)]" style={{ opacity: 0.5 }} />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="heading-lg text-[var(--texto-oscuro)] mb-4"
                    >
                        Respaldo científico que sostiene
                        <br />
                        <span className="text-gradient-verde">cada decisión</span>
                    </motion.h2>

                    {/* Badge VITRON */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="flex justify-center mb-5"
                    >
                        <span
                            className="label-caps text-xs px-4 py-2 rounded-full tracking-widest"
                            style={{
                                border: '1px solid rgba(201,168,76,0.45)',
                                color: 'var(--dorado)',
                                background: 'rgba(201,168,76,0.06)',
                            }}
                        >
                            Impulsado por <strong>VITRON</strong>
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="body-lg max-w-xl mx-auto"
                        style={{ color: 'var(--verde-musgo)' }}
                    >
                        Más de tres décadas de investigación aplicada, desarrollo de protocolos propios y participación activa en proyectos de innovación de alto impacto.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {metricas.map((metrica, i) => (
                        <MetricaCard key={i} metrica={metrica} index={i} />
                    ))}
                </div>

                {/* Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mt-12"
                >
                    {badges.map((badge) => (
                        <span
                            key={badge}
                            className="label-caps text-xs px-4 py-2 border border-[rgba(201,168,76,0.3)] text-[var(--verde-musgo)] tracking-widest"
                        >
                            {badge}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
