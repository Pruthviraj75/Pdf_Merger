const express = require('express');
const path = require('path');
<<<<<<< HEAD
const fs = require('fs');
const multer = require('multer');
const { mergerPdfs } = require('./merge');

const app = express();
const upload = multer({ dest: 'uploads/' });
const port = 3000;

app.use('/static', express.static('public'));
app.use(express.json());

// Home
=======
const app = express();
const multer = require('multer');
const {mergerPdfs} = require('./merge') 
const upload = multer({ dest: 'uploads/' });
app.use('/static', express.static('public'))
const port = 3000;

// Serve the HTML form
>>>>>>> c23e2a308d4eb592a7312b69883385c76737918d
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});

<<<<<<< HEAD
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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
=======
// Handle file uploads
app.post('/merge', upload.array('pdfs', 2), async (req, res,) => {
  //console.log(req.files); // Log uploaded files
  let d = await mergerPdfs(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))
  res.redirect(`http://localhost:3000/static/${d}.pdf`)
  // res.send({ data: req.files }); // Send response back to client
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
>>>>>>> c23e2a308d4eb592a7312b69883385c76737918d
