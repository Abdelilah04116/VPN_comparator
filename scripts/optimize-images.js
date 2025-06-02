const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
    const publicDir = path.join(__dirname, '..', 'public');
    const assetsDir = path.join(__dirname, '..', 'assets');

    // Créer les répertoires s'ils n'existent pas
    await fs.mkdir(path.join(publicDir, 'images'), { recursive: true });

    try {
        // Lire tous les fichiers du dossier assets
        const files = await fs.readdir(assetsDir);
        
        for (const file of files) {
            if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
                const inputPath = path.join(assetsDir, file);
                const fileName = path.parse(file).name;

                // Générer WebP version
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(path.join(publicDir, 'images', `${fileName}.webp`));

                // Optimiser l'image originale
                await sharp(inputPath)
                    .jpeg({ quality: 85, progressive: true })
                    .toFile(path.join(publicDir, 'images', `${fileName}.jpg`));

                console.log(`Optimisé: ${file}`);
            }
        }
        
        console.log('Toutes les images ont été optimisées !');
    } catch (error) {
        console.error('Erreur lors de l\'optimisation des images:', error);
    }
}

optimizeImages().catch(console.error);