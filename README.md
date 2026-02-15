# 🏥 Cabinet Médical Ubuntu - Documentation Complète

## 📋 Vue d'Ensemble

Site web moderne et professionnel pour le Cabinet Médical Ubuntu à Bamako, Mali.
- **Type** : One-page application (SPA)
- **Framework** : Next.js 14 + TypeScript
- **Styling** : Tailwind CSS
- **Déploiement** : Prêt pour Vercel/Netlify

---

## ✨ Fonctionnalités Implémentées

### 1. **Navigation & Structure**
- ✅ Navbar sticky avec liens de navigation fluides
- ✅ Bannière d'urgence rouge (sticky top) avec numéro d'appel
- ✅ Footer complet avec informations de contact
- ✅ Bouton WhatsApp flottant (toujours visible)

### 2. **Sections du Site**

#### 🏠 **Hero Section**
- Image d'équipement médical
- Titre accrocheur avec gradient
- 2 CTA : "Prendre RDV" et "Nos Services"
- Badge "Ouvert 24h/24"
- Avatars de patients satisfaits

#### 🩺 **Services** (6 services)
- Médecine Générale
- Pédiatrie
- Cardiologie
- Laboratoire
- Petite Chirurgie
- Gynécologie
- Design : Cartes avec hover effects et gradients

#### 👥 **Équipe** (8 membres)
- Dr. Safiatou Traoré (Médecin Généraliste & Gérante)
- Dr. Djéneba Diarra (Médecin Généraliste)
- Dr. Sanogo Drissa (Échographiste)
- Dr. Souleymane Tangara (Biologiste)
- Fatoumata Koné (Sage-Femme)
- Assitan Sogodogo (Infirmière)
- Abdoul Aziz Touré (Infirmier)
- Mamou Ibranco (Aide-Soignante)
- Design : Cartes avec initiales (pas de photos)

#### ⭐ **Témoignages** (6 avis)
- Notation 5 étoiles
- Avis authentiques de patients
- Bouton "Laisser un avis" via WhatsApp

#### ❓ **FAQ** (8 questions)
- Accordéon interactif
- Questions sur horaires, paiements, RDV, etc.
- Bouton WhatsApp pour questions supplémentaires

#### 📅 **Formulaire de Rendez-vous**
- Champs : Nom, Téléphone, Email, Service, Date, Heure, Motif
- Validation complète
- Envoi d'email via Resend API
- Messages de succès/erreur
- Design : Split layout avec infos pratiques

#### 📍 **Contact & Carte**
- Google Maps intégré
- Adresse : Doumanzana, Rue 339, Porte 52, Bamako
- Téléphone : +223 75 12 25 25

### 3. **Optimisations Techniques**

#### 🔍 **SEO**
- Meta tags complets (title, description, keywords)
- Open Graph pour WhatsApp/Facebook
- Twitter Cards
- Mots-clés : "cabinet médical Bamako", "médecin Mali", etc.

#### 📱 **PWA (Progressive Web App)**
- Manifest.json configuré
- Installable sur mobile
- Icônes 192x192 et 512x512 (à créer)
- Raccourcis vers RDV et Contact
- Theme color : #0ea5e9

#### 📧 **Email (Resend)**
- API route : `/api/appointments`
- Envoi d'emails formatés
- Template HTML professionnel
- Configuration : `.env.local`

#### ✅ **Tests & CI/CD**
- Jest configuré
- GitHub Actions workflow
- Tests automatiques sur push

---

## 🚀 Prochaines Étapes

### Immédiat
1. ✅ Créer les icônes PWA (voir GUIDE_ICONES_PWA.md)
2. ✅ Configurer Resend pour les emails
3. ✅ Tester sur mobile

### Configuration Resend
```bash
# 1. Créer compte sur https://resend.com
# 2. Générer API key
# 3. Créer .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxx

# 4. Modifier l'email de destination dans:
# app/api/appointments/route.ts ligne 22
to: ['votre-email@gmail.com']
```

### Déploiement Vercel
```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Déployer
vercel

# 3. Ajouter les variables d'environnement
# Dans Vercel Dashboard > Settings > Environment Variables
```

---

## 📞 Informations de Contact

- **Adresse** : Doumanzana, Rue 339, Porte 52, Bamako, Mali
- **Téléphone** : +223 75 12 25 25
- **Horaires** : 24h/24, 7j/7
- **WhatsApp** : +223 75 12 25 25

---

**Bravo pour ce beau projet ! 🚀**
# ubuntu_vitrine
