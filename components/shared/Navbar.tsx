"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    // Gérer le scroll pour l'effet de transparence
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Fermer le menu lors du changement de route
    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    // Empêcher le scroll quand le menu est ouvert
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [isMenuOpen])

    const navLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'À propos', href: '/#about' },
        { name: 'Services', href: '/#services' },
        { name: 'Équipe', href: '/#team' },
        { name: 'Contact', href: '/#contact' },
    ]

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                    scrolled
                        ? "bg-white/90 backdrop-blur-md border-slate-200 shadow-sm py-2"
                        : "bg-transparent border-transparent py-4"
                )}
            >
                <div className="container flex items-center justify-between px-4 md:px-8">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3 relative z-50 group">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                <path d="M12 7v5" />
                                <path d="M9.5 9.5h5" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className={cn(
                                "text-xl font-bold leading-none tracking-tight transition-colors",
                                scrolled ? "text-slate-800" : "text-slate-800"
                            )}>
                                Cabinet <span className="text-sky-600">Ubuntu</span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500">Santé & Humanité</span>
                        </div>
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors relative group py-2"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 h-0.5 bg-sky-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* ACTIONS & MOBILE TOGGLE */}
                    <div className="flex items-center gap-4 z-50">
                        <Link href="/#rendez-vous" className="hidden sm:block">
                            <Button className="btn-premium rounded-full px-6 text-sm font-bold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40">
                                Prendre RDV
                            </Button>
                        </Link>

                        {/* Hamburger Button - Visible only on mobile */}
                        <button
                            className="md:hidden p-2 text-slate-700 hover:text-sky-600 transition-colors focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                            aria-expanded={isMenuOpen}
                        >
                            <div className="relative w-6 h-6 flex items-center justify-center">
                                <span className={cn(
                                    "absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out",
                                    isMenuOpen ? "rotate-45 delay-75" : "-translate-y-2"
                                )}></span>
                                <span className={cn(
                                    "absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out",
                                    isMenuOpen ? "opacity-0" : "opacity-100"
                                )}></span>
                                <span className={cn(
                                    "absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out",
                                    isMenuOpen ? "-rotate-45 delay-75" : "translate-y-2"
                                )}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU OVERLAY (Hors du Header pour éviter les bugs de stack context) */}
            <div
                className={cn(
                    "fixed inset-0 z-[100] md:hidden transition-all duration-300 ease-in-out",
                    isMenuOpen ? "pointer-events-auto" : "pointer-events-none delay-300"
                )}
            >
                {/* Backdrop Blur */}
                <div
                    className={cn(
                        "absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300",
                        isMenuOpen ? "opacity-100" : "opacity-0"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div
                    className={cn(
                        "absolute top-0 right-0 bottom-0 w-[85%] max-w-[300px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col z-[101]",
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    )}
                >
                    <div className="flex flex-col h-full bg-gradient-to-b from-white to-slate-50">
                        {/* Header du menu */}
                        <div className="p-6 border-b flex justify-between items-center">
                            <span className="font-bold text-lg text-slate-800">Menu</span>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 -mr-2 text-slate-500 hover:text-red-500 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Liens de navigation */}
                        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={cn(
                                        "flex items-center justify-between p-4 rounded-xl transition-all",
                                        pathname === item.href
                                            ? "bg-sky-50 text-sky-600 font-bold"
                                            : "text-slate-600 font-medium hover:bg-slate-50 hover:text-sky-600 hover:translate-x-1"
                                    )}
                                >
                                    {item.name}
                                    <ChevronRight size={16} className="text-slate-300" />
                                </Link>
                            ))}
                        </div>

                        {/* Footer du menu */}
                        <div className="p-6 border-t bg-white space-y-4">
                            <Link href="/#rendez-vous" onClick={() => setIsMenuOpen(false)} className="block w-full">
                                <Button className="w-full btn-premium rounded-xl shadow-lg shadow-sky-500/20">
                                    Prendre Rendez-vous
                                </Button>
                            </Link>

                            <div className="text-center">
                                <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">Cabinet Médical Ubuntu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
