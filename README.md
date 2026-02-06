# 🏛️ SYSTÈME DU BUREAU DU PROCUREUR
## Office of the Attorney General - State of Tennessee

---

## 📋 TABLE DES MATIÈRES
1. [Description](#description)
2. [Fonctionnalités](#fonctionnalités)
3. [Installation](#installation)
4. [Utilisation](#utilisation)
5. [Structure du projet](#structure-du-projet)
6. [Modification des données](#modification-des-données)
7. [Déploiement](#déploiement)

----

## 📖 DESCRIPTION

Système complet de gestion des réquisitions pour le Bureau du Procureur dans un environnement de simulation judiciaire (RP) basé sur le droit américain/Tennessee.

**Objectifs :**
- Faciliter le calcul des peines et amendes
- Centraliser la base juridique
- Accélérer la prise de décision
- Former les nouveaux procureurs

---

## ✨ FONCTIONNALITÉS

### 1️⃣ Simulateur de peines
- ✅ Base de données complète de toutes les infractions du Code Pénal
- ✅ Sélection multi-infractions par cases à cocher
- ✅ Calcul automatique instantané (addition simple)
- ✅ Affichage temps réel + temps RP
- ✅ Gestion des modificateurs :
  - Récidive 1ère (×2) ou 2ème (×3)
  - Mineur < 21 ans (÷2)
  - Coopération (-25%)
  - Aveux (-15%)
  - Trouble psychique (-33%)
- ✅ Détection automatique de l'éligibilité CRPC
- ✅ Affichage peine réduite CRPC (-50%)
- ✅ Export des réquisitions en fichier texte

### 2️⃣ Base juridique interactive
- ✅ Consultation de tous les codes (Pénal, Civil, Route, etc.)
- ✅ Moteur de recherche par mot-clé
- ✅ Affichage structuré des articles

### 3️⃣ Fiches procédurales
- ✅ Garde à vue (durées, droits)
- ✅ Perquisitions (conditions, mandats)
- ✅ Mandats (types, validité)
- ✅ Audiences (types, déroulement)
- ✅ CRPC (conditions, procédure)
- ✅ Droits Miranda (texte légal)

---

## 🚀 INSTALLATION

### Méthode 1 : Ouverture locale (la plus simple)

1. **Télécharger tous les fichiers** dans un dossier
2. **Double-cliquer** sur `index.html`
3. Le site s'ouvre dans votre navigateur !

### Méthode 2 : Serveur local (recommandé pour le développement)

```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (si installé)
npx http-server

# Puis ouvrir : http://localhost:8000
```

### Méthode 3 : Hébergement web

Uploadez tous les fichiers sur un hébergeur web (GitHub Pages, Netlify, Vercel, etc.)

---

## 📱 UTILISATION

### Simulateur de peines

1. **Rechercher une infraction** dans la barre de recherche
2. **Cocher les infractions** reprochées
3. **Appliquer les modificateurs** si nécessaire
4. **Consulter les résultats** en temps réel
5. **Vérifier l'éligibilité CRPC** (s'affiche automatiquement)
6. **Exporter** les réquisitions via le bouton "Exporter"

### Base juridique

1. **Sélectionner un code** dans le menu latéral
2. **Utiliser la recherche** pour trouver un article
3. **Consulter** les détails directement

### Fiches procédurales

1. **Cliquer sur une carte** (GAV, Perquisition, etc.)
2. **Lire la procédure** détaillée
3. **Fermer** avec le bouton "Fermer"

---

## 📂 STRUCTURE DU PROJET

```
prosecutor-system/
│
├── index.html          # Page principale
├── styles.css          # Design (palette du logo)
├── app.js              # Logique applicative
├── data.js             # Base de données des infractions
├── logo.png            # Logo officiel du Bureau
└── README.md           # Ce fichier
```

---

## 🛠️ MODIFICATION DES DONNÉES

### Ajouter une nouvelle infraction

Ouvrez `data.js` et ajoutez dans la catégorie appropriée :

```javascript
{
    id: "XXX-X",                    // Identifiant unique
    name: "Nom de l'infraction",    // Nom complet
    article: "Art. XXX-X",          // Référence article
    prison: 5,                      // Années de prison
    prisonRP: 5,                    // Minutes RP
    amende: 5000,                   // Amende en $
    category: "Délit",              // Crime, Délit ou Contravention
    description: "Description"      // Courte description
}
```

### Modifier une peine existante

1. Cherchez l'infraction par son `id` dans `data.js`
2. Modifiez `prison`, `prisonRP` ou `amende`
3. Sauvegardez et rechargez la page

### Modifier les modificateurs

Dans `app.js`, modifiez les pourcentages ligne ~260 :

```javascript
if (state.modifiers.cooperation) reductionPercent += 25;  // Changer 25
if (state.modifiers.aveux) reductionPercent += 15;        // Changer 15
if (state.modifiers.troublePsy) reductionPercent += 33;   // Changer 33
```

### Ajouter une nouvelle catégorie d'infractions

Dans `data.js`, ajoutez une nouvelle clé :

```javascript
"NOUVELLE_CATEGORIE": [
    { /* infractions */ }
]
```

Puis dans `app.js` ligne ~140, ajoutez dans `formatCategoryName` :

```javascript
'NOUVELLE_CATEGORIE': '🎯 Nom affiché'
```

---

## 🌐 DÉPLOIEMENT

### GitHub Pages (gratuit)

1. Créer un repo GitHub
2. Uploader tous les fichiers
3. Aller dans Settings > Pages
4. Sélectionner la branche `main`
5. Votre site est en ligne !

### Netlify (gratuit)

1. Glisser-déposer le dossier sur netlify.com
2. Site déployé en 30 secondes

### Serveur privé

Uploader les fichiers via FTP sur votre hébergement web.

---

## 🎨 PERSONNALISATION

### Changer les couleurs

Dans `styles.css`, modifiez les variables ligne 8-15 :

```css
:root {
    --red-primary: #C8102E;    /* Rouge principal */
    --blue-navy: #002868;      /* Bleu marine */
    --white: #FFFFFF;          /* Blanc */
    --gold: #F4E5C3;           /* Or/Beige */
}
```

### Changer le logo

Remplacez simplement `logo.png` par votre image (même nom de fichier).

---

## 📊 RÈGLES DE CALCUL

### Peines cumulatives
**Addition simple** de toutes les infractions sélectionnées.

### Modificateurs (ordre d'application)
1. **Récidive** (×2 ou ×3) - appliquée en premier
2. **Mineur** (÷2) - appliquée ensuite
3. **Réductions** (-25%, -15%, -33%) - appliquées en dernier

### CRPC
- **Condition** : TOUTES les infractions ≤ 10 ans
- **Réduction** : -50% sur la peine totale finale

---

## 📞 SUPPORT

Pour toute question ou amélioration :
1. Modifier directement les fichiers sources
2. Consulter les commentaires dans le code
3. Tester dans le navigateur (F12 pour la console)

---

## 🔒 SÉCURITÉ & CONFIDENTIALITÉ

⚠️ **IMPORTANT** :
- Ce système fonctionne 100% côté client (dans le navigateur)
- Aucune donnée n'est envoyée à un serveur externe
- Toutes les données restent sur votre machine
- Pas de collecte d'informations personnelles

---

## 📜 LICENCE

Système développé pour usage interne dans un cadre de simulation judiciaire (RP).
Basé sur les codes juridiques du Tennessee (simulation).

---

## ✅ VERSION

**v1.0** - Février 2026
- ✅ Simulateur de peines complet
- ✅ Base juridique intégrée
- ✅ Fiches procédurales
- ✅ Export des réquisitions
- ✅ Design institutionnel

---

**Office of the Attorney General - State of Tennessee**
*Serving Justice with Excellence*
