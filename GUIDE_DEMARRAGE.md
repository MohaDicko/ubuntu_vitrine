# 🚀 Guide de Démarrage Rapide - Cabinet Médical Ubuntu

## ✅ Statut Actuel
- ✅ Serveur de développement: **EN COURS** sur http://localhost:3000
- ✅ Dépendances: **INSTALLÉES** (704 packages)
- ✅ Build: **PRÊT**
- ✅ Tests: **CONFIGURÉS**

---

## 📋 Commandes Essentielles

### Développement
```bash
# Lancer le serveur de développement
npm run dev
# → Ouvre http://localhost:3000

# Lancer en mode watch (avec rechargement auto)
npm run dev
```

### Build & Production
```bash
# Créer un build de production
npm run build

# Lancer le serveur de production
npm start

# Vérifier le code (ESLint)
npm run lint
```

### Tests
```bash
# Lancer les tests
npm test

# Lancer les tests en mode watch
npm run test:watch
```

---

## 🌐 Accès au Site

### Local
- **URL**: http://localhost:3000
- **Port**: 3000 (par défaut)

### Navigation
- **Accueil**: http://localhost:3000
- **Services**: http://localhost:3000#services
- **Équipe**: http://localhost:3000#team
- **Témoignages**: http://localhost:3000#temoignages
- **FAQ**: http://localhost:3000#faq
- **Rendez-vous**: http://localhost:3000#rendez-vous
- **Contact**: http://localhost:3000#contact

---

## 📱 Tester sur Mobile

### Option 1: Réseau Local
```bash
# 1. Trouver votre IP locale
ipconfig
# Cherchez "Adresse IPv4" (ex: 192.168.1.100)

# 2. Sur votre téléphone, ouvrez:
http://192.168.1.100:3000
```

### Option 2: Tunnel ngrok
```bash
# 1. Installer ngrok
# https://ngrok.com/download

# 2. Créer un tunnel
ngrok http 3000

# 3. Utiliser l'URL fournie (ex: https://abc123.ngrok.io)
```

---

## ⚙️ Configuration Email (Resend)

### Étape 1: Créer un compte Resend
1. Aller sur https://resend.com
2. S'inscrire gratuitement
3. Vérifier votre email

### Étape 2: Générer une clé API
1. Dashboard → API Keys
2. Créer une nouvelle clé
3. Copier la clé (commence par `re_`)

### Étape 3: Configurer le projet
```bash
# 1. Créer le fichier .env.local à la racine
touch .env.local

# 2. Ajouter la clé API
echo "RESEND_API_KEY=re_xxxxxxxxxxxxx" > .env.local
```

### Étape 4: Modifier l'email de destination
Ouvrir `app/api/appointments/route.ts` ligne 30:
```typescript
to: ['votre-email@gmail.com'], // ← Remplacer par votre email
```

### Étape 5: Redémarrer le serveur
```bash
# Arrêter le serveur (Ctrl+C)
# Relancer
npm run dev
```

---

## 🎨 Créer les Icônes PWA

### Option 1: Générateur en ligne (Recommandé)
1. Aller sur https://realfavicongenerator.net/
2. Uploader votre logo (format PNG, 512x512 minimum)
3. Télécharger le package
4. Copier `icon-192.png` et `icon-512.png` dans `/public`

### Option 2: Canva
1. Créer un design 512x512px
2. Exporter en PNG
3. Redimensionner en 192x192px avec https://imageresizer.com/
4. Placer les fichiers dans `/public`

### Option 3: Figma/Photoshop
1. Créer deux fichiers:
   - `icon-192.png` (192x192px)
   - `icon-512.png` (512x512px)
2. Utiliser le logo du cabinet
3. Fond transparent ou couleur unie (#0ea5e9)
4. Exporter en PNG
5. Placer dans `/public`

---

## 🚀 Déploiement sur Vercel

### Méthode 1: Via Dashboard (Plus simple)
1. Aller sur https://vercel.com
2. Se connecter avec GitHub
3. Cliquer "New Project"
4. Importer le repository
5. Ajouter les variables d'environnement:
   - `RESEND_API_KEY` = votre clé
6. Cliquer "Deploy"

### Méthode 2: Via CLI
```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Se connecter
vercel login

# 3. Déployer
vercel

# 4. Ajouter les variables d'environnement
vercel env add RESEND_API_KEY
# Entrer la valeur de votre clé

# 5. Redéployer avec les nouvelles variables
vercel --prod
```

---

## 🔧 Dépannage

### Le serveur ne démarre pas
```bash
# 1. Supprimer node_modules et .next
rm -rf node_modules .next

# 2. Réinstaller les dépendances
npm install

# 3. Relancer
npm run dev
```

### Port 3000 déjà utilisé
```bash
# Option 1: Utiliser un autre port
PORT=3001 npm run dev

# Option 2: Tuer le processus sur le port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac:
lsof -ti:3000 | xargs kill -9
```

### Erreur "Module not found"
```bash
# Réinstaller les dépendances
npm install

# Si le problème persiste
npm cache clean --force
npm install
```

### Les emails ne s'envoient pas
1. Vérifier que `.env.local` existe et contient `RESEND_API_KEY`
2. Vérifier que la clé API est valide sur https://resend.com
3. Vérifier les logs dans la console du navigateur (F12)
4. Vérifier les logs du serveur dans le terminal

---

## 📊 Vérifier l'État du Projet

### Santé du Build
```bash
# Vérifier que le build fonctionne
npm run build

# Si succès, vous verrez:
# ✓ Compiled successfully
```

### Vérifier les Erreurs ESLint
```bash
npm run lint

# Warnings actuels (non-bloquants):
# - Utilisation de <img> au lieu de <Image />
```

### Vérifier les Tests
```bash
npm test

# Devrait afficher:
# Test Suites: X passed
```

---

## 📞 Support

### Problèmes Techniques
- **Documentation Next.js**: https://nextjs.org/docs
- **Documentation Tailwind**: https://tailwindcss.com/docs
- **Documentation Resend**: https://resend.com/docs

### Contact
- **Email**: contact@cabinet-ubuntu.com
- **Téléphone**: +223 75 12 25 25
- **WhatsApp**: +223 75 12 25 25

---

## ✅ Checklist Avant Déploiement

- [ ] Créer les icônes PWA (icon-192.png, icon-512.png)
- [ ] Configurer Resend (RESEND_API_KEY dans .env.local)
- [ ] Modifier l'email de destination (app/api/appointments/route.ts)
- [ ] Tester le formulaire de rendez-vous
- [ ] Tester sur mobile (responsive)
- [ ] Vérifier le build (`npm run build`)
- [ ] Vérifier les liens (navigation, WhatsApp, téléphone)
- [ ] Vérifier Google Maps (adresse correcte)
- [ ] Optimiser les images (remplacer <img> par <Image />)
- [ ] Configurer le domaine personnalisé sur Vercel

---

**Dernière mise à jour**: 15 février 2026  
**Version**: 0.1.0  
**Statut**: ✅ Prêt pour le déploiement
