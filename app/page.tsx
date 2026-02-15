"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { AppointmentForm } from '@/components/forms/AppointmentForm'
import { ArrowRight, Stethoscope, HeartPulse, Clock, MapPin, Microscope, Activity, User, Baby, Phone } from 'lucide-react'

// Utiliser des images d'environnement médical (équipements, clinique) - pas de personnes
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=1000&fit=crop" // Équipement médical moderne
const TEAM_IMAGE_URL = "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&h=800&fit=crop" // Salle d'hôpital moderne

export default function Home() {
  const team = [
    { name: "Dr. Safiatou Traoré", role: "Médecin Généraliste", desc: "Fondatrice et Gérante du cabinet. Elle assure une prise en charge globale et humaine de chaque patient.", img: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&h=400&fit=crop&crop=faces" },
    { name: "Dr. Djéneba Diarra", role: "Médecin Généraliste", desc: "Consultations de médecine générale, suivi des pathologies chroniques et urgences.", img: "https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=400&h=400&fit=crop&crop=faces" },
    { name: "Dr. Sanogo Drissa", role: "Échographiste", desc: "Expert en échographie obstétricale, abdominale et pelvienne.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces" },
    { name: "Souleymane Tangara", role: "Biologiste", desc: "Responsable du laboratoire d'analyses médicales et de la biologie.", img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=400&fit=crop&crop=faces" },
    { name: "Fatoumata Koné", role: "Sage-Femme", desc: "Suivi de grossesse, consultations prénatales et accompagnement à la naissance.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=faces" },
    { name: "Assitan Sogodogo", role: "Infirmière d'État", desc: "Soins infirmiers, prélèvements et suivi post-opératoire avec douceur et professionnalisme.", img: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=400&fit=crop&crop=faces" },
    { name: "Abdoul Aziz Touré", role: "Infirmier", desc: "Urgences, soins techniques et assistance médicale polyvalente.", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=faces" },
    { name: "Mamou Ibranco", role: "Aide-Soignante", desc: "Assistance aux soins, confort des patients et hygiène hospitalière.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces" },
  ]

  const services = [
    {
      title: "Médecine Générale",
      icon: Stethoscope,
      desc: "Consultations complètes pour toute la famille. Diagnostic précis et suivi personnalisé.",
      color: "text-sky-600",
      bg: "bg-sky-50",
      gradient: "group-hover:from-sky-500 group-hover:to-blue-600"
    },
    {
      title: "Pédiatrie",
      icon: Baby,
      desc: "Suivi de croissance, vaccination et prise en charge des pathologies infantiles.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      gradient: "group-hover:from-amber-400 group-hover:to-orange-500"
    },
    {
      title: "Cardiologie",
      icon: HeartPulse,
      desc: "Dépistage hypertension, ECG et échocardiographie doppler.",
      color: "text-rose-600",
      bg: "bg-rose-50",
      gradient: "group-hover:from-rose-500 group-hover:to-red-600"
    },
    {
      title: "Laboratoire",
      icon: Microscope,
      desc: "Bilan sanguin complet et analyses parasitologiques sur place.",
      color: "text-purple-600",
      bg: "bg-purple-50",
      gradient: "group-hover:from-purple-500 group-hover:to-indigo-600"
    },
    {
      title: "Petite Chirurgie",
      icon: Activity,
      desc: "Sutures, soins de plaies et interventions mineures.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      gradient: "group-hover:from-emerald-400 group-hover:to-green-600"
    },
    {
      title: "Gynécologie",
      icon: User,
      desc: "Consultations prénatales et suivi gynécologique de routine.",
      color: "text-pink-600",
      bg: "bg-pink-50",
      gradient: "group-hover:from-pink-400 group-hover:to-rose-500"
    },
  ]

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* 
        ================================================================================
        EMERGENCY BANNER
        ================================================================================
      */}


      {/* 
        ================================================================================
        HERO SECTION (ID="hero")
        ================================================================================
      */}
      <section id="hero" className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-mesh-gradient"></div>

        {/* Animated Blobs */}
        <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-sky-400/30 to-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-indigo-400/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-pink-400/30 to-rose-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        <div className="container px-4 md:px-6 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

            {/* Colonne Gauche: Texte */}
            <div className="flex flex-col justify-center space-y-10 animate-slide-up">
              {/* Badge Premium */}
              <div className="inline-flex items-center space-x-3 glass-card px-5 py-2.5 w-fit rounded-full shadow-premium animate-scale-in">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-bold text-slate-700 tracking-wide">Disponible 24h/24 • 7j/7</span>
              </div>

              {/* Titre Principal */}
              <div className="space-y-6 animate-slide-up animation-delay-200">
                <h1 className="text-5xl font-black tracking-tight sm:text-6xl xl:text-7xl text-slate-900 leading-[1.05]">
                  Votre santé,{' '}
                  <br className="hidden sm:block" />
                  notre{' '}
                  <span className="relative inline-block">
                    <span className="text-gradient-premium animate-gradient-x">
                      priorité absolue
                    </span>
                    <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                      <path d="M0 4C50 4 50 8 100 4C150 0 150 4 200 4" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#0ea5e9" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h1>

                <p className="max-w-[600px] text-slate-600 text-xl md:text-2xl font-light leading-relaxed">
                  L'excellence médicale au service de l'humain. Une prise en charge{' '}
                  <span className="font-semibold text-sky-600">moderne</span>,{' '}
                  <span className="font-semibold text-indigo-600">empathique</span> et{' '}
                  <span className="font-semibold text-blue-600">accessible</span> à tous.
                </p>
              </div>

              {/* Statistiques Rapides */}
              <div className="flex flex-wrap gap-8 animate-slide-up animation-delay-400">
                {[
                  { number: "1200+", label: "Patients", icon: "👥" },
                  { number: "5 ans", label: "D'expérience", icon: "⭐" },
                  { number: "24/7", label: "Disponibilité", icon: "🏥" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-black text-slate-900">{stat.number}</div>
                      <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up animation-delay-600">
                <Link href="#rendez-vous" className="group">
                  <button className="relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white font-bold px-10 py-5 rounded-2xl shadow-2xl shadow-sky-500/40 hover:shadow-sky-500/60 transition-all duration-300 hover:scale-105 active:scale-95">
                    <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                      Prendre Rendez-vous
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </button>
                </Link>

                <Link href="#services">
                  <button className="w-full sm:w-auto glass-card px-10 py-5 rounded-2xl font-bold text-slate-700 hover:text-sky-600 transition-all duration-300 hover:scale-105 active:scale-95 shadow-premium hover:shadow-premium-lg text-lg">
                    Nos Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Colonne Droite: Visuel Premium (Masqué sur mobile/tablette pour perf et UX) */}
            <div className="relative hidden lg:block animate-slide-in-right animation-delay-400">
              {/* Floating Card - Patients Satisfaits */}
              <div className="absolute top-10 -right-10 z-30 glass-card p-5 rounded-3xl shadow-premium-lg animate-float">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full ring-4 ring-white flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100 shadow-lg">
                        <Image src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="avatar" className="w-full h-full object-cover" width={100} height={100} unoptimized />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-sm font-black px-4 py-1.5 rounded-full shadow-lg">
                      +1.2k
                    </div>
                    <div className="text-xs text-slate-600 font-semibold mt-1">Patients satisfaits</div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Rating */}
              <div className="absolute bottom-10 -left-10 z-30 glass-card p-5 rounded-3xl shadow-premium-lg animate-float animation-delay-2000">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">5.0</div>
                    <div className="text-xs text-slate-600 font-semibold">Excellence</div>
                  </div>
                </div>
              </div>

              {/* Image Principale avec effet de profondeur */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-500/30 border-8 border-white group card-hover-glow">
                <div className="absolute inset-0 bg-gradient-to-t from-sky-600/20 via-transparent to-transparent z-10 group-hover:from-sky-600/10 transition-all duration-700"></div>
                <Image
                  src={HERO_IMAGE_URL}
                  alt="Cabinet Médical Ubuntu - Équipements modernes"
                  className="w-full h-auto object-cover aspect-[4/5] scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                  width={800}
                  height={1000}
                  priority
                  unoptimized
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ================================================================================
        SERVICES SECTION (ID="services")
        ================================================================================
      */}
      <section id="services" className="py-24 bg-white relative">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-sky-600 font-bold tracking-wider uppercase text-sm bg-sky-50 px-3 py-1 rounded-full">Nos Expertises</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Une approche complète</h2>
            <p className="text-xl text-slate-500 font-light">
              Nous combinons technologie médicale et suivi personnalisé pour les patients de Bamako.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div key={idx} className="group relative bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-slate-50 group-hover:bg-white/20 rounded-full transition-colors duration-500"></div>

                <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} group-hover:bg-white/20 group-hover:text-white flex items-center justify-center mb-8 shadow-sm transition-all duration-500`}>
                  <service.icon className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white mb-4 transition-colors duration-500">{service.title}</h3>
                <p className="text-slate-500 group-hover:text-white/90 leading-relaxed transition-colors duration-500 text-lg">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* 
        ================================================================================
        STATISTICS SECTION
        ================================================================================
      */}
      < section className="py-20 bg-gradient-to-br from-sky-600 to-indigo-600 text-white relative overflow-hidden" >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "1200", suffix: "+", label: "Patients Satisfaits", icon: "👥" },
              { number: "5", suffix: " ans", label: "D'Expérience", icon: "🏥" },
              { number: "8", suffix: "", label: "Professionnels", icon: "👨‍⚕️" },
              { number: "24", suffix: "/7", label: "Disponibilité", icon: "⏰" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-extrabold mb-2 tabular-nums">
                  {stat.number}<span className="text-sky-200">{stat.suffix}</span>
                </div>
                <div className="text-sky-100 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* 
        ================================================================================
        ABOUT / VALUES / TEAM SECTION (ID="about" & "team")
        ================================================================================
      */}
      < section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden" >
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image src={TEAM_IMAGE_URL} alt="Équipe Médicale" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" width={1200} height={800} unoptimized />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-orange-500 text-white p-8 rounded-full shadow-2xl hidden md:flex flex-col items-center justify-center w-40 h-40 animate-float">
                <span className="text-3xl font-bold">Ubuntu</span>
                <span className="text-xs uppercase tracking-widest mt-1 opacity-90">Philosophy</span>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                L&apos;Humain au Cœur du Soin
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                <span className="text-orange-400 font-bold">&ldquo;Je suis parce que nous sommes.&rdquo;</span>
                <br /><br />
                Au Cabinet Médical Ubuntu, nous croyons que la santé ne se limite pas à l&apos;absence de maladie. C&apos;est un état complet de bien-être physique, mental et social.
              </p>
            </div>
          </div>

          <div id="team" className="pt-12">
            <h3 className="text-3xl font-bold text-center mb-16">Notre Équipe à Bamako</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-sky-500 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {member.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-lg mb-0.5 truncate">{member.name}</h4>
                      <p className="text-sky-400 text-xs font-medium uppercase tracking-wide">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* 
        ================================================================================
        WHY CHOOSE US SECTION
        ================================================================================
      */}
      < section className="py-24 bg-white relative overflow-hidden" >
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-30 -mr-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30 -ml-48"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-sky-600 font-bold tracking-wider uppercase text-sm bg-sky-50 px-3 py-1 rounded-full">Nos Avantages</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Pourquoi Choisir Ubuntu ?</h2>
            <p className="text-xl text-slate-500 font-light">
              Nous nous engageons à vous offrir les meilleurs soins de santé à Bamako
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🏥",
                title: "Équipements Modernes",
                description: "Matériel médical de pointe pour des diagnostics précis et des soins de qualité",
                color: "from-sky-500 to-blue-600"
              },
              {
                icon: "👨‍⚕️",
                title: "Équipe Qualifiée",
                description: "Médecins et personnel soignant expérimentés et dévoués à votre bien-être",
                color: "from-indigo-500 to-purple-600"
              },
              {
                icon: "💰",
                title: "Tarifs Transparents",
                description: "Prix clairs et affichés, sans surprise. Plusieurs moyens de paiement acceptés",
                color: "from-emerald-500 to-green-600"
              },
              {
                icon: "⏰",
                title: "Disponibilité 24/7",
                description: "Ouvert jour et nuit pour répondre à toutes vos urgences médicales",
                color: "from-rose-500 to-red-600"
              },
            ].map((advantage, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 from-sky-500 to-indigo-600"></div>
                <div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-sky-200 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${advantage.color} flex items-center justify-center text-3xl mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{advantage.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-1">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link href="#rendez-vous">
              <Button size="lg" className="h-14 px-8 text-lg font-semibold rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 shadow-xl shadow-sky-500/20">
                Prendre Rendez-vous Maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section >

      {/* 
        ================================================================================
        RENDEZ-VOUS SECTION (ID="rendez-vous")
        ================================================================================
      */}

      {/* 
        ================================================================================
        TESTIMONIALS SECTION (ID="temoignages")
        ================================================================================
      */}
      <section id="temoignages" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-30 -ml-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30 -mr-48"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-sky-600 font-bold tracking-wider uppercase text-sm bg-sky-50 px-3 py-1 rounded-full">Témoignages</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Ce que disent nos patients</h2>
            <p className="text-xl text-slate-500 font-light">
              Votre satisfaction et votre bien-être sont notre priorité absolue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Aminata K.",
                role: "Mère de famille",
                rating: 5,
                text: "Excellent accueil et professionnalisme. Dr Traoré a pris le temps de m'écouter et de m'expliquer mon traitement. Je recommande vivement !",
                date: "Il y a 2 semaines"
              },
              {
                name: "Ibrahim S.",
                role: "Patient régulier",
                rating: 5,
                text: "Le cabinet est propre, moderne et l'équipe est très compétente. Les analyses de laboratoire sont rapides et fiables.",
                date: "Il y a 1 mois"
              },
              {
                name: "Fatoumata D.",
                role: "Patiente",
                rating: 5,
                text: "Merci à toute l'équipe pour leur gentillesse et leur disponibilité 24h/24. C'est rassurant de savoir qu'on peut compter sur eux.",
                date: "Il y a 3 semaines"
              },
              {
                name: "Moussa T.",
                role: "Patient",
                rating: 5,
                text: "Service d'échographie impeccable. Dr Sanogo est très professionnel et explique tout en détail. Très satisfait !",
                date: "Il y a 1 semaine"
              },
              {
                name: "Mariam B.",
                role: "Maman",
                rating: 5,
                text: "Excellente prise en charge pour mon bébé. L'équipe de pédiatrie est douce et rassurante. Merci infiniment !",
                date: "Il y a 2 mois"
              },
              {
                name: "Seydou C.",
                role: "Patient",
                rating: 5,
                text: "Cabinet moderne avec du matériel de qualité. Les consultations sont rapides et efficaces. Je recommande à 100% !",
                date: "Il y a 3 jours"
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-sky-200 transition-all duration-300 group">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                  <p className="text-xs text-slate-400">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-slate-600 mb-4">Vous aussi, partagez votre expérience !</p>
            <a
              href="https://wa.me/22375122525?text=Bonjour,%20je%20souhaite%20laisser%20un%20avis%20sur%20le%20Cabinet%20Ubuntu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full transition-colors shadow-lg shadow-sky-500/20"
            >
              Laisser un avis
            </a>
          </div>
        </div>
      </section>

      {/* 
        ================================================================================
        FAQ SECTION (ID="faq")
        ================================================================================
      */}
      <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-sky-600 font-bold tracking-wider uppercase text-sm bg-sky-100 px-3 py-1 rounded-full">FAQ</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Questions Fréquentes</h2>
            <p className="text-xl text-slate-500 font-light">
              Tout ce que vous devez savoir avant votre visite
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Quels sont vos horaires d'ouverture ?",
                answer: "Le Cabinet Médical Ubuntu est ouvert 24h/24 et 7j/7, y compris les jours fériés. Notre équipe est toujours disponible pour vous accueillir en cas d'urgence ou pour des consultations programmées."
              },
              {
                question: "Quels moyens de paiement acceptez-vous ?",
                answer: "Nous acceptons les paiements en espèces (FCFA), par Orange Money, Moov Money, et par carte bancaire. Les tarifs sont affichés à l'accueil et communiqués avant chaque consultation."
              },
              {
                question: "Dois-je prendre rendez-vous ?",
                answer: "Pour les consultations de routine, nous recommandons de prendre rendez-vous via notre formulaire en ligne ou par téléphone au +223 75 12 25 25. Pour les urgences, présentez-vous directement au cabinet sans rendez-vous."
              },
              {
                question: "Quels documents dois-je apporter ?",
                answer: "Apportez votre carte d'identité, votre carnet de santé (si disponible), vos anciennes ordonnances et résultats d'examens. Pour les enfants, pensez au carnet de vaccination."
              },
              {
                question: "Proposez-vous des analyses médicales sur place ?",
                answer: "Oui, notre laboratoire réalise des analyses sanguines, urinaires, parasitologiques et bien d'autres. Les résultats sont généralement disponibles dans les 24 à 48 heures selon le type d'analyse."
              },
              {
                question: "Faites-vous les échographies ?",
                answer: "Oui, Dr Sanogo Drissa, notre échographiste, réalise des échographies obstétricales, abdominales et pelviennes. Prenez rendez-vous pour ce service spécialisé."
              },
              {
                question: "Où êtes-vous situés ?",
                answer: "Nous sommes situés à Doumanzana, Rue 339, Porte 52, Bamako, Mali. Un plan d'accès est disponible en bas de cette page."
              },
              {
                question: "Puis-je annuler ou modifier mon rendez-vous ?",
                answer: "Oui, contactez-nous au +223 75 12 25 25 ou via WhatsApp au moins 2 heures avant votre rendez-vous pour toute modification ou annulation."
              },
            ].map((faq, index) => (
              <details key={index} className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-sky-300 transition-all duration-300 hover:shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-slate-900 pr-4">{faq.question}</h3>
                  <span className="text-sky-600 transition-transform group-open:rotate-180">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Vous avez d&apos;autres questions ?</p>
            <a
              href="https://wa.me/22375122525?text=Bonjour,%20j'ai%20une%20question%20concernant%20le%20Cabinet%20Ubuntu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Contactez-nous sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 
        ================================================================================
        RENDEZ-VOUS SECTION (ID="rendez-vous")
        ================================================================================
      */}
      <section id="rendez-vous" className="py-24 bg-sky-50 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Prendre Rendez-vous</h2>
            <p className="text-slate-600">Remplissez le formulaire ci-dessous. Notre secrétariat vous confirmera votre créneau dans les plus brefs délais.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="lg:col-span-2 bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>

              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold">Infos Pratiques</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-sky-400 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Adresse</p>
                      <p className="text-slate-400">Doumanzana, Rue 339, Porte 52<br />Bamako, Mali</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-sky-400 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Téléphone</p>
                      <p className="text-slate-400">+223 75 12 25 25</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-green-400 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Ouverture</p>
                      <p className="text-green-400 font-bold">24h/24 - 7j/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-slate-500">
                  En cas d&apos;urgence vitale, présentez-vous directement à la clinique sans rendez-vous.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 p-8 md:p-12">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* 
        ================================================================================
        CONTACT / FOOTER SECTION (ID="contact")
        ================================================================================
      */}
      <section id="contact" className="relative">
        <div className="h-96 w-full bg-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15585.57863486326!2d-7.9739055!3d12.6392357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51cd1a00c663a1%3A0x6b45e2365261883e!2sDoumanzana%2C%20Bamako%2C%20Mali!5e0!3m2!1sfr!2sml!4v1647526365406!5m2!1sfr!2sml"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(100%) invert(0%)" }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div >
  )
}
