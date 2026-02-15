
import Image from 'next/image'
import { Award, Users, Heart, Target } from 'lucide-react'

export const metadata = {
    title: 'À propos',
    description: 'Découvrez l\'histoire et les valeurs du Cabinet Médical Ubuntu.',
}

export default function AboutPage() {
    const team = [
        {
            name: "Dr. Moussa Traoré",
            role: "Médecin Généraliste",
            desc: "Expert en santé publique, 15 ans d'expérience au CHU Gabriel Touré.",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Dr. Aminata Diallo",
            role: "Pédiatre",
            desc: "Spécialiste de la nutrition infantile et du suivi vaccinal.",
            image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Dr. Oumar Koné",
            role: "Cardiologue",
            desc: "Ancien interne des Hôpitaux de Bamako, spécialiste de l'hypertension.",
            image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Fatoumata Sidibé",
            role: "Infirmière Major",
            desc: "Responsable des soins infirmiers et de l'accueil des patients.",
            image: "https://images.unsplash.com/photo-1576091160550-2187d80aeff2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
    ]

    return (
        <div className="container py-20 px-4 md:px-6">
            {/* Hero / Intro */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-20">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Notre Histoire & Nos Valeurs</h1>
                <p className="max-w-[700px] text-gray-500 md:text-lg">
                    Le Cabinet Médical Ubuntu est né d&apos;une volonté simple : offrir des soins de qualité à Bamako en remettant l&apos;humain au cœur du processus.
                </p>
            </div>

            {/* Values */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-24">
                {[
                    { title: "Humanité", icon: Heart, desc: "Chaque patient est unique et mérite une écoute bienveillante." },
                    { title: "Excellence", icon: Award, desc: "Des soins aux standards internationaux." },
                    { title: "Proximité", icon: Users, desc: "Un cabinet ancré à Doumanzana, accessible à tous." },
                    { title: "Innovation", icon: Target, desc: "Technologies modernes adaptées à nos besoins locaux." },
                ].map((val, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center space-y-2">
                        <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-2">
                            <val.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">{val.title}</h3>
                        <p className="text-gray-500 font-light">{val.desc}</p>
                    </div>
                ))}
            </div>

            {/* Team */}
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter">Notre Équipe à Bamako</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Des professionnels de santé maliens qualifiés et dévoués à votre bien-être.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {team.map((member, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100">
                            <div className="aspect-[4/5] w-full overflow-hidden relative bg-slate-100">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    width={400}
                                    height={500}
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-4 relative">
                                <h3 className="font-bold text-lg text-slate-900">{member.name}</h3>
                                <p className="text-sky-600 text-sm font-bold uppercase tracking-wider mb-2">{member.role}</p>
                                <p className="text-slate-500 text-sm leading-snug">{member.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
