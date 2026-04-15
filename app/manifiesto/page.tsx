'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

/* ── Data ──────────────────────────────────────────────────────────────────── */

const fragmentos = [
    'Durante mucho tiempo, hemos separado la ciencia de la experiencia.',
    'Hemos separado la biología de la conciencia.',
    'Hemos separado la planta del propósito.',
]

const fragmentoClimax = 'Hoy elegimos recordar.'

const manifiesto: { texto: string; nivel: 'climax' | 'destacado' | 'normal' }[] = [
    { texto: 'GANANDA no es una marca. Es un espacio.', nivel: 'climax' },
    {
        texto: 'Un espacio donde la ciencia sirve a la expansión humana. Donde la experiencia se honra con rigor. Donde la comunidad reemplaza la competencia.',
        nivel: 'normal',
    },
    { texto: 'No venimos a vender una planta.', nivel: 'normal' },
    { texto: 'Venimos a elevar la conversación.', nivel: 'destacado' },
    { texto: 'No venimos a imponer una verdad.', nivel: 'normal' },
    { texto: 'Venimos a explorarla juntos.', nivel: 'destacado' },
]

/* ── Animation helpers ─────────────────────────────────────────────────────── */

function FadeIn({
    children,
    delay = 0,
    className = '',
}: {
    children: React.ReactNode
    delay?: number
    className?: string
}) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

