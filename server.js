const express = require('express');
const path = require('path');
const app = express();
const multer = require('multer');
const {mergerPdfs} = require('./merge') 
const upload = multer({ dest: 'uploads/' });
app.use('/static', express.static('public'))
const port = 3000;

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});

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