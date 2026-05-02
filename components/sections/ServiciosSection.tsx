'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sprout, Database, FlaskConical, GitBranch } from 'lucide-react'

const servicios = [
    {
        numero: '01',
        titulo: 'Saneamiento y Micropropagación',
        subtitulo: 'Material de alta calidad sanitaria',
        descripcion:
            'Producción escalada de plantas mediante cultivo de meristemas, con uniformidad genética y libre de patógenos.',
        tag: 'Producción',
        Icono: Sprout,
    },
    {
        numero: '02',
        titulo: 'Banco de Germoplasma In Vitro',
        subtitulo: 'Conservación de genética',
        descripcion:
            'Preservación y gestión de material genético vegetal en laboratorio para garantizar disponibilidad futura y trazabilidad.',
        tag: 'Laboratorio',
        Icono: Database,
    },
    {
        numero: '03',
        titulo: 'Investigación y Desarrollo Genético',
        subtitulo: 'Mejoramiento continuo',
        descripcion:
            'Desarrollo de soluciones genéticas para optimizar performance productiva y adaptabilidad a diferentes entornos.',
        tag: 'Investigación',
        Icono: FlaskConical,
    },
    {
        numero: '04',
        titulo: 'Desarrollo de Doble Haploides (DH)',
        subtitulo: 'Acelerar la mejora genética',
        descripcion:
            'Tecnologías avanzadas para obtener líneas homocigotas en menor tiempo, reduciendo incertidumbre en desarrollo de variedades.',
        tag: 'Consultoría',
        Icono: GitBranch,
    },
]

function ServicioCard({
    servicio,
    index,
}: {
    servicio: (typeof servicios)[0]
    index: number
}) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <motion.article
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
            className="metrica-card group cursor-default"
        >
            {/* Icono */}
            <div className="mb-4" style={{ color: 'var(--verde-musgo)', opacity: 0.75 }}>
                <servicio.Icono size={28} strokeWidth={1.5} />
            </div>

            {/* Número + Tag */}
            <div className="flex items-start justify-between mb-6">
                <span
                    className="font-editorial text-4xl"
                    style={{ color: 'rgba(201,168,76,0.25)' }}
                >
                    {servicio.numero}
                </span>
                <span className="label-caps text-xs px-3 py-1 border border-[rgba(201,168,76,0.3)] text-[var(--dorado)] tracking-widest">
                    {servicio.tag}
                </span>
            </div>

            {/* Título */}
            <h3 className="heading-md text-[var(--texto-oscuro)] mb-1 group-hover:text-[var(--verde-musgo)] transition-colors duration-300">
                {servicio.titulo}
            </h3>

            {/* Subtítulo */}
            <p className="label-caps text-[var(--verde-musgo)] tracking-widest text-xs mb-4">
                {servicio.subtitulo}
            </p>

            {/* Descripción */}
            <p className="text-[var(--texto-oscuro)] text-sm leading-relaxed" style={{ opacity: 0.75 }}>
                {servicio.descripcion}
            </p>

            {/* Línea inferior dorada */}
            <div
                className="mt-4 h-px"
                style={{ background: 'linear-gradient(90deg, var(--dorado), transparent)' }}
            />
        </motion.article>
    )
}

export default function ServiciosSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="servicios"
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
                        <span className="h-px w-8 bg-[var(--dorado)]" style={{ opacity: 0.4 }} />
                        <span className="label-caps text-[var(--dorado)] tracking-[0.3em] text-xs">
                            Catálogo de Servicios
                        </span>
                        <span className="h-px w-8 bg-[var(--dorado)]" style={{ opacity: 0.4 }} />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="heading-lg text-[var(--texto-oscuro)] mb-4"
                    >
                        Infraestructura científica para la{' '}
                        <span className="text-gradient-dorado">nueva industria</span>
                        <br />
                        del cannabis
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="body-lg max-w-xl mx-auto"
                        style={{ color: 'var(--verde-musgo)' }}
                    >
                        Servicios construidos sobre base científica para garantizar estabilidad genética, escalabilidad y desarrollo estratégico en cada etapa del sistema productivo.
                    </motion.p>
                </div>

                {/* Grid de servicios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12">
                    {servicios.map((servicio, i) => (
                        <ServicioCard key={i} servicio={servicio} index={i} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <Link
                        href="/servicios"
                        className="btn-anima group inline-flex"
                    >
                        Ver Catálogo Completo de Servicios
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
