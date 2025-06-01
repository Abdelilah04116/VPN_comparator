# VPN Comparateur

Site web de comparaison de services VPN avec guides détaillés et informations sur la sécurité en ligne.

## 🚀 Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/vpn-comparateur.git
cd vpn-comparateur
```

2. Installez les dépendances :
```bash
npm install
```

3. Démarrez le serveur :
```bash
# Mode développement
npm run dev

# Mode production
npm start
```

Le site sera accessible sur `http://localhost:3000`

## 🛠️ Technologies utilisées

- Node.js
- Express.js
- TailwindCSS
- Font Awesome

## 🔒 Sécurité

Le site utilise plusieurs middlewares de sécurité :
- Helmet pour la sécurité des en-têtes HTTP
- CORS pour la gestion des requêtes cross-origin
- Compression pour optimiser les performances

## 🌐 Déploiement

### Hébergement sur Vercel

1. Créez un compte sur [Vercel](https://vercel.com)
2. Installez Vercel CLI :
```bash
npm i -g vercel
```

3. Déployez :
```bash
vercel --prod
```

### Hébergement sur Heroku

1. Créez un compte sur [Heroku](https://heroku.com)
2. Installez Heroku CLI et connectez-vous
3. Créez une application Heroku :
```bash
heroku create vpn-comparateur
```

4. Déployez :
```bash
git push heroku main
```

## 📝 Licence

MIT License