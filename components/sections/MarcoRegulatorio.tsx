'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Plus } from 'lucide-react'

export default function MarcoRegulatorio() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [abierto, setAbierto] = useState(false)

    return (
        <section
            id="regulatorio"
            className="section-padding relative overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #0d1f15 0%, #111f18 50%, #0d1f15 100%)',
            }}
        >
            {/* Orbe dorado sutil */}
            <div
                className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />

            {/* Patrón de fondo */}
            <div
                className="absolute inset-0 pointer-events-none pattern-celular"
                style={{ opacity: 0.25 }}
            />

            <div ref={ref} className="container-anima relative z-10">
                <div className="max-w-3xl mx-auto text-center">

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="flex items-center justify-center gap-4 mb-6"
                    >
                        <span className="h-px w-8 bg-[var(--dorado)]" style={{ opacity: 0.4 }} />
                        <span className="label-caps text-[var(--dorado)] tracking-[0.3em] text-xs">
                            Marco Regulatorio
                        </span>
                        <span className="h-px w-8 bg-[var(--dorado)]" style={{ opacity: 0.4 }} />
                    </motion.div>

                    {/* Ícono */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="flex justify-center mb-8"
                    >
                        <div
                            className="p-4 rounded-full"
                            style={{
                                background: 'rgba(201,168,76,0.07)',
                                border: '1px solid rgba(201,168,76,0.2)',
                            }}
                        >
                            <ShieldCheck size={28} style={{ color: 'var(--dorado)', opacity: 0.85 }} />
                        </div>
                    </motion.div>

                    {/* Título */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="heading-lg text-[var(--texto-claro)] mb-6"
                    >
                        Operación bajo marcos
                        <br />
                        <span className="text-gradient-dorado">regulatorios aprobados</span>
                    </motion.h2>

                    {/* Bajada */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="body-lg text-[var(--texto-gris)] mb-12"
                    >
                        GANANDA-Pro desarrolla sus actividades en cumplimiento con la normativa vigente en Argentina, bajo esquemas regulatorios que permiten el desarrollo controlado y profesional del cannabis.
                    </motion.p>

                    {/* Acordeón regulatorio */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <button
                            onClick={() => setAbierto(!abierto)}
                            className="w-full text-left px-6 py-5 flex items-center justify-between group transition-colors duration-300"
                            style={{
                                border: '1px solid rgba(201,168,76,0.2)',
                                background: abierto ? 'rgba(201,168,76,0.05)' : 'rgba(13,31,21,0.5)',
                            }}
                        >
                            <span className="label-caps text-[var(--dorado)] tracking-widest text-xs">
                                Detalle de habilitación y cumplimiento normativo
                            </span>
                            <motion.span
                                animate={{ rotate: abierto ? 45 : 0 }}
                                transition={{ duration: 0.25 }}
                                className="flex-shrink-0 ml-4"
                                style={{ color: 'var(--dorado)', opacity: 0.7 }}
                            >
                                <Plus size={18} />
                            </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                            {abierto && (
                                <motion.div
                                    key="contenido"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <div
                                        className="px-6 py-6 text-left"
                                        style={{
                                            border: '1px solid rgba(201,168,76,0.2)',
                                            borderTop: 'none',
                                            background: 'rgba(13,31,21,0.5)',
                                        }}
                                    >
                                        <div
                                            className="w-8 h-px mb-5"
                                            style={{ background: 'linear-gradient(90deg, var(--dorado), transparent)', opacity: 0.5 }}
                                        />
                                        <p className="text-[var(--texto-gris)] text-sm md:text-base leading-relaxed">
                                            El proyecto se encuentra inscripto y aprobado dentro de los programas habilitados por el Ministerio de Salud para el desarrollo de cannabis, cumpliendo con los requisitos técnicos, operativos y legales establecidos por los organismos correspondientes. Nuestra estructura integra procesos productivos, científicos y regulatorios que garantizan un desarrollo alineado con los estándares exigidos para esta industria.
                                        </p>
                                        <div
                                            className="w-full h-px mt-5"
                                            style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
