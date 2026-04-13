'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, User } from 'lucide-react'

/* ── Data ──────────────────────────────────────────────────────────────────── */

const fundadores = [
    {
        nombre: 'Nombre Apellido',
        cargo: 'CEO & Co-Founder',
        especialidad: 'Visión Estratégica',
        descripcion:
            'Con más de dos décadas de experiencia en biotecnología vegetal, lidera la visión estratégica de GANANDA y su compromiso con la innovación responsable en el sector cannábico.',
    },
    {
        nombre: 'Nombre Apellido',
        cargo: 'CTO & Co-Founder',
        especialidad: 'Micropropagación',
        descripcion:
            'Referente en micropropagación y cultivo de tejidos vegetales. Su trabajo de investigación ha dado lugar a más de 40 protocolos exclusivos que definen el estándar de la industria.',
    },
    {
        nombre: 'Nombre Apellido',
        cargo: 'CSO & Co-Founder',
        especialidad: 'Genética Vegetal',
        descripcion:
            'Especialista en genética vegetal y saneamiento de cultivos. Impulsa los programas de I+D+i que posicionan a GANANDA como referente global en sanidad del cannabis.',
    },
]

const equipo = [
    {
        nombre: 'Nombre Apellido',
        rol: 'Dirección de Laboratorio',
        descripcion: 'Coordina los procesos de micropropagación y garantiza los estándares de producción.',
    },
    {
        nombre: 'Nombre Apellido',
        rol: 'Investigación Genómica',
        descripcion: 'Lidera los programas de saneamiento y desarrollo de variedades estables.',
    },
    {
        nombre: 'Nombre Apellido',
        rol: 'Desarrollo de Negocios',
        descripcion: 'Construye alianzas estratégicas con productores y mercados internacionales.',
    },
    {
        nombre: 'Nombre Apellido',
        rol: 'Control & Trazabilidad',
        descripcion: 'Asegura la trazabilidad completa del laboratorio al producto final.',
    },
]

/* ── Animated helper ───────────────────────────────────────────────────────── */

function FadeIn({
    children,
    delay = 0,
    className = '',
    y = 30,
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

/* ── Photo placeholders ────────────────────────────────────────────────────── */

function FounderPhoto() {
    return (
        <div className="relative w-full max-w-[380px] mx-auto">
            {/* Glow dorado detrás */}
            <div
                className="absolute -inset-3 rounded-sm pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                }}
            />
            <div
                className="relative aspect-[3/4] overflow-hidden rounded-sm flex items-center justify-center"
                style={{
                    background: 'linear-gradient(160deg, rgba(26,58,42,0.6) 0%, rgba(13,31,21,0.9) 100%)',
                    border: '1px solid rgba(201,168,76,0.12)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(201,168,76,0.08)',
                }}
            >
                {/* Patrón interior sutil */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.03) 1px, transparent 0)',
                        backgroundSize: '24px 24px',
                    }}
                />
                {/* Gradiente interno */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at 50% 40%, rgba(74,140,92,0.08) 0%, transparent 60%)',
                    }}
                />
                {/* Icono centrado */}
                <div className="relative flex flex-col items-center gap-4" style={{ opacity: 0.2 }}>
                    <div
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{ border: '1px solid rgba(201,168,76,0.2)' }}
                    >
                        <User size={32} className="text-[var(--dorado)]" />
                    </div>
                </div>
                {/* Esquinas decorativas */}
                <svg className="absolute top-3 left-3 w-5 h-5" viewBox="0 0 20 20" fill="none">
                    <path d="M0 12V0h12" stroke="rgba(201,168,76,0.25)" strokeWidth="1" />
                </svg>
                <svg className="absolute bottom-3 right-3 w-5 h-5" viewBox="0 0 20 20" fill="none">
                    <path d="M20 8v12H8" stroke="rgba(201,168,76,0.25)" strokeWidth="1" />
                </svg>
            </div>
        </div>
    )
}

