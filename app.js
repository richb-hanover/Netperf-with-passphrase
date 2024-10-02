// # const words = ["from", "that", "this", "with", "your", "have", "more", "will", "home", "page", "free", "time", "they", "site", "what", "news", "only", "when", "here", "also", "help", "view", "been", "were", "some", "like", "than", "find", "date", "back", "list", "name", "just", "over", "year", "into", "next", "used", "work", "last", "most", "data", "make", "them", "post", "city", "such", "best", "then", "good"];

const express = require('express');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const os = require('os');
const sharp = require('sharp'); // Import sharp

const app = express();

// List of words for passphrase generation
const words = ['apple', 'banana', 'cherry', 'dog', 'elephant', 'fox', 'giraffe', 'hat', 'igloo', 'jelly', 'kite', 'lemon'];

// Function to get the host's IP address
const getIPAddress = () => {
  const interfaces = os.networkInterfaces();
  for (let name in interfaces) {
    for (let net of interfaces[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return '127.0.0.1'; // Default to localhost if no external IP is found
};

// Function to generate a passphrase based on the current date and IP address
const generatePassphrase = () => {
  const dateSeed = new Date().toISOString().slice(0, 10);  // Use YYYY-MM-DD format
  const ipAddress = getIPAddress().split('.').reduce((acc, val) => acc + parseInt(val), 0);  // Reduce IP address digits
  let seed = dateSeed.split('-').reduce((acc, val) => acc + parseInt(val), ipAddress); // Add IP and date together
  const firstWord = words[seed % words.length];
  const secondWord = words[(seed * 2) % words.length];
  return `${firstWord}-${secondWord}`;
};

// Function to create a PNG image from text using Sharp
const createImageFromText = async (text) => {
  const width = 90;
  const height = 20;

  text = "Foxy-happy" // test text to check image generation
  // SVG string for the image with 12-point sans-serif font
  const svgImage = `
    <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto">
    <rect width="100%" height="100%" fill="white"/>
    <text x="0" y="12" font-size="16" fill="black" font-family="sans-serif">${text}</text>
    </svg>

  `;

  // Create image from SVG using Sharp
  return await sharp(Buffer.from(svgImage)).png().toBuffer();
};


// Function to render a Markdown file into HTML
const renderMarkdownFile = async (filePath, res) => {
  fs.readFile(filePath, 'utf8', async (err, data) => {
    if (err) {
      res.status(404).send('404 - Markdown file not found');
      return;
    }

    // Generate passphrase
    const passphrase = generatePassphrase();
    
    // Create PNG image from passphrase
    const passphraseImageBuffer = await createImageFromText(passphrase);
    const imageData = passphraseImageBuffer.toString('base64');
    const imageSrc = `data:image/png;base64,${imageData}`;

    // Replace all occurrences of {{passphrase}} in the markdown content
    const content = data.replace(/{{passphrase}}/g, `<img src="${imageSrc}" alt="Passphrase Image"/>`);

    // Convert Markdown to HTML
    const htmlContent = marked(content);

    // Send HTML response with CSS linked
    res.send(`
      <html>
        <head>
          <title>My Markdown Site</title>
          <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `);
  });
};

// Serve static files
app.use(express.static('public'));

// Serve the root file (index.md)
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.md');
  renderMarkdownFile(filePath, res);
});

// Serve other .md files dynamically based on URL
app.get('/:file', (req, res) => {
  const fileName = req.params.file;

  // Ensure that the requested file exists with .md extension
  const filePath = path.join(__dirname, `${fileName}.md`);

  // Check if the file exists and render it, otherwise return a 404
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send('404 - File not found');
    } else {
      renderMarkdownFile(filePath, res);
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
