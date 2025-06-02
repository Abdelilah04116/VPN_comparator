const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sizes = [16, 32, 48, 64, 128, 192, 256, 384, 512];

async function generateFavicons() {
    const publicDir = path.join(__dirname, '..', 'public');
    const sourceImage = path.join(__dirname, '..', 'assets', 'logo.png');

    // Créer le répertoire public s'il n'existe pas
    await fs.mkdir(publicDir, { recursive: true });

    // Générer les favicons pour différentes tailles
    for (const size of sizes) {
        await sharp(sourceImage)
            .resize(size, size)
            .toFile(path.join(publicDir, `favicon-${size}x${size}.png`));
    }

    // Générer favicon.ico (combinaison des tailles 16x16, 32x32 et 48x48)
    await sharp(sourceImage)
        .resize(32, 32)
        .toFile(path.join(publicDir, 'favicon.ico'));

    // Générer apple-touch-icon
    await sharp(sourceImage)
        .resize(180, 180)
        .toFile(path.join(publicDir, 'apple-touch-icon.png'));

    // Générer le manifest.json
    const manifest = {
        "name": "VPN Comparateur",
        "short_name": "VPNComp",
        "description": "Comparateur de services VPN",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": "#3B82F6",
        "icons": sizes.map(size => ({
            "src": `/favicon-${size}x${size}.png`,
            "sizes": `${size}x${size}`,
            "type": "image/png",
            "purpose": "any maskable"
        }))
    };

    await fs.writeFile(
        path.join(publicDir, 'manifest.json'),
        JSON.stringify(manifest, null, 2)
    );

    console.log('Favicons et manifest.json générés avec succès !');
}

generateFavicons().catch(console.error);