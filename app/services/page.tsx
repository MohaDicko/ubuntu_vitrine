
import { Stethoscope, HeartPulse, Microscope, Activity, User, Syringe, Baby, FileHeart, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
    title: 'Nos Services | Cabinet Ubuntu',
    description: 'Découvrez les services médicaux de pointe proposés par le Cabinet Ubuntu à Bamako.',
}

export default function ServicesPage() {
    const services = [
        {
            title: "Médecine Générale",
            icon: Stethoscope,
            desc: "Consultations complètes pour toute la famille. Diagnostic précis, traitement adapté et suivi personnalisé.",
            price: "5 000 FCFA",
            color: "text-sky-500",
            bg: "bg-sky-50"
        },
        {
            title: "Pédiatrie & Néonatologie",
            icon: Baby,
            desc: "Suivi de croissance, vaccination et prise en charge des pathologies infantiles dès la naissance.",
            price: "7 500 FCFA",
            color: "text-orange-500",
            bg: "bg-orange-50"
        },
        {
            title: "Cardiologie",
            icon: HeartPulse,
            desc: "Dépistage hypertension, ECG de repos et d'effort, échocardiographie doppler couleur.",
            price: "15 000 FCFA",
            color: "text-red-500",
            bg: "bg-red-50"
        },
        {
            title: "Laboratoire d'Analyses",
            icon: Microscope,
            desc: "Bilan sanguin complet, hématologie, biochimie et parasitologie sur place avec résultats rapides.",
            price: "Selon analyse",
            color: "text-purple-500",
            bg: "bg-purple-50"
        },
        {
            title: "Petite Chirurgie",
            icon: Activity,
            desc: "Sutures, circoncisions, soins de plaies complexes et interventions mineures sous anesthésie locale.",
            price: "Sur devis",
            color: "text-green-500",
            bg: "bg-green-50"
        },
        {
            title: "Gynécologie & Suivi de Grossesse",
            icon: User,
            desc: "Consultations prénatales, échographies obstétricales et suivi gynécologique de routine.",
            price: "10 000 FCFA",
            color: "text-pink-500",
            bg: "bg-pink-50"
        },
        {
            title: "Vaccination Internationale",
            icon: Syringe,
            desc: "Vaccins obligatoires et recommandés (Fièvre jaune, Méningite, Hépatite B) avec carnet international.",
            price: "Variable",
            color: "text-yellow-500",
            bg: "bg-yellow-50"
        },
        {
            title: "Bilan de Santé",
            icon: FileHeart,
            desc: "Check-up complet annuel préventif pour entreprises et particuliers.",
            price: "Sur devis",
            color: "text-indigo-500",
            bg: "bg-indigo-50"
        },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            {/* Hero Section Simplifiée mais Moderne */}
            <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 filter blur-sm"></div>
                <div className="container relative z-10 px-4 md:px-6 text-center">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                        Expertise Médicale <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">À Votre Service</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-300">
                        Le Cabinet Ubuntu allie compétences techniques et valeurs humaines pour vous offrir le meilleur de la médecine moderne à Bamako.
                    </p>
                </div>
            </section>

            {/* Liste des Services */}
            <section className="py-20 -mt-10 relative z-20 container px-4 md:px-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {services.map((service, index) => (
                        <div key={index} className="group flex flex-col justify-between bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            <div>
                                <div className={`h-14 w-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">{service.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                    {service.desc}
                                </p>
                            </div>

                            <div>
                                <div className="border-t border-slate-50 pt-4 mb-4 flex items-center justify-between">
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tarif</span>
                                    <span className="font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-full text-xs">{service.price}</span>
                                </div>
                                <Link href="/rendez-vous" className="w-full">
                                    <Button className="w-full bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:text-sky-600 hover:border-sky-200 transition-all font-semibold shadow-sm">
                                        Réserver
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section Assurance / Qualité */}
            <section className="pb-20 container px-4 md:px-6">
                <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden text-center md:text-left">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-4 max-w-2xl">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-sky-200 font-semibold uppercase tracking-wider text-xs">
                                <Shield className="h-4 w-4" /> Qualité Garantie
                            </div>
                            <h2 className="text-3xl font-bold">Votre santé ne peut pas attendre</h2>
                            <p className="text-sky-100 text-lg">
                                En cas d&apos;urgence, notre équipe est disponible pour vous orienter. Nous collaborons avec les meilleurs spécialistes de Bamako pour une prise en charge complète.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 border-none px-8">Nous Contacter</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
