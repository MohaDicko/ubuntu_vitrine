# 🔧 GUIDE DE DÉPANNAGE - Erreur 404 Vercel

**Erreur rencontrée** :
```
404: NOT_FOUND
Code: NOT_FOUND
ID: lhr1::jg679-1771160016713-9bf58cd9d2a9
```

---

## 🎯 CAUSES POSSIBLES ET SOLUTIONS

### 1. ❌ Build Failed (Cause la plus fréquente)

**Symptôme** : Le déploiement échoue silencieusement et affiche 404

**Solution** :
1. Aller sur le **Dashboard Vercel**
2. Cliquer sur votre projet
3. Aller dans l'onglet **"Deployments"**
4. Cliquer sur le dernier déploiement
5. Vérifier les **logs de build**

**Rechercher** :
- ❌ Erreurs ESLint
- ❌ Erreurs TypeScript
- ❌ Modules manquants
- ❌ Erreurs de compilation

---

### 2. ⚙️ Variables d'Environnement Manquantes

**Symptôme** : Le build réussit mais l'app crash au runtime

**Solution** :
```bash
# Sur Vercel Dashboard
1. Settings > Environment Variables
2. Ajouter : RESEND_API_KEY (si vous utilisez Resend)
3. Redéployer
```

**Note** : Le fichier `.env` est ignoré par Git (normal), donc Vercel ne l'a pas !

---

### 3. 📁 Mauvais Répertoire de Build

**Symptôme** : Vercel ne trouve pas les fichiers

**Solution** :
Le fichier `vercel.json` a été créé avec la bonne configuration :
```json
{
  "buildCommand": "next build",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

Si le problème persiste, vérifier dans **Settings > General** :
- **Framework Preset** : Next.js
- **Build Command** : `next build`
- **Output Directory** : `.next`
- **Install Command** : `npm install`

---

### 4. 🔄 Cache Corrompu

**Symptôme** : Ça marchait avant, plus maintenant

**Solution** :
```bash
# Sur Vercel Dashboard
1. Settings > General
2. Descendre jusqu'à "Deployment Protection"
3. Cliquer "Clear Build Cache"
4. Redéployer
```

---

### 5. 🌿 Mauvaise Branche Déployée

**Symptôme** : Vous avez modifié le code mais rien ne change

**Solution** :
```bash
# Vérifier la branche active
git branch

# Vérifier que vous avez commit et push
git status
git add .
git commit -m "Fix: Configuration pour Vercel"
git push origin main
```

**Sur Vercel** :
- Settings > Git
- Vérifier que la bonne branche est déployée (main ou master)

---

## 🚀 SOLUTION RAPIDE (Recommandée)

### Étape 1 : Vérifier le Build Local
```bash
# Nettoyer
npm run build

# Si ça échoue, corriger les erreurs
# Si ça réussit, passer à l'étape 2
```

### Étape 2 : Pousser les Changements
```bash
git add .
git commit -m "Fix: Add vercel.json configuration"
git push origin main
```

### Étape 3 : Forcer un Redéploiement
**Option A - Via Dashboard** :
1. Aller sur Vercel Dashboard
2. Cliquer sur votre projet
3. Cliquer sur "Deployments"
4. Cliquer sur les 3 points (...) du dernier déploiement
5. Cliquer "Redeploy"

**Option B - Via CLI** :
```bash
vercel --prod --force
```

---

## 🔍 VÉRIFICATIONS À FAIRE

### ✅ Checklist Pré-Déploiement

- [ ] **Build local réussit** : `npm run build` ✅
- [ ] **Lint passe** : `npm run lint` (warnings OK, pas d'erreurs)
- [ ] **Fichier vercel.json créé** ✅
- [ ] **Git à jour** : `git status` (rien à commit)
- [ ] **Branche correcte** : `git branch` (main ou master)
- [ ] **Variables d'env configurées** sur Vercel (si nécessaire)

### 📊 Vérifier les Logs Vercel

1. **Dashboard Vercel** > Votre projet
2. **Deployments** > Dernier déploiement
3. **Building** > Voir les logs
4. **Runtime Logs** > Voir les erreurs

**Chercher** :
```
❌ Error: ...
❌ Failed to compile
❌ Module not found
❌ Type error
```

---

## 🛠️ SOLUTIONS AVANCÉES

### Si le Build Échoue sur Vercel mais Réussit en Local

**Cause** : Différence Node.js version

**Solution** :
Créer `package.json` avec la version Node :
```json
{
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### Si l'Erreur Persiste

**Solution Radicale** :
1. Supprimer le projet sur Vercel
2. Recréer un nouveau projet
3. Réimporter depuis GitHub
4. Configurer les variables d'environnement
5. Déployer

---

## 📝 LOGS TYPIQUES D'ERREUR

### Erreur ESLint
```
Error: ESLint: 
./app/page.tsx
  10:5  Error: 'variable' is assigned a value but never used
```

**Solution** : Corriger les erreurs ESLint ou désactiver temporairement :
```js
// next.config.js
module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // ⚠️ Temporaire seulement
  },
}
```

### Erreur TypeScript
```
Type error: Property 'x' does not exist on type 'Y'
```

**Solution** : Corriger les erreurs TypeScript ou désactiver :
```js
// next.config.js
module.exports = {
  typescript: {
    ignoreBuildErrors: true, // ⚠️ Temporaire seulement
  },
}
```

### Module Manquant
```
Error: Cannot find module 'xyz'
```

**Solution** :
```bash
npm install xyz
git add package.json package-lock.json
git commit -m "Add missing dependency"
git push
```

---

## 🎯 VOTRE CAS SPÉCIFIQUE

**Erreur** : `404: NOT_FOUND`

**Actions à faire MAINTENANT** :

1. **Vérifier les logs Vercel** :
   - Dashboard > Deployments > Dernier déploiement
   - Lire les logs de build
   - Copier l'erreur exacte

2. **Pousser vercel.json** :
   ```bash
   git add vercel.json
   git commit -m "Add Vercel configuration"
   git push origin main
   ```

3. **Redéployer** :
   - Vercel Dashboard > Redeploy
   - Ou : `vercel --prod --force`

4. **Vérifier les variables d'environnement** :
   - Settings > Environment Variables
   - Ajouter `RESEND_API_KEY` si nécessaire

---

## 📞 SI RIEN NE FONCTIONNE

**Partagez-moi** :
1. Les logs de build Vercel (copier/coller)
2. Le message d'erreur exact
3. La sortie de `npm run build` en local

**Je pourrai alors** :
- Identifier l'erreur précise
- Corriger le code
- Vous guider étape par étape

---

## ✅ RÉSULTAT ATTENDU

Après correction, vous devriez voir :
```
✅ Build successful
✅ Deployment ready
🌐 https://votre-projet.vercel.app
```

---

**Créé le** : 15 février 2026  
**Projet** : Cabinet Médical Ubuntu  
**Statut** : En cours de débogage
