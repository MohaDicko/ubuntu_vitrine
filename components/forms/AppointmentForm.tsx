
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
            const response = await fetch('/api/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || 'Une erreur est survenue')
            }

            setSuccess(true)
            // Réinitialiser le formulaire
            event.currentTarget.reset()
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erreur lors de l\'envoi')
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

    return (
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Nom complet <span className="text-red-500">*</span></label>
                    <Input id="name" name="name" placeholder="Ex: Moussa Diarra" required className="h-12 bg-slate-50 border-slate-200 focus:border-sky-500 focus:ring-sky-500/20" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700 ml-1">Téléphone <span className="text-red-500">*</span></label>
                    <Input id="phone" name="phone" type="tel" placeholder="ex: 75 12 34 56" required className="h-12 bg-slate-50 border-slate-200 focus:border-sky-500 focus:ring-sky-500/20" />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Email (Optionnel)</label>
                <Input id="email" name="email" type="email" placeholder="votre@email.com" className="h-12 bg-slate-50 border-slate-200 focus:border-sky-500 focus:ring-sky-500/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-semibold text-slate-700 ml-1">Service souhaité <span className="text-red-500">*</span></label>
                    <select
                        id="service"
                        name="service"
                        className="flex h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/20 focus-visible:border-sky-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all font-medium text-slate-700"
                        required
                    >
                        <option value="">Sélectionner...</option>
                        <option value="Consultation Générale">Médecine Générale</option>
                        <option value="Pédiatrie">Pédiatrie</option>
                        <option value="Cardiologie">Cardiologie</option>
                        <option value="Gynécologie">Gynécologie</option>
                        <option value="Laboratoire">Analyses Médicales</option>
                        <option value="Autre">Autre demande</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-semibold text-slate-700 ml-1">Date souhaitée <span className="text-red-500">*</span></label>
                    <Input id="date" name="date" type="date" required className="h-12 bg-slate-50 border-slate-200 focus:border-sky-500 focus:ring-sky-500/20 text-slate-700" />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="time" className="text-sm font-semibold text-slate-700 ml-1">Heure souhaitée <span className="text-red-500">*</span></label>
                <Input id="time" name="time" type="time" required className="h-12 bg-slate-50 border-slate-200 focus:border-sky-500 focus:ring-sky-500/20 text-slate-700" />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">Message ou Motif (Facultatif)</label>
                <Textarea id="message" name="message" placeholder="Précisez vos symptômes ou vos disponibilités..." className="min-h-[120px] bg-slate-50 border-slate-200 focus:border-sky-500 focus:ring-sky-500/20 resize-none text-slate-700 leading-relaxed" />
            </div>

            <Button type="submit" className="w-full h-14 text-lg font-bold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-lg shadow-sky-500/20 transition-all active:scale-[0.98]" disabled={isLoading}>
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Envoi en cours...
                    </>
                ) : (
                    "Confirmer la demande"
                )}
            </Button>

            <p className="text-center text-xs text-slate-400 mt-4">
                * Champs obligatoires. Nous vous rappellerons pour confirmer l&apos;heure exacte.
            </p>
        </form>
    )
}
