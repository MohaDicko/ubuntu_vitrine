# ✅ TODO - Cabinet Médical Ubuntu

## 🔴 URGENT (Avant Déploiement)

### 1. Créer les Icônes PWA
**Statut**: ❌ Non fait  
**Priorité**: HAUTE  
**Temps estimé**: 15 minutes

**Actions**:
- [ ] Créer `public/icon-192.png` (192x192px)
- [ ] Créer `public/icon-512.png` (512x512px)
- [ ] Utiliser le logo du cabinet ou créer avec:
  - https://realfavicongenerator.net/ (recommandé)
  - https://www.canva.com/
  - Figma/Photoshop

**Ressources**: Voir `GUIDE_ICONES_PWA.md`

---

### 2. Configurer Resend API
**Statut**: ❌ Non fait  
**Priorité**: HAUTE  
**Temps estimé**: 10 minutes

**Actions**:
- [ ] Créer compte sur https://resend.com
- [ ] Générer une clé API
- [ ] Créer fichier `.env.local` à la racine:
  ```env
  RESEND_API_KEY=re_xxxxxxxxxxxxx
  ```
- [ ] Modifier `app/api/appointments/route.ts` ligne 30:
  ```typescript
  to: ['contact@cabinet-ubuntu.com'], // ← Votre email réel
  ```
- [ ] Redémarrer le serveur (`npm run dev`)
- [ ] Tester le formulaire de rendez-vous

---

### 3. Tester le Formulaire
**Statut**: ⚠️ À tester  
**Priorité**: HAUTE  
**Temps estimé**: 5 minutes

**Actions**:
- [ ] Ouvrir http://localhost:3000#rendez-vous
- [ ] Remplir le formulaire
- [ ] Vérifier la réception de l'email
- [ ] Tester les validations (champs requis)
- [ ] Tester les messages d'erreur

---

## 🟡 IMPORTANT (Avant Production)

### 4. Optimiser les Images
**Statut**: ⚠️ Warnings ESLint  
**Priorité**: MOYENNE  
**Temps estimé**: 20 minutes

**Actions**:
- [ ] Remplacer `<img>` par `<Image />` dans:
  - `app/about/page.tsx` ligne 78
  - `app/page.tsx` lignes 159, 171, 263
- [ ] Ajouter `width` et `height` aux images
- [ ] Tester le build: `npm run build`

**Exemple**:
```tsx
// Avant
<img src={url} alt="..." />

// Après
import Image from 'next/image'
<Image src={url} alt="..." width={400} height={400} />
```

---

### 5. Tester sur Mobile
**Statut**: ❌ Non testé  
**Priorité**: MOYENNE  
**Temps estimé**: 15 minutes

**Actions**:
- [ ] Tester sur iPhone (Safari)
- [ ] Tester sur Android (Chrome)
- [ ] Vérifier le responsive design
- [ ] Tester le bouton WhatsApp
- [ ] Tester le formulaire
- [ ] Tester l'installation PWA

**Méthode**: Voir `GUIDE_DEMARRAGE.md` section "Tester sur Mobile"

---

### 6. Vérifier les Liens
**Statut**: ❌ Non vérifié  
**Priorité**: MOYENNE  
**Temps estimé**: 10 minutes

**Actions**:
- [ ] Tester tous les liens de navigation
- [ ] Vérifier le numéro WhatsApp (+223 75 12 25 25)
- [ ] Vérifier le numéro de téléphone
- [ ] Vérifier Google Maps (adresse correcte)
- [ ] Tester les boutons CTA

---

## 🟢 OPTIONNEL (Améliorations)

### 7. Ajouter Google Analytics
**Statut**: ❌ Non fait  
**Priorité**: BASSE  
**Temps estimé**: 15 minutes

**Actions**:
- [ ] Créer compte Google Analytics
- [ ] Obtenir le Tracking ID
- [ ] Installer `@next/third-parties`
- [ ] Ajouter le script dans `app/layout.tsx`

---

### 8. Optimiser le SEO
**Statut**: ✅ Déjà bien configuré  
**Priorité**: BASSE  
**Temps estimé**: 30 minutes

**Actions optionnelles**:
- [ ] Créer `sitemap.xml` personnalisé
- [ ] Créer `robots.txt`
- [ ] Ajouter Schema.org markup (LocalBusiness)
- [ ] Optimiser les meta descriptions
- [ ] Ajouter des alt texts descriptifs

---

### 9. Améliorer les Performances
**Statut**: ⚠️ À optimiser  
**Priorité**: BASSE  
**Temps estimé**: 1 heure

**Actions**:
- [ ] Lazy load des images
- [ ] Optimiser les fonts (preload)
- [ ] Minifier le CSS
- [ ] Analyser avec Lighthouse
- [ ] Optimiser le bundle size

---

### 10. Ajouter des Tests
**Statut**: ⚠️ Tests configurés mais vides  
**Priorité**: BASSE  
**Temps estimé**: 2 heures

**Actions**:
- [ ] Tests unitaires des composants
- [ ] Tests d'intégration du formulaire
- [ ] Tests E2E avec Playwright
- [ ] Tests de performance

---

## 🚀 DÉPLOIEMENT

### 11. Déployer sur Vercel
**Statut**: ❌ Non déployé  
**Priorité**: FINALE  
**Temps estimé**: 20 minutes

**Pré-requis**:
- ✅ Icônes PWA créées
- ✅ Resend configuré
- ✅ Tests passés
- ✅ Build réussi

**Actions**:
- [ ] Créer compte Vercel
- [ ] Connecter le repository GitHub
- [ ] Configurer les variables d'environnement
- [ ] Déployer
- [ ] Tester le site en production
- [ ] Configurer le domaine personnalisé

**Guide**: Voir `GUIDE_DEMARRAGE.md` section "Déploiement sur Vercel"

---

## 📊 SUIVI

### Progression Globale
- **Urgent**: 0/3 (0%)
- **Important**: 0/3 (0%)
- **Optionnel**: 0/4 (0%)
- **Déploiement**: 0/1 (0%)

**Total**: 0/11 (0%)

---

## 🎯 PROCHAINE SESSION

**Ordre recommandé**:
1. ✅ Configurer Resend API (10 min)
2. ✅ Créer les icônes PWA (15 min)
3. ✅ Tester le formulaire (5 min)
4. ✅ Tester sur mobile (15 min)
5. ✅ Optimiser les images (20 min)
6. ✅ Déployer sur Vercel (20 min)

**Temps total estimé**: ~1h30

---

## 📝 NOTES

### Vulnérabilités npm
```
⚠️ 4 vulnerabilities (3 high, 1 critical)
```
**Action**: Exécuter `npm audit fix` après le déploiement initial

### Variables d'Environnement
**Production** (Vercel):
- `RESEND_API_KEY` (requis)

**Développement** (`.env.local`):
- `RESEND_API_KEY` (requis)

### Fichiers à ne PAS commiter
- `.env.local`
- `.env`
- `node_modules/`
- `.next/`

---

**Dernière mise à jour**: 15 février 2026  
**Créé par**: Antigravity AI  
**Projet**: Cabinet Médical Ubuntu v0.1.0
