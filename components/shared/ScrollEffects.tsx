'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollEffects() {
    const [scrollProgress, setScrollProgress] = useState(0)
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Progress Bar Logic
            const totalScroll = document.documentElement.scrollTop
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scroll = `${totalScroll / windowHeight}`
            setScrollProgress(Number(scroll))

            // Back to Top Logic
            if (totalScroll > 400) {
                setShowScrollTop(true)
            } else {
                setShowScrollTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            {/* Scroll Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 z-[100] transition-all duration-100 ease-out shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                style={{ width: `${scrollProgress * 100}%` }}
            />

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-[90] p-3 rounded-full bg-slate-900/80 backdrop-blur-sm text-white shadow-lg border border-slate-700 hover:bg-sky-600 hover:border-sky-500 transition-all duration-500 transform ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
                aria-label="Retour en haut"
            >
                <ArrowUp className="h-6 w-6" />
            </button>
        </>
    )
}
