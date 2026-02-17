
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Check, Loader2 } from "lucide-react"

export function AppointmentForm() {
    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError('')

        const formData = new FormData(event.currentTarget)
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            service: formData.get('service') as string,
            date: formData.get('date') as string,
            time: formData.get('time') as string,
            reason: formData.get('message') as string,
        }

        try {
            // Simulation d'un délai pour l'UX
            await new Promise(resolve => setTimeout(resolve, 800))

            // Construction du lien WhatsApp
            const message = formatWhatsAppMessage(data)
            const phoneNumber = "22375122525" // Numéro de la clinique
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

            // Ouverture de WhatsApp dans un nouvel onglet
            window.open(whatsappUrl, '_blank')

            setSuccess(true)
            event.currentTarget.reset()
        } catch (err) {
            setError('Une erreur est survenue lors de la redirection WhatsApp.')
        } finally {
            setIsLoading(false)
        }
    }

    if (success) {
        return (
            <div className="bg-emerald-50 p-8 rounded-2xl text-center border border-emerald-100 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Check className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-800 mb-2">Demande Reçue !</h3>
                <p className="text-emerald-700 mb-6 max-w-sm mx-auto">
                    Merci de votre confiance. Notre secrétariat vous contactera dans les plus brefs délais pour confirmer l&apos;horaire.
                </p>
                <Button onClick={() => setSuccess(false)} variant="outline" className="mt-2 border-emerald-200 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 font-medium">
                    Nouvelle demande
                </Button>
            </div>
        )
    }

    // Fonction améliorée pour formatter le message WhatsApp
    const formatWhatsAppMessage = (data: any) => {
        return `*🏥 NOUVELLE DEMANDE DE RDV - CABINET UBUNTU*%0A
👤 *Patient :* ${data.name}
📞 *Téléphone :* ${data.phone}
🏥 *Service :* ${data.service}
📅 *Date souhaitée :* ${data.date}
⏰ *Heure :* ${data.time}
${data.reason ? `📝 *Motif :* ${data.reason}` : ''}%0A
_Merci de confirmer ce rendez-vous._`
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">

            {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Nom complet <span className="text-red-500">*</span></label>
                    <Input id="name" name="name" placeholder="Ex: Moussa Diarra" required className="h-12 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:border-sky-500 focus:ring-sky-500/20 dark:text-white" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Téléphone <span className="text-red-500">*</span></label>
                    <Input id="phone" name="phone" type="tel" placeholder="ex: 75 12 34 56" required className="h-12 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:border-sky-500 focus:ring-sky-500/20 dark:text-white" />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email (Optionnel)</label>
                <Input id="email" name="email" type="email" placeholder="votre@email.com" className="h-12 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:border-sky-500 focus:ring-sky-500/20 dark:text-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Service souhaité <span className="text-red-500">*</span></label>
                    <select
                        id="service"
                        name="service"
                        className="flex h-12 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/20 focus-visible:border-sky-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all font-medium text-slate-700 dark:text-slate-200"
                        required
                    >
                        <option value="" className="dark:bg-slate-900">Sélectionner...</option>
                        <option value="Consultation Générale" className="dark:bg-slate-900">Médecine Générale</option>
                        <option value="Pédiatrie" className="dark:bg-slate-900">Pédiatrie</option>
                        <option value="Cardiologie" className="dark:bg-slate-900">Cardiologie</option>
                        <option value="Gynécologie Obstétrique" className="dark:bg-slate-900">Gynécologie Obstétrique</option>
                        <option value="Psychiatrie" className="dark:bg-slate-900">Psychiatrie</option>
                        <option value="Neurologie" className="dark:bg-slate-900">Neurologie</option>
                        <option value="Urologie" className="dark:bg-slate-900">Urologie</option>
                        <option value="Néphrologie" className="dark:bg-slate-900">Néphrologie</option>
                        <option value="Laboratoire" className="dark:bg-slate-900">Analyses Médicales</option>
                        <option value="Autre" className="dark:bg-slate-900">Autre demande</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Date souhaitée <span className="text-red-500">*</span></label>
                    <Input id="date" name="date" type="date" required className="h-12 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:border-sky-500 focus:ring-sky-500/20 text-slate-700 dark:text-white" />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="time" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Heure souhaitée <span className="text-red-500">*</span></label>
                <Input id="time" name="time" type="time" required className="h-12 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:border-sky-500 focus:ring-sky-500/20 text-slate-700 dark:text-white" />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Message ou Motif (Facultatif)</label>
                <Textarea id="message" name="message" placeholder="Précisez vos symptômes ou vos disponibilités..." className="min-h-[120px] bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:border-sky-500 focus:ring-sky-500/20 resize-none text-slate-700 dark:text-white leading-relaxed" />
            </div>

            <Button type="submit" className="w-full h-14 text-lg font-bold bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg shadow-green-500/20 transition-all active:scale-[0.98]">
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Redirection WhatsApp...
                    </>
                ) : (
                    <span className="flex items-center justify-center gap-2">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        Confirmer via WhatsApp
                    </span>
                )}
            </Button>

            <p className="text-center text-xs text-slate-400 mt-4">
                * Champs obligatoires. Nous vous rappellerons pour confirmer l&apos;heure exacte.
            </p>
        </form>
    )
}
