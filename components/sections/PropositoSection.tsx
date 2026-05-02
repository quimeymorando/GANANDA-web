'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function PropositoSection({ frase, children }: { frase?: string; children?: React.ReactNode }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <section
            className="relative py-20 md:py-28 overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #060f09 0%, #0d1f15 50%, #060f09 100%)',
            }}
        >
            {/* Orbe dorado sutil */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 60%)',
                    filter: 'blur(60px)',
                }}
            />

            <div ref={ref} className="relative z-10 container-anima text-center">
                {/* Línea decorativa superior */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="flex items-center justify-center gap-3 mb-12 md:mb-16"
                >
                    <div
                        className="h-px w-8"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4))' }}
                    />
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--dorado)', opacity: 0.35 }} />
                    <div
                        className="h-px w-8"
                        style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }}
                    />
                </motion.div>

                {/* Frase */}
                <motion.p
                    initial={{ opacity: 0, y: 28 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-editorial italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[var(--texto-claro)] leading-[1.5] max-w-3xl mx-auto px-2"
                >
                    {children ?? frase}
                </motion.p>

                {/* Línea decorativa inferior */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex items-center justify-center gap-3 mt-12 md:mt-16"
                >
                    <div
                        className="h-px w-8"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4))' }}
                    />
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--dorado)', opacity: 0.35 }} />
                    <div
                        className="h-px w-8"
                        style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }}
                    />
                </motion.div>
            </div>
        </section>
    )
}
