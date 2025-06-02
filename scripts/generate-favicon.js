const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sizes = [16, 32, 48, 64, 128, 256];

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

    // Générer favicon.ico (combinaison des tailles 16x16 et 32x32)
    await sharp(sourceImage)
        .resize(32, 32)
        .toFile(path.join(publicDir, 'favicon.ico'));

    // Générer apple-touch-icon
    await sharp(sourceImage)
        .resize(180, 180)
        .toFile(path.join(publicDir, 'apple-touch-icon.png'));

    console.log('Favicons générés avec succès !');
}

generateFavicons().catch(console.error);