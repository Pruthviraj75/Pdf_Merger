const PDFMerger = require('pdf-merger-js');

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
