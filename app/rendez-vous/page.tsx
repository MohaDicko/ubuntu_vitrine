
import { AppointmentForm } from '@/components/forms/AppointmentForm'
import { Calendar, CheckCircle2, ShieldCheck, Clock } from 'lucide-react'

export const metadata = {
    title: 'Prendre Rendez-vous | Cabinet Ubuntu',
    description: 'Réservez votre consultation médicale en quelques clics. Confidentiel et sécurisé.',
}

export default function AppointmentPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 lg:py-24">
            <div className="container px-4 md:px-6">
                <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

                    {/* Colonne Gauche: Contexte & Confiance */}
                    <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <h2 className="text-xl font-bold mb-6 text-slate-900">Pourquoi nous choisir ?</h2>
                            <ul className="space-y-4">
                                {[
                                    { text: "Médecins qualifiés et agréés", icon: ShieldCheck },
                                    { text: "Matériel médical moderne", icon: CheckCircle2 },
                                    { text: "Respect des horaires", icon: Clock },
                                    { text: "Confidentialité totale", icon: CheckCircle2 },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                                        <div className="mt-0.5 bg-sky-50 text-sky-600 p-1 rounded-full">
                                            <item.icon className="h-4 w-4" />
                                        </div>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl"></div>
                            <h3 className="font-bold text-lg mb-2 relative z-10">Besoin d&apos;aide ?</h3>
                            <p className="text-slate-300 text-sm mb-4 relative z-10">
                                Notre secrétariat est disponible pour vous guider.
                            </p>
                            <p className="font-bold text-xl text-sky-400 relative z-10">+223 75 12 25 25</p>
                        </div>
                    </div>

                    {/* Colonne Droite: Formulaire */}
                    <div className="lg:col-span-3 order-1 lg:order-2">
                        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                            <div className="bg-sky-50/50 border-b border-sky-100 p-8 text-center">
                                <div className="inline-flex items-center justify-center p-3 bg-white rounded-full text-sky-600 shadow-sm border border-sky-100 mb-4">
                                    <Calendar className="h-6 w-6" />
                                </div>
                                <h1 className="text-2xl font-bold text-slate-900 mb-2">Demande de Rendez-vous</h1>
                                <p className="text-slate-500 text-sm">
                                    Remplissez le formulaire ci-dessous. Nous vous confirmerons votre créneau par téléphone.
                                </p>
                            </div>

                            <div className="p-8">
                                <AppointmentForm />
                            </div>

                            <div className="bg-slate-50 px-8 py-4 text-center border-t border-slate-100">
                                <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
                                    <ShieldCheck className="h-3 w-3" /> Vos données sont sécurisées et strictement confidentielles.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
