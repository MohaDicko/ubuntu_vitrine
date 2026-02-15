
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="w-full bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-400">
            <div className="container px-4 md:px-8">

                {/* Grille Principale */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Colonne 1: Marque */}
                    <div className="space-y-6">
                        {/* Version Logo Sombre (Override styles inline pour le dark theme) */}
                        <div className="flex items-center gap-3 select-none">
                            <div className="bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl p-2 shadow-lg shadow-blue-500/10">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                    <path d="M12 7v5" />
                                    <path d="M9.5 9.5h5" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold leading-none tracking-tight text-white">
                                    Cabinet <span className="text-sky-400">Ubuntu</span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400">Santé & Humanité</span>
                            </div>
                        </div>

                        <p className="text-sm leading-relaxed max-w-xs">
                            Votre partenaire santé de confiance. Une approche humaine et moderne pour le bien-être de toute la famille.
                        </p>

                        <div className="flex gap-4 pt-2">
                            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <Link key={i} href="#" className="p-2 rounded-full bg-slate-800 hover:bg-sky-600 hover:text-white transition-all text-slate-400">
                                    <Icon className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Colonne 2: Liens Rapides */}
                    <div className="space-y-6">
                        <h4 className="text-base font-bold text-white uppercase tracking-wider">Navigation</h4>
                        <ul className="space-y-3 text-sm">
                            {['Accueil', 'À propos', 'Nos Services', 'Prendre Rendez-vous', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '-').replace('à', 'a').replace('nos-', '')}`} className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                                        <span className="h-1 w-1 rounded-full bg-slate-600 group-hover:bg-sky-400 transition-colors"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colonne 3: Contact */}
                    <div className="space-y-6">
                        <h4 className="text-base font-bold text-white uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                                <span>Doumanzana, Rue 339, Porte 52<br />Bamako, Mali</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-sky-500 shrink-0" />
                                <span>+223 75 12 25 25</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-sky-500 shrink-0" />
                                <span>contact@cabinet-ubuntu.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Colonne 4: Horaires */}
                    <div className="space-y-6">
                        <h4 className="text-base font-bold text-white uppercase tracking-wider">Horaires</h4>
                        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 space-y-3 text-sm">
                            <div className="flex items-center justify-between text-slate-300">
                                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-green-400" /> Ouverture</span>
                                <span className="font-bold text-green-400">24h/24 - 7j/7</span>
                            </div>
                            <div className="flex items-center justify-between text-slate-500 border-t border-slate-700 pt-3">
                                <span>Urgences</span>
                                <span className="font-semibold text-white">Non-stop</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-600">
                    <p>© {new Date().getFullYear()} Cabinet Médical Ubuntu. Tous droits réservés.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/mentions-legales" className="hover:text-sky-400 transition-colors">Mentions Légales</Link>
                        <Link href="/confidentialite" className="hover:text-sky-400 transition-colors">Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
