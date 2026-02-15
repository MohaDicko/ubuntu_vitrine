# Guide de Création des Icônes PWA pour Cabinet Ubuntu

## Icônes Nécessaires

Vous avez besoin de 2 icônes :
1. **icon-192.png** (192x192 pixels)
2. **icon-512.png** (512x512 pixels)

## Option 1 : Utiliser un Générateur en Ligne (RECOMMANDÉ)

### Étape 1 : Créer le logo
Allez sur **https://www.canva.com** (gratuit) :
1. Créez un design carré 512x512px
2. Fond blanc
3. Ajoutez une croix médicale bleue (#0ea5e9)
4. Ajoutez le texte "Ubuntu" en dessous
5. Téléchargez en PNG

### Étape 2 : Générer les tailles
Allez sur **https://realfavicongenerator.net** :
1. Uploadez votre logo 512x512
2. Téléchargez les icônes générées
3. Renommez-les en `icon-192.png` et `icon-512.png`

## Option 2 : Utiliser des Icônes Temporaires

En attendant, vous pouvez utiliser des icônes génériques :

### Télécharger depuis Unsplash
```
https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=512&h=512&fit=crop
```

## Installation

1. Placez les fichiers dans le dossier `public/` :
   ```
   public/
   ├── icon-192.png
   └── icon-512.png
   ```

2. Les icônes sont déjà configurées dans `public/manifest.json`

## Vérification

Une fois les icônes en place :
1. Ouvrez le site sur mobile
2. Vous devriez voir "Ajouter à l'écran d'accueil"
3. L'icône apparaîtra avec votre logo

## Design Recommandé

- **Couleur principale** : Bleu ciel (#0ea5e9)
- **Symbole** : Croix médicale ou stéthoscope
- **Texte** : "Ubuntu" ou "CMU"
- **Style** : Moderne, minimaliste, professionnel