function TeamPhoto() {
    return (
        <div
            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto flex items-center justify-center"
            style={{
                background: 'linear-gradient(160deg, rgba(26,58,42,0.6) 0%, rgba(13,31,21,0.9) 100%)',
                border: '1px solid rgba(201,168,76,0.15)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(201,168,76,0.06)',
            }}
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 50% 40%, rgba(74,140,92,0.1) 0%, transparent 60%)',
                }}
            />
            <User size={24} className="text-[var(--dorado)] relative" style={{ opacity: 0.2 }} />
        </div>
    )
}

/* ── Page ───────────────────────────────────────────────────────────────────── */

export default function EquipoPage() {
    const heroRef = useRef(null)
    const heroInView = useInView(heroRef, { once: true })

    return (
        <main className="min-h-screen bg-[var(--fondo-oscuro)] overflow-hidden">

            {/* ═══════════════════════════════════════════════════════════════
                HERO
            ═══════════════════════════════════════════════════════════════ */}
            <section
                className="relative flex items-center justify-center pattern-celular"
                style={{
                    background: 'radial-gradient(ellipse at 40% 50%, #1a3a2a 0%, #0d1f15 60%, #060f09 100%)',
                }}
            >
                {/* Orbes de luz */}
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

                {/* Imagen decorativa — inferior derecho */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
                    className="absolute bottom-0 -right-16 sm:-right-20 md:-right-24 lg:-right-28 w-[500px] sm:w-[650px] md:w-[850px] lg:w-[1050px] pointer-events-none"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 40%), linear-gradient(to bottom, transparent 0%, black 35%)',
                        maskComposite: 'intersect',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%), linear-gradient(to bottom, transparent 0%, black 35%)',
                        WebkitMaskComposite: 'source-in',
                    }}
                >
                    <Image
                        src="/gananda2.jpeg"
                        alt=""
                        width={420}
                        height={236}
                        className="w-full h-auto block"
                        style={{ opacity: 0.3 }}
                        sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 360px, 420px"
                    />
                </motion.div>

                {/* Línea decorativa superior animada */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
                    className="absolute top-0 left-0 right-0 h-px origin-center"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }}
                />

                <div ref={heroRef} className="relative z-10 text-center px-6 sm:px-10 pt-36 md:pt-44 pb-24 md:pb-32">
                    {/* Eyebrow — sutil, no compite con el título */}
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
                            La Familia
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
                        <span className="text-[var(--texto-claro)]">Quiénes lo</span>
                        <br />
                        <span className="text-gradient-dorado">hacemos posible</span>
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.7 }}
                        className="mt-8 font-editorial italic text-base md:text-lg text-[var(--texto-gris)] leading-relaxed max-w-lg mx-auto"
                    >
                        Detrás de cada protocolo, cada variedad y cada avance,
                        hay personas que eligieron dedicar su vida a elevar el estándar.
                    </motion.p>

                    {/* Elemento decorativo botánico — hoja estilizada entre líneas */}
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
                        {/* Hoja minimalista SVG */}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ opacity: 0.4 }}>
                            <path
                                d="M10 2C10 2 4 6 4 12c0 3 2.5 5 6 6 3.5-1 6-3 6-6 0-6-6-10-6-10z"
                                stroke="var(--dorado)"
                                strokeWidth="0.8"
                                fill="none"
                            />
                            <path
                                d="M10 7v9"
                                stroke="var(--dorado)"
                                strokeWidth="0.6"
                            />
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

                {/* Línea decorativa inferior */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }}
                />
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                FUNDADORES — Layout zigzag premium
            ═══════════════════════════════════════════════════════════════ */}
            <section
                className="relative py-28 md:py-40"
                style={{
                    background: 'linear-gradient(180deg, #060f09 0%, #0d1f15 35%, #111f18 65%, #0d1f15 100%)',
                }}
            >
                {/* Orbe ambiental */}
                <div
                    className="absolute top-[20%] left-0 w-[500px] h-[500px] pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 60%)',
                        filter: 'blur(60px)',
                        transform: 'translateX(-30%)',
                    }}
                />

                <div className="relative z-10 container-anima">
                    {/* Título de sección */}
                    <FadeIn className="text-center mb-24 md:mb-32">
                        <span className="label-caps text-[var(--dorado)] tracking-[0.5em] text-[10px]">
                            Fundadores
                        </span>
                        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[var(--texto-claro)] mt-5 leading-tight">
                            Las mentes detrás de{' '}
                            <span className="text-gradient-dorado">GANANDA</span>
                        </h2>
                        <div
                            className="h-px w-16 mx-auto mt-8"
                            style={{ background: 'linear-gradient(90deg, transparent, var(--dorado), transparent)' }}
                        />
                    </FadeIn>

                    {/* Bloques zigzag */}
                    <div className="space-y-24 md:space-y-36">
                        {fundadores.map((fundador, i) => {
                            const invertido = i % 2 !== 0
                            return (
                                <FadeIn key={i} delay={0.1}>
                                    <div
                                        className={`flex flex-col items-center gap-12 md:gap-20 ${
                                            invertido ? 'md:flex-row-reverse' : 'md:flex-row'
                                        }`}
                                    >
                                        {/* Foto */}
                                        <div className="w-full md:w-5/12">
                                            <FounderPhoto />
                                        </div>

                                        {/* Texto */}
                                        <div className={`w-full md:w-7/12 ${invertido ? 'md:text-right' : 'md:text-left'} text-center`}>
                                            {/* Número + especialidad */}
                                            <div className={`flex items-center gap-4 mb-6 justify-center ${invertido ? 'md:justify-end' : 'md:justify-start'}`}>
                                                <span
                                                    className="font-editorial text-5xl leading-none"
                                                    style={{
                                                        background: 'linear-gradient(180deg, rgba(201,168,76,0.25) 0%, rgba(201,168,76,0.05) 100%)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                        backgroundClip: 'text',
                                                    }}
                                                >
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                                <div
                                                    className="h-8 w-px"
                                                    style={{ background: 'linear-gradient(180deg, rgba(201,168,76,0.3), transparent)' }}
                                                />
                                                <span className="label-caps text-[var(--dorado)] tracking-[0.3em] text-[9px]">
                                                    {fundador.especialidad}
                                                </span>
                                            </div>

                                            <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[var(--texto-claro)] mb-2 leading-snug">
                                                {fundador.nombre}
                                            </h3>

                                            <p className="label-caps text-[var(--dorado-claro)] tracking-[0.2em] text-[11px] mb-8" style={{ opacity: 0.8 }}>
                                                {fundador.cargo}
                                            </p>

                                            {/* Divisor elegante */}
                                            <div className={`flex items-center gap-2 mb-8 justify-center ${invertido ? 'md:justify-end' : 'md:justify-start'}`}>
                                                <div
                                                    className="h-px w-8"
                                                    style={{ background: 'linear-gradient(90deg, var(--dorado), transparent)' }}
                                                />
                                                <div
                                                    className="w-1 h-1 rounded-full"
                                                    style={{ background: 'var(--dorado)', opacity: 0.5 }}
                                                />
                                            </div>

                                            <p className="text-sm sm:text-base md:text-lg text-[var(--texto-gris)] leading-[1.8] max-w-md mx-auto md:mx-0">
                                                {fundador.descripcion}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                FRASE PUENTE — Editorial
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative py-20 md:py-28">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at 50% 50%, rgba(26,58,42,0.3) 0%, #0d1f15 60%)',
                    }}
                />
                <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
                    <FadeIn>
                        <div
                            className="h-px w-16 mx-auto mb-12"
                            style={{ background: 'linear-gradient(90deg, transparent, var(--dorado), transparent)' }}
                        />
                        <p className="font-editorial italic text-xl sm:text-2xl md:text-3xl text-[var(--dorado-claro)] leading-relaxed" style={{ opacity: 0.85 }}>
                            &ldquo;Cada avance de GANANDA es el resultado
                            <br className="hidden md:block" />
                            de mentes que eligen la ciencia como camino
                            <br className="hidden md:block" />
                            y la naturaleza como destino.&rdquo;
                        </p>
                        <div
                            className="h-px w-16 mx-auto mt-12"
                            style={{ background: 'linear-gradient(90deg, transparent, var(--dorado), transparent)' }}
                        />
                    </FadeIn>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                EQUIPO — Grid de cards premium
            ═══════════════════════════════════════════════════════════════ */}
            <section
                className="relative py-28 md:py-36"
                style={{
                    background: 'linear-gradient(180deg, #0d1f15 0%, #111f18 40%, #0d1f15 100%)',
                }}
            >
                {/* Patrón celular */}
                <div className="absolute inset-0 pattern-celular pointer-events-none" style={{ opacity: 0.3 }} />

                {/* Orbe verde */}
                <div
                    className="absolute bottom-[20%] right-0 w-[450px] h-[450px] pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(74,140,92,0.06) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                        transform: 'translateX(25%)',
                    }}
                />

                <div className="relative z-10 container-anima">
                    {/* Título */}
                    <FadeIn className="text-center mb-20">
                        <span className="label-caps text-[var(--dorado)] tracking-[0.5em] text-[10px]">
                            El Equipo
                        </span>
                        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[var(--texto-claro)] mt-5 leading-tight">
                            Nuestro equipo
                        </h2>
                        <p className="text-sm text-[var(--texto-gris)] mt-4 max-w-md mx-auto leading-relaxed">
                            Profesionales que comparten una visión: elevar el estándar de la biotecnología cannábica.
                        </p>
                        <div
                            className="h-px w-16 mx-auto mt-8"
                            style={{ background: 'linear-gradient(90deg, transparent, var(--dorado), transparent)' }}
                        />
                    </FadeIn>

                    {/* Grid 2×2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
                        {equipo.map((miembro, i) => (
                            <FadeIn key={i} delay={i * 0.08}>
                                <div className="card-servicio group rounded-sm p-8 md:p-10 flex flex-col items-center text-center">
                                    {/* Foto circular */}
                                    <div className="mb-6">
                                        <TeamPhoto />
                                    </div>

                                    <h3 className="font-editorial text-xl md:text-2xl text-[var(--texto-claro)] mb-2 leading-snug">
                                        {miembro.nombre}
                                    </h3>

                                    <p className="label-caps text-[var(--dorado)] tracking-[0.25em] text-[9px] mb-5">
                                        {miembro.rol}
                                    </p>

                                    {/* Divisor */}
                                    <div
                                        className="h-px w-10 mb-5 mx-auto"
                                        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)' }}
                                    />

                                    <p className="text-sm text-[var(--texto-gris)] leading-relaxed">
                                        {miembro.descripcion}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                CTA — Cierre emocional
            ═══════════════════════════════════════════════════════════════ */}
            <section
                className="relative py-28 md:py-40"
                style={{
                    background: 'radial-gradient(ellipse at 50% 60%, rgba(26,58,42,0.35) 0%, #060f09 65%)',
                }}
            >
                {/* Orbe dorado */}
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
                        <p className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[var(--texto-claro)] leading-tight mb-6">
                            Ciencia, experiencia
                            <br />
                            y <span className="text-gradient-dorado">propósito.</span>
                        </p>
                        <p className="text-sm md:text-base text-[var(--texto-gris)] leading-relaxed max-w-md mx-auto mb-14">
                            Cada miembro de GANANDA comparte una misma convicción:
                            que la biotecnología puede transformar la relación del mundo con el cannabis.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <div className="flex flex-col items-center gap-7">
                            <Link
                                href="/#contacto"
                                className="btn-anima text-xs tracking-[0.15em]"
                            >
                                Trabajar con nosotros
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
