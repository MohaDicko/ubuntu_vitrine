
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export const metadata = {
    title: 'Contact',
    description: 'Contactez le Cabinet Médical Ubuntu pour toute question ou prise de rendez-vous.',
}

export default function ContactPage() {
    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nous contacter</h1>
                <p className="max-w-[700px] text-gray-500 md:text-lg">
                    Notre équipe est à votre écoute.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold">Téléphone</h3>
                                <p className="text-gray-500">+223 75 12 25 25</p>
                                <p className="text-xs text-muted-foreground">Du Lundi au Samedi, 9h - 19h</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold">Email</h3>
                                <p className="text-gray-500">contact@cabinet-ubuntu.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold">Adresse</h3>
                                <p className="text-gray-500">Doumanzana, Rue 339, Porte 52<br />Bamako, Mali</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
                        <h2 className="text-xl font-bold mb-4">Envoyez-nous un message</h2>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Nom complet</label>
                                <Input id="name" placeholder="Votre nom" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" type="email" placeholder="votre@email.com" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Votre message</label>
                                <Textarea id="message" placeholder="Comment pouvons-nous vous aider ?" className="min-h-[120px]" required />
                            </div>
                            <Button type="submit" className="w-full">
                                Envoyer
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="h-[400px] w-full overflow-hidden rounded-xl border bg-muted shadow-sm relative">
                        {/* Fake Map Placeholder - Pointing to Bamako roughly */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124618.99595856719!2d-8.000306164213327!3d12.63923232145391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51cd0e4708ba53%3A0xf635581977712395!2sBamako%2C%20Mali!5e0!3m2!1sfr!2sfr!4v1703649624591!5m2!1sfr!2sfr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy">
                        </iframe>
                    </div>

                    <div className="rounded-xl bg-green-50 p-6 border border-green-100">
                        <div className="flex items-start gap-4">
                            <Clock className="h-6 w-6 text-green-600 mt-1" />
                            <div>
                                <h3 className="font-bold text-green-900 mb-2">Horaires d&apos;ouverture</h3>
                                <ul className="space-y-1 text-green-800 text-sm">
                                    <li className="flex justify-between w-48 font-bold text-lg"><span>Lundi - Dimanche :</span> <span className="text-green-600">24h/24</span></li>
                                    <li className="flex justify-between w-48 font-semibold text-green-700"><span>Urgences :</span> <span>Non-stop</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
