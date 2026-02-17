const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { mergerPdfs } = require('./merge');

const app = express();
const upload = multer({ dest: 'uploads/' });
const PORT = process.env.port || 3000;

app.use('/static', express.static('public'));
app.use(express.json());

// Home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});

// Merge PDFs
app.post('/merge', upload.array('pdfs'), async (req, res) => {
  try {
    if (!req.files || req.files.length < 2) {
      return res.status(400).json({ error: "Upload at least 2 PDFs" });
    }

    const filePaths = req.files.map(file => file.path);

    const fileName = await mergerPdfs(filePaths);

    // delete temp uploads
    filePaths.forEach(file => {
      if (fs.existsSync(file)) fs.unlinkSync(file);
    });

    res.json({ file: fileName + ".pdf" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Merge failed" });
  }
});

// Download + auto delete
app.get('/download/:file', (req, res) => {
  const filePath = path.join(__dirname, 'public', req.params.file);

  res.download(filePath, (err) => {
    if (!err && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  });
});

// Manual delete
app.delete('/delete/:file', (req, res) => {
  const filePath = path.join(__dirname, 'public', req.params.file);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
