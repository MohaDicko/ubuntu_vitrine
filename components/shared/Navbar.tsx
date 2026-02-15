"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

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



    return (
        <header className="sticky top-0 z-50 w-full glass transition-all duration-300 border-b border-white/20 bg-white/80 backdrop-blur-md">
            <div className="container flex h-20 items-center justify-between px-4 md:px-8">

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-3 z-50 relative">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-xl shadow-blue-500/20">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                            <path d="M12 7v5" />
                            <path d="M9.5 9.5h5" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold leading-none tracking-tight text-slate-800">
                            Cabinet <span className="text-sky-600">Ubuntu</span>
                        </span>
                        <span className="text-[10px] font-medium uppercase tracking-widest text-orange-500">Santé & Humanité</span>
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { name: 'Accueil', href: '/#hero' },
                        { name: 'À propos', href: '/#about' },
                        { name: 'Services', href: '/#services' },
                        { name: 'Équipe', href: '/#team' },
                        { name: 'Contact', href: '/#contact' },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors relative group py-2"
                        >
                            {item.name}
                            <span className="absolute -bottom-0 left-0 h-0.5 bg-sky-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* ACTIONS & MOBILE TOGGLE */}
                <div className="flex items-center gap-4 z-50">
                    <Link href="/#rendez-vous" className="hidden sm:block">
                        <Button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-lg shadow-sky-500/30 rounded-full px-6 transition-transform hover:scale-105">
                            Prendre RDV
                        </Button>
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 hover:text-sky-600 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* MOBILE MENU OVERLAY */}
                <div className={cn(
                    "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                )}>
                    <nav className="flex flex-col items-center gap-6 text-xl">
                        {[
                            { name: 'Accueil', href: '/#hero' },
                            { name: 'À propos', href: '/#about' },
                            { name: 'Services', href: '/#services' },
                            { name: 'Équipe', href: '/#team' },
                            { name: 'Contact', href: '/#contact' },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={cn(
                                    "font-semibold transition-colors hover:text-sky-600",
                                    pathname === item.href ? "text-sky-600" : "text-slate-800"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <Link href="/#rendez-vous" onClick={() => setIsMenuOpen(false)} className="mt-4">
                        <Button size="lg" className="bg-gradient-to-r from-sky-500 to-blue-600 text-lg px-8 rounded-full shadow-xl">
                            Prendre Rendez-vous
                        </Button>
                    </Link>

                    {/* Decorative Elements for Menu */}
                    <div className="absolute bottom-10 text-center text-sm text-slate-400">
                        <p>Cabinet Médical Ubuntu</p>
                        <p>Bamako, Mali</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
