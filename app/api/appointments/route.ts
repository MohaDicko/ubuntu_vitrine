import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, date, time, reason } = body;

        // Validation basique
        if (!name || !phone || !date || !time) {
            return NextResponse.json(
                { error: 'Veuillez remplir tous les champs obligatoires' },
                { status: 400 }
            );
        }

        // Vérifier que Resend est configuré
        if (!resend) {
            return NextResponse.json(
                { error: 'Service d\'envoi d\'email non configuré. Veuillez contacter directement le cabinet.' },
                { status: 503 }
            );
        }

        // Envoi de l'email au cabinet
        const { error } = await resend.emails.send({
            from: 'Cabinet Ubuntu <onboarding@resend.dev>', // Vous changerez cela avec votre domaine
            to: ['contact@cabinet-ubuntu.com'], // Remplacez par votre email réel
            subject: `Nouvelle demande de RDV - ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">Nouvelle demande de rendez-vous</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Informations du patient</h3>
            <p><strong>Nom complet :</strong> ${name}</p>
            <p><strong>Téléphone :</strong> ${phone}</p>
            ${email ? `<p><strong>Email :</strong> ${email}</p>` : ''}
          </div>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Détails du rendez-vous</h3>
            <p><strong>Date souhaitée :</strong> ${new Date(date).toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}</p>
            <p><strong>Heure souhaitée :</strong> ${time}</p>
            ${reason ? `<p><strong>Motif :</strong> ${reason}</p>` : ''}
          </div>

          <p style="color: #64748b; font-size: 14px;">
            Merci de contacter le patient au <strong>${phone}</strong> pour confirmer le rendez-vous.
          </p>
        </div>
      `,
        });

        if (error) {
            console.error('Erreur Resend:', error);
            return NextResponse.json(
                { error: 'Erreur lors de l\'envoi de l\'email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Votre demande a été envoyée avec succès. Nous vous contacterons bientôt.'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Erreur serveur:', error);
        return NextResponse.json(
            { error: 'Une erreur est survenue. Veuillez réessayer.' },
            { status: 500 }
        );
    }
}
