import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 -left-40 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 -right-40 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="container px-4 md:px-6 relative z-10 text-center space-y-8">
                <div className="animate-fade-in relative">
                    <h1 className="text-9xl font-black text-slate-100 select-none">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-600 to-indigo-600 text-transparent bg-clip-text">
                            Page Introuvable
                        </span>
                    </div>
                </div>

                <p className="max-w-md mx-auto text-slate-600 text-lg">
                    Oups ! Il semble que vous ayez pris un chemin de traverse. Cette page n'existe pas ou a été déplacée.
                </p>

                <div className="flex justify-center pt-4">
                    <Link href="/">
                        <button className="btn-premium group flex items-center gap-2">
                            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                            Retour à l'accueil
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
