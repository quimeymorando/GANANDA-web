'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Microscope, Dna, FlaskConical, ShieldCheck } from 'lucide-react'

/* ── Data ──────────────────────────────────────────────────────────────────── */

const pilares = [
    {
        numero: '01',
        titulo: 'Biotecnología vegetal',
        descripcion:
            'Aplicamos técnicas avanzadas de cultivo de tejidos y micropropagación para multiplicar material genético con precisión, vigor y trazabilidad desde el origen.',
    },
    {
        numero: '02',
        titulo: 'Genética aplicada',
        descripcion:
            'Desarrollamos programas de mejoramiento genético y saneamiento que garantizan variedades estables, libres de patógenos y adaptadas a las demandas del mercado.',
    },
    {
        numero: '03',
        titulo: 'Protocolos de cultivo',
        descripcion:
            'Más de 40 protocolos exclusivos documentados en múltiples especies. Cada protocolo es el resultado de décadas de investigación y validación en campo.',
    },
]

const pasos = [
    {
        titulo: 'Diagnóstico inicial',
        descripcion: 'Evaluamos el estado actual del material vegetal, identificamos patógenos y definimos los objetivos del proyecto.',
    },
    {
        titulo: 'Análisis genético',
        descripcion: 'Caracterización molecular del material para determinar pureza genética, estabilidad y potencial de mejoramiento.',
    },
    {
        titulo: 'Diseño de protocolo',
        descripcion: 'Desarrollamos un protocolo a medida basado en la variedad, los objetivos productivos y los estándares requeridos.',
    },
    {
        titulo: 'Implementación controlada',
        descripcion: 'Ejecución en laboratorio con condiciones controladas, seguimiento de cada etapa y documentación completa.',
    },
    {
        titulo: 'Monitoreo y optimización',
        descripcion: 'Seguimiento post-implementación, ajustes de protocolo y acompañamiento técnico continuo hasta la producción final.',
    },
]

const areas = [
    {
        titulo: 'Cultivo de tejidos',
        descripcion: 'Micropropagación del meristema para producción masiva de material vegetal uniforme y libre de contaminantes.',
        icono: Microscope,
    },
    {
        titulo: 'Saneamiento genético',
        descripcion: 'Eliminación de virus y patógenos desde el origen, incluyendo HLVd, mediante técnicas de termoterapia y cultivo in vitro.',
        icono: Dna,
    },
    {
        titulo: 'Trazabilidad molecular',
        descripcion: 'Sistema de seguimiento genético que permite verificar la identidad y pureza de cada variedad en cualquier punto de la cadena.',
        icono: ShieldCheck,
    },
    {
        titulo: 'Optimización de rendimiento',
        descripcion: 'Programas de mejoramiento que combinan selección asistida por marcadores y evaluación fenotípica en condiciones controladas.',
        icono: FlaskConical,
    },
]

/* ── Animated helper ───────────────────────────────────────────────────────── */

function FadeIn({
    children,
    delay = 0,
    className = '',
    y = 28,
}: {
    children: React.ReactNode
    delay?: number
    className?: string
    y?: number
}) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/* ── Page ───────────────────────────────────────────────────────────────────── */

