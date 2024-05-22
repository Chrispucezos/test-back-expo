import 'dotenv/config';
import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;

// Configuration de lowdb
const db = new Low(new JSONFile('src/config/db.json'), {})
/


// Middleware pour parser le JSON
app.use(express.json());

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  

// Route de base
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route pour récupérer les éléments de la base de données
app.get('/api/items', async (req, res) => {
  await db.read(); // Assurez-vous que la base de données est lue avant de répondre
  const items = db.data.items;
  res.json(items);
//   console.log(items)
});