function FadeInClimax({
    children,
    delay = 0,
    className = '',
}: {
    children: React.ReactNode
    delay?: number
    className?: string
}) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-40px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.1, delay, ease: [0.22, 0.61, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/* ── Page ───────────────────────────────────────────────────────────────────── */

export default function ManifiestoPage() {
    const heroRef = useRef(null)
    const heroInView = useInView(heroRef, { once: true })

    return (
        <main className="min-h-screen bg-[var(--fondo-oscuro)] overflow-hidden">

            {/* ═══════════════════════════════════════════════════════════════
                HERO — ADN izquierda · Cannabis derecha
            ═══════════════════════════════════════════════════════════════ */}
            <section
                className="relative min-h-screen flex items-center overflow-hidden"
                style={{
                    background: 'radial-gradient(ellipse at 50% 40%, #1a3a2a 0%, #0d1f15 60%, #060f09 100%)',
                }}
            >
                {/* ADN — lateral izquierdo */}
                <div
                    className="absolute left-0 top-0 h-full hidden md:block w-[38%] pointer-events-none"
                    style={{
                        maskImage: 'linear-gradient(to right, black 20%, transparent 85%), linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
                        maskComposite: 'intersect',
                        WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent 85%), linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
                        WebkitMaskComposite: 'source-in',
                    }}
                >
                    <Image
                        src="/gananda1.jpeg"
                        alt=""
                        fill
                        priority
                        className="object-cover object-left"
                        style={{ opacity: 0.28 }}
                        sizes="38vw"
                    />
                </div>

                {/* Cannabis — lateral derecho */}
                <div
                    className="absolute right-0 top-0 h-full hidden md:block w-[38%] pointer-events-none"
                    style={{
                        maskImage: 'linear-gradient(to left, black 20%, transparent 85%), linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
                        maskComposite: 'intersect',
                        WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent 85%), linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
                        WebkitMaskComposite: 'source-in',
                    }}
                >
                    <Image
                        src="/gananda5.jpeg"
                        alt=""
                        fill
                        priority
                        className="object-cover object-right"
                        style={{ opacity: 0.28 }}
                        sizes="38vw"
                    />
                </div>

                {/* Mobile — imagen de fondo */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: "url('/gananda5.jpeg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.45,
                    }}
                />

                {/* Orbe central sutil */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 65%)',
                        filter: 'blur(40px)',
                    }}
                />

                {/* Contenido del hero — centrado */}
                <div ref={heroRef} className="relative z-10 w-full py-32 md:py-40">
                    <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex items-center justify-center gap-5 mb-10"
                        >
                            <span
                                className="h-px w-12"
                                style={{ background: 'linear-gradient(90deg, transparent, var(--dorado))' }}
                            />
                            <span className="label-caps text-[var(--dorado)] tracking-[0.5em] text-[10px]">
                                Manifiesto
                            </span>
                            <span
                                className="h-px w-12"
                                style={{ background: 'linear-gradient(90deg, var(--dorado), transparent)' }}
                            />
                        </motion.div>

                        {/* Título */}
                        <motion.h1
                            initial={{ opacity: 0, y: 28 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient-dorado leading-[1.08]"
                        >
                            Esencia
                            <br />
                            GANANDA
                        </motion.h1>

                        {/* Subtítulo */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.8 }}
                            className="mt-7 font-editorial italic text-base md:text-lg text-[var(--texto-claro)] leading-relaxed max-w-sm mx-auto"
                            style={{ opacity: 0.7 }}
                        >
                            Lo que nos mueve, lo que nos define,
                            <br className="hidden sm:block" />
                            y por qué hacemos lo que hacemos.
                        </motion.p>

                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                FRAGMENTOS — Introducción poética
                Ritmo: 3 frases normales → 1 climax dorado
                Proximidad Gestalt: espaciado corto entre frases hermanas
            ═══════════════════════════════════════════════════════════════ */}
            <section
                className="relative pt-28 pb-20 md:pt-40 md:pb-32"
                style={{
                    background: 'linear-gradient(180deg, #060f09 0%, #0d1f15 50%, #0f2419 100%)',
                }}
            >
                {/* Orbe ambiental verde */}
                <div
                    className="absolute top-1/3 right-0 w-[400px] h-[400px] pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(74,140,92,0.06) 0%, transparent 70%)',
                        filter: 'blur(50px)',
                        transform: 'translateX(25%)',
                    }}
                />

                <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-10 text-center">

                    {/* Separador decorativo */}
                    <FadeIn className="flex items-center justify-center gap-4 mb-16 md:mb-20">
                        <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4))' }} />
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ opacity: 0.5 }}>
                            <circle cx="14" cy="14" r="5" stroke="var(--dorado)" strokeWidth="0.8" />
                            <line x1="14" y1="0" x2="14" y2="7" stroke="var(--dorado)" strokeWidth="0.6" />
                            <line x1="14" y1="21" x2="14" y2="28" stroke="var(--dorado)" strokeWidth="0.6" />
                            <line x1="0" y1="14" x2="7" y2="14" stroke="var(--dorado)" strokeWidth="0.6" />
                            <line x1="21" y1="14" x2="28" y2="14" stroke="var(--dorado)" strokeWidth="0.6" />
                            <line x1="3.5" y1="3.5" x2="8.5" y2="8.5" stroke="var(--dorado)" strokeWidth="0.5" />
                            <line x1="19.5" y1="19.5" x2="24.5" y2="24.5" stroke="var(--dorado)" strokeWidth="0.5" />
                            <line x1="24.5" y1="3.5" x2="19.5" y2="8.5" stroke="var(--dorado)" strokeWidth="0.5" />
                            <line x1="8.5" y1="19.5" x2="3.5" y2="24.5" stroke="var(--dorado)" strokeWidth="0.5" />
                        </svg>
                        <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
                    </FadeIn>

                    {/* Frases introductorias */}
                    <div className="space-y-5 md:space-y-7">
                        {fragmentos.map((frag, i) => (
                            <FadeIn key={i} delay={i * 0.12}>
                                <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[var(--texto-claro)] leading-relaxed" style={{ opacity: 0.7 }}>
                                    {frag}
                                </p>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Climax — el momento de impacto */}
                    <FadeInClimax delay={0.4} className="mt-10 md:mt-14">
                        <p className="font-editorial italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--dorado-claro)] leading-tight">
                            {fragmentoClimax}
                        </p>
                    </FadeInClimax>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                MANIFIESTO — El cuerpo narrativo
                3 niveles tipográficos: climax > destacado > normal
                El espaciado varía según el peso de cada frase
            ═══════════════════════════════════════════════════════════════ */}
            <section
                className="relative py-16 md:py-24"
                style={{
                    background: 'linear-gradient(180deg, #0f2419 0%, #0d1f15 40%, #0b1a11 100%)',
                }}
            >
                {/* Patrón celular tenue */}
                <div className="absolute inset-0 pattern-celular pointer-events-none" style={{ opacity: 0.3 }} />

                {/* Orbe dorado */}
                <div
                    className="absolute top-1/3 left-0 w-[350px] h-[350px] pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
                        filter: 'blur(50px)',
                        transform: 'translateX(-35%)',
                    }}
                />

                <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-10 text-center">
                    {/* Micro-elemento decorativo de apertura */}
                    <FadeIn className="mb-14 md:mb-20 flex items-center justify-center gap-3">
                        <div
                            className="h-px w-6"
                            style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4))' }}
                        />
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--dorado)', opacity: 0.35 }} />
                        <div
                            className="h-px w-6"
                            style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }}
                        />
                    </FadeIn>

                    {/* Bloques del manifiesto */}
                    {manifiesto.map((item, i) => {
                        if (item.nivel === 'climax') {
                            return (
                                <FadeInClimax
                                    key={i}
                                    delay={0.05}
                                    className={i > 0 ? 'mt-14 md:mt-20' : ''}
                                >
                                    {/* EL momento del manifiesto — headline principal */}
                                    <p
                                        className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gradient-dorado leading-[1.2] tracking-tight py-4 md:py-6"
                                    >
                                        {item.texto}
                                    </p>
                                </FadeInClimax>
                            )
                        }

                        if (item.nivel === 'destacado') {
                            return (
                                <FadeInClimax
                                    key={i}
                                    delay={0.05}
                                    className="mt-10 md:mt-14"
                                >
                                    <p className="font-editorial italic text-xl sm:text-2xl md:text-3xl text-[var(--dorado-claro)] leading-snug">
                                        {item.texto}
                                    </p>
                                </FadeInClimax>
                            )
                        }

                        return (
                            <FadeIn
                                key={i}
                                delay={0.05}
                                className="mt-6 md:mt-8"
                            >
                                <p className="text-base md:text-lg text-[var(--texto-claro)] leading-[1.85] tracking-wide" style={{ opacity: 0.85 }}>
                                    {item.texto}
                                </p>
                            </FadeIn>
                        )
                    })}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                CIERRE — Llamado emocional + CTA
                Transición suave desde el manifiesto, no una ruptura
            ═══════════════════════════════════════════════════════════════ */}
            <section
                className="relative py-20 md:py-32"
                style={{
                    background: 'radial-gradient(ellipse at 50% 50%, rgba(26,58,42,0.3) 0%, #0b1a11 55%, #060f09 100%)',
                }}
            >
                {/* Orbe dorado central */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 60%)',
                        filter: 'blur(60px)',
                    }}
                />

                <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-10 text-center">

                    {/* Divisor de entrada */}
                    <FadeIn className="mb-12 md:mb-16 flex items-center justify-center gap-3">
                        <div
                            className="h-px w-6"
                            style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4))' }}
                        />
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--dorado)', opacity: 0.35 }} />
                        <div
                            className="h-px w-6"
                            style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }}
                        />
                    </FadeIn>

                    {/* Cita */}
                    <FadeIn delay={0.1}>
                        <p className="font-editorial italic text-lg sm:text-xl md:text-2xl text-[var(--dorado-claro)] leading-relaxed mb-10" style={{ opacity: 0.85 }}>
                            &ldquo;Si sientes que el mundo necesita una relación más madura,
                            <br className="hidden md:block" />
                            más elegante y más responsable con el cannabis&hellip;&rdquo;
                        </p>
                    </FadeIn>

                    {/* Frase de cierre */}
                    <FadeInClimax delay={0.2}>
                        <p className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[var(--texto-claro)] leading-tight">
                            Ya eres parte de GANANDA.
                        </p>
                    </FadeInClimax>

                    {/* Bienvenidos */}
                    <FadeIn delay={0.35}>
                        <p className="label-caps text-[var(--dorado)] tracking-[0.5em] mt-8 text-[10px]">
                            Bienvenidos.
                        </p>
                    </FadeIn>

                    {/* CTA */}
                    <FadeIn delay={0.45} className="mt-16 md:mt-20">
                        <div className="flex flex-col items-center gap-6">
                            <Link
                                href="/#contacto"
                                className="btn-anima text-xs tracking-[0.15em]"
                            >
                                Ser parte
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
