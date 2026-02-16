const PDFMerger = require('pdf-merger-js');

<<<<<<< HEAD
const mergerPdfs = async (files) => {
  const merger = new PDFMerger();

  for (let file of files) {
    await merger.add(file);
  }

  const fileName = Date.now();
  await merger.save(`public/${fileName}.pdf`);

  return fileName;
};

module.exports = { mergerPdfs };
=======
var merger = new PDFMerger();

const mergerPdfs = async (p1, p2) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); // merge only page 2
  let d = new Date().getTime();
  await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
  return d
};

module.exports = {mergerPdfs};
>>>>>>> c23e2a308d4eb592a7312b69883385c76737918d