export default function InvestigacionPage() {
    const heroRef = useRef(null)
    const heroInView = useInView(heroRef, { once: true })

    return (
        <main className="min-h-screen bg-[var(--fondo-oscuro)] overflow-hidden">

            {/* ═══════════════════════════════════════════════════════════════
                1. HERO
            ═══════════════════════════════════════════════════════════════ */}
            <section
                className="relative min-h-screen flex items-center justify-center pattern-celular"
                style={{
                    background: 'radial-gradient(ellipse at 40% 50%, #1a3a2a 0%, #0d1f15 60%, #060f09 100%)',
                }}
            >
                {/* Orbes */}
                <div
                    className="absolute top-1/3 left-[15%] w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(74,140,92,0.1) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-[10%] w-[350px] h-[350px] rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
                        filter: 'blur(50px)',
                    }}
                />

                {/* Imagen superior izquierda — tubo de ensayo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.4, ease: 'easeOut' }}
                    className="absolute top-[15%] md:top-[10%] left-0 sm:-left-8 md:-left-16 lg:-left-20 w-[85vw] sm:w-[420px] md:w-[520px] lg:w-[650px] pointer-events-none"
                    style={{
                        maskImage: 'linear-gradient(to left, transparent 0%, black 50%), linear-gradient(to top, transparent 0%, black 60%)',
                        maskComposite: 'intersect',
                        WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 50%), linear-gradient(to top, transparent 0%, black 60%)',
                        WebkitMaskComposite: 'source-in',
                    }}
                >
                    <Image
                        src="/gananda3.jpeg"
                        alt=""
                        width={650}
                        height={366}
                        className="w-full h-auto block"
                        style={{ opacity: 0.45 }}
                        sizes="(max-width: 640px) 85vw, (max-width: 768px) 420px, (max-width: 1024px) 520px, 650px"
                    />
                </motion.div>

                {/* Imagen inferior derecha — placa de petri */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
                    className="absolute bottom-0 right-0 sm:-right-8 md:-right-16 lg:-right-20 w-[85vw] sm:w-[420px] md:w-[520px] lg:w-[650px] pointer-events-none"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 50%), linear-gradient(to bottom, transparent 0%, black 40%)',
                        maskComposite: 'intersect',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50%), linear-gradient(to bottom, transparent 0%, black 40%)',
                        WebkitMaskComposite: 'source-in',
                    }}
                >
                    <Image
                        src="/gananda4.jpeg"
                        alt=""
                        width={650}
                        height={366}
                        className="w-full h-auto block"
                        style={{ opacity: 0.45 }}
                        sizes="(max-width: 640px) 85vw, (max-width: 768px) 420px, (max-width: 1024px) 520px, 650px"
                    />
                </motion.div>

                {/* Línea superior */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
                    className="absolute top-0 left-0 right-0 h-px origin-center"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }}
                />

                <div ref={heroRef} className="relative z-10 text-center px-6 sm:px-10 pt-36 md:pt-44 pb-24 md:pb-32">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex items-center justify-center gap-4 mb-10"
                    >
                        <span
                            className="h-px w-10"
                            style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5))' }}
                        />
                        <span className="label-caps tracking-[0.5em] text-[9px]" style={{ color: 'var(--dorado)', opacity: 0.6 }}>
                            Investigación
                        </span>
                        <span
                            className="h-px w-10"
                            style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.5), transparent)' }}
                        />
                    </motion.div>

                    {/* Título */}
                    <motion.h1
                        initial={{ opacity: 0, y: 28 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] max-w-4xl mx-auto"
                    >
                        <span className="text-[var(--texto-claro)]">Ciencia al</span>
                        <br />
                        <span className="text-gradient-dorado">servicio de la planta</span>
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.7 }}
                        className="mt-8 font-editorial italic text-base md:text-lg text-[var(--texto-gris)] leading-relaxed max-w-xl mx-auto"
                    >
                        Integramos biotecnología, conocimiento aplicado y visión estratégica
                        para elevar los estándares de una industria en plena transformación.
                    </motion.p>

                    {/* Elemento decorativo */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.9 }}
                        className="flex items-center justify-center gap-3 mt-10 md:mt-12"
                    >
                        <div
                            className="h-px w-12 sm:w-16"
                            style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.35))' }}
                        />
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ opacity: 0.4 }}>
                            <path
                                d="M10 2C10 2 4 6 4 12c0 3 2.5 5 6 6 3.5-1 6-3 6-6 0-6-6-10-6-10z"
                                stroke="var(--dorado)"
                                strokeWidth="0.8"
                                fill="none"
                            />
                            <path d="M10 7v9" stroke="var(--dorado)" strokeWidth="0.6" />
                            <path
                                d="M10 10c-1.5-1-2.5-1.5-3.5-1.5M10 12.5c1.5-1 2.5-1.5 3.5-1.5"
                                stroke="var(--dorado)"
                                strokeWidth="0.5"
                            />
                        </svg>
                        <div
                            className="h-px w-12 sm:w-16"
                            style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.35), transparent)' }}
                        />
                    </motion.div>
                </div>

                {/* Línea inferior */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }}
                />
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                2. NUESTRO ENFOQUE — 3 pilares
            ═══════════════════════════════════════════════════════════════ */}
            <section
                className="relative py-24 md:py-32"
                style={{
                    background: 'linear-gradient(180deg, #060f09 0%, #0d1f15 40%, #111f18 100%)',
                }}
            >
                <div className="absolute inset-0 pattern-celular pointer-events-none" style={{ opacity: 0.3 }} />

                <div className="relative z-10 container-anima">
                    {/* Título */}
                    <FadeIn className="text-center mb-16 md:mb-20">
                        <span className="label-caps text-[var(--dorado)] tracking-[0.5em] text-[10px]">
                            Fundamentos
                        </span>
                        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[var(--texto-claro)] mt-5 leading-tight">
                            Nuestro <span className="text-gradient-dorado">enfoque</span>
                        </h2>
                        <div
                            className="h-px w-16 mx-auto mt-8"
                            style={{ background: 'linear-gradient(90deg, transparent, var(--dorado), transparent)' }}
                        />
                    </FadeIn>

                    {/* 3 columnas */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {pilares.map((pilar, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="card-servicio rounded-sm p-8 md:p-10 text-center md:text-left h-full">
                                    {/* Número */}
                                    <span
                                        className="font-editorial text-4xl md:text-5xl leading-none"
                                        style={{
                                            background: 'linear-gradient(180deg, rgba(201,168,76,0.3) 0%, rgba(201,168,76,0.05) 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                        }}
                                    >
                                        {pilar.numero}
                                    </span>

                                    <h3 className="font-editorial text-xl md:text-2xl text-[var(--texto-claro)] mt-4 mb-4 leading-snug">
                                        {pilar.titulo}
                                    </h3>

                                    <div
                                        className="h-px w-10 mb-5 mx-auto md:mx-0"
                                        style={{ background: 'linear-gradient(90deg, var(--dorado), transparent)' }}
                                    />

                                    <p className="text-sm md:text-base text-[var(--texto-gris)] leading-relaxed">
                                        {pilar.descripcion}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                3. PROCESO — Timeline zigzag
            ═══════════════════════════════════════════════════════════════ */}
            <section
                className="relative py-24 md:py-32"
                style={{
                    background: 'linear-gradient(180deg, #111f18 0%, #0d1f15 50%, #0b1a11 100%)',
                }}
            >
                {/* Orbe */}
                <div
                    className="absolute top-1/3 right-0 w-[400px] h-[400px] pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(74,140,92,0.06) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                        transform: 'translateX(25%)',
                    }}
                />

                <div className="relative z-10 container-anima">
                    {/* Título */}
                    <FadeIn className="text-center mb-16 md:mb-24">
                        <span className="label-caps text-[var(--dorado)] tracking-[0.5em] text-[10px]">
                            Metodología
                        </span>
                        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[var(--texto-claro)] mt-5 leading-tight">
                            Cómo <span className="text-gradient-dorado">trabajamos</span>
                        </h2>
                        <div
                            className="h-px w-16 mx-auto mt-8"
                            style={{ background: 'linear-gradient(90deg, transparent, var(--dorado), transparent)' }}
                        />
                    </FadeIn>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Línea central — solo desktop */}
                        <div
                            className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2"
                            style={{ background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.2) 10%, rgba(201,168,76,0.2) 90%, transparent)' }}
                        />

                        {/* Línea izquierda — solo mobile */}
                        <div
                            className="md:hidden absolute top-0 bottom-0 left-4 w-px"
                            style={{ background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.2) 10%, rgba(201,168,76,0.2) 90%, transparent)' }}
                        />

                        <div className="space-y-12 md:space-y-16">
                            {pasos.map((paso, i) => {
                                const isRight = i % 2 !== 0
                                return (
                                    <FadeIn key={i} delay={0.05}>
                                        <div className={`relative flex items-start gap-6 md:gap-0 ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                                            {/* Mobile: dot a la izquierda */}
                                            <div className="md:hidden relative flex-shrink-0 w-8 flex justify-center pt-1">
                                                <div
                                                    className="w-3 h-3 rounded-full z-10"
                                                    style={{
                                                        background: 'var(--fondo-oscuro)',
                                                        border: '2px solid var(--dorado)',
                                                        boxShadow: '0 0 12px rgba(201,168,76,0.2)',
                                                    }}
                                                />
                                            </div>

                                            {/* Contenido — lado izquierdo o derecho */}
                                            <div className={`flex-1 md:w-[calc(50%-2rem)] ${isRight ? 'md:text-left md:pr-0 md:pl-12' : 'md:text-right md:pl-0 md:pr-12'}`}>
                                                <span className="label-caps text-[var(--dorado)] tracking-[0.3em] text-[9px]" style={{ opacity: 0.5 }}>
                                                    Paso {String(i + 1).padStart(2, '0')}
                                                </span>
                                                <h3 className="font-editorial text-xl md:text-2xl text-[var(--texto-claro)] mt-2 mb-3 leading-snug">
                                                    {paso.titulo}
                                                </h3>
                                                <p className="text-sm md:text-base text-[var(--texto-gris)] leading-relaxed">
                                                    {paso.descripcion}
                                                </p>
                                            </div>

                                            {/* Desktop: dot central */}
                                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1 w-4 h-4 items-center justify-center z-10">
                                                <div
                                                    className="w-3 h-3 rounded-full"
                                                    style={{
                                                        background: 'var(--fondo-oscuro)',
                                                        border: '2px solid var(--dorado)',
                                                        boxShadow: '0 0 12px rgba(201,168,76,0.2)',
                                                    }}
                                                />
                                            </div>

                                            {/* Spacer para el otro lado en desktop */}
                                            <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                                        </div>
                                    </FadeIn>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                4. ÁREAS DE INVESTIGACIÓN — Grid 2×2
            ═══════════════════════════════════════════════════════════════ */}
            <section
                className="relative py-24 md:py-32"
                style={{
                    background: 'linear-gradient(180deg, #0b1a11 0%, #0d1f15 40%, #111f18 100%)',
                }}
            >
                <div className="absolute inset-0 pattern-celular pointer-events-none" style={{ opacity: 0.3 }} />

                {/* Orbe dorado */}
                <div
                    className="absolute bottom-[20%] left-0 w-[400px] h-[400px] pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
                        filter: 'blur(50px)',
                        transform: 'translateX(-30%)',
                    }}
                />

                <div className="relative z-10 container-anima">
                    {/* Título */}
                    <FadeIn className="text-center mb-16 md:mb-20">
                        <span className="label-caps text-[var(--dorado)] tracking-[0.5em] text-[10px]">
                            Especialización
                        </span>
                        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[var(--texto-claro)] mt-5 leading-tight">
                            Áreas de <span className="text-gradient-dorado">investigación</span>
                        </h2>
                        <div
                            className="h-px w-16 mx-auto mt-8"
                            style={{ background: 'linear-gradient(90deg, transparent, var(--dorado), transparent)' }}
                        />
                    </FadeIn>

                    {/* Grid 2×2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
                        {areas.map((area, i) => {
                            const Icon = area.icono
                            return (
                                <FadeIn key={i} delay={i * 0.08}>
                                    <div className="card-servicio group rounded-sm p-8 md:p-10 h-full">
                                        {/* Icono */}
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                                            style={{
                                                background: 'rgba(201,168,76,0.06)',
                                                border: '1px solid rgba(201,168,76,0.15)',
                                            }}
                                        >
                                            <Icon size={20} style={{ color: 'var(--dorado)', opacity: 0.7 }} />
                                        </div>

                                        <h3 className="font-editorial text-xl md:text-2xl text-[var(--texto-claro)] mb-3 leading-snug">
                                            {area.titulo}
                                        </h3>

                                        <div
                                            className="h-px w-10 mb-4"
                                            style={{ background: 'linear-gradient(90deg, var(--dorado), transparent)' }}
                                        />

                                        <p className="text-sm text-[var(--texto-gris)] leading-relaxed">
                                            {area.descripcion}
                                        </p>
                                    </div>
                                </FadeIn>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                5. CTA FINAL
            ═══════════════════════════════════════════════════════════════ */}
            <section
                className="relative py-28 md:py-40"
                style={{
                    background: 'radial-gradient(ellipse at 50% 60%, rgba(26,58,42,0.35) 0%, #060f09 65%)',
                }}
            >
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 60%)',
                        filter: 'blur(70px)',
                    }}
                />

                <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
                    <FadeIn>
                        <div
                            className="h-px w-12 mx-auto mb-12"
                            style={{ background: 'linear-gradient(90deg, transparent, var(--dorado), transparent)' }}
                        />
                        <p className="font-editorial italic text-2xl sm:text-3xl md:text-4xl text-[var(--dorado-claro)] leading-snug mb-6" style={{ opacity: 0.85 }}>
                            La innovación empieza con una pregunta.
                        </p>
                        <p className="text-sm md:text-base text-[var(--texto-gris)] leading-relaxed max-w-md mx-auto mb-14">
                            Si estás listo para transformar tu operación, hablemos.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <div className="flex flex-col items-center gap-6">
                            <Link
                                href="/#contacto"
                                className="btn-anima text-xs tracking-[0.15em]"
                            >
                                Contactar
                            </Link>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 label-caps text-[var(--texto-gris)] hover:text-[var(--dorado-claro)] transition-colors duration-300 text-[10px] tracking-[0.2em]"
                            >
                                <ArrowLeft size={12} />
                                Volver al inicio
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    )
}
