<div align="center">

# 📄 PDF Merger

### Merge multiple PDF files into one — instantly, in your browser.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-brightgreen?style=for-the-badge&logo=render)](https://pdf-merger-mjun.onrender.com)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-Framework-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Multer](https://img.shields.io/badge/Multer-File%20Upload-0078D4?style=for-the-badge)](https://github.com/expressjs/multer)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/Pruthviraj75/PDF_Merger?style=for-the-badge)](https://github.com/Pruthviraj75/PDF_Merger/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Pruthviraj75/PDF_Merger?style=for-the-badge)](https://github.com/Pruthviraj75/PDF_Merger/network/members)

</div>

---

## 📌 Table of Contents

- [About](#-about)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [How It Works](#️-how-it-works)
- [Screenshots](#-screenshots)
- [Project Structure](#-project-structure)
- [Installation & Setup](#️-installation--setup)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 📖 About

**PDF Merger** is a lightweight full-stack web application that lets users upload two or more PDF files and download them combined as a single document — no sign-up, no software, no hassle.

Built with **Node.js** and **Express.js** on the backend, it uses **Multer** for secure multipart file uploads and **pdf-merger-js** for server-side PDF processing. Uploaded files are automatically cleaned up after the merged file is served, keeping the server lean.

---

## 🚀 Live Demo

👉 **[https://pdf-merger-mjun.onrender.com](https://pdf-merger-mjun.onrender.com)**

> Open the link, upload your PDFs, and download the merged result in seconds.

---

## ✨ Features

- 📂 **Multi-file upload** — select two or more PDF files at once
- 📑 **Instant merging** — combines all uploaded PDFs into one document server-side
- 📥 **Direct download** — merged file is returned immediately for download
- 🧹 **Auto cleanup** — uploaded and temporary files are deleted after processing
- 🔐 **Secure handling** — file validation and type-checking via Multer middleware
- 🌐 **No install required** — runs entirely in the browser, works on any device
- ☁️ **Cloud deployed** — live on Render with zero-downtime serving

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Runtime** | Node.js | Server-side JavaScript execution |
| **Framework** | Express.js | HTTP routing and middleware |
| **File Upload** | Multer | Multipart form handling and file storage |
| **PDF Processing** | pdf-merger-js | Merging multiple PDFs into one |
| **Frontend** | HTML, CSS, JavaScript | Upload UI and result page |
| **Deployment** | Render | Cloud hosting |

---

## ⚙️ How It Works

```
User selects PDFs in browser
        │
        │  POST /merge (multipart/form-data)
        ▼
Express + Multer receives files
        │
        │  Files saved to /uploads
        ▼
pdf-merger-js merges all files → merged.pdf
        │
        │  res.download("merged.pdf")
        ▼
Browser downloads the merged file
        │
        ▼
Temporary files deleted from server
```

1. User opens the app and selects 2+ PDF files via the upload form
2. Files are sent to `POST /merge` as multipart form data
3. Multer saves them temporarily to the `/uploads` folder
4. `pdf-merger-js` reads each file in order and merges them
5. The merged PDF is sent back as a file download
6. All temporary files are deleted from the server

---

## 📸 Screenshots

### 🏠 Home Page — Upload Interface
![Home Page](https://i.postimg.cc/prH3DdFz/pdf-Merger-homepage.png)

### 📥 Download Page — Merged Result Ready
![Download Page](https://i.postimg.cc/YSLPZFNg/pdf-M-download-Page.png)

---

## 📂 Project Structure

```
PDF_Merger/
│
├── public/                  # Static frontend assets (CSS, client JS)
│
├── templates/               # HTML template files (upload form, result page)
│
├── uploads/                 # Temporary storage for uploaded PDFs (auto-cleared)
│
├── server.js                # Main Express server — routes and app logic
├── merge.js                 # PDF merging logic using pdf-merger-js
│
├── .env                     # Environment variables (PORT, etc.)
├── .gitignore               # Ignores node_modules, uploads, .env
├── package.json             # Project metadata and dependencies
└── README.md
```

---

## 🔧 Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) `>= 16`
- npm (comes with Node.js)

### 1. Clone the Repository

```bash
git clone https://github.com/Pruthviraj75/PDF_Merger.git
cd PDF_Merger
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
```

### 4. Run the Application

```bash
node server.js
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📖 Usage

1. **Open the app** at [http://localhost:3000](http://localhost:3000) (or the live URL)
2. **Click "Choose Files"** and select 2 or more PDF files from your device
3. **Click "Merge PDFs"** to upload and process the files
4. **Download** the merged PDF when the result page appears
5. Your files are automatically removed from the server after download

> **Tip:** Files are merged in the order you select them. Rename files with numbered prefixes (e.g., `01_intro.pdf`, `02_chapter.pdf`) to control the output order.

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch

```bash
git checkout -b feature/your-feature-name
```

3. **Commit** your changes

```bash
git commit -m "Add: your feature description"
```

4. **Push** to your branch

```bash
git push origin feature/your-feature-name
```

5. **Open a Pull Request** on GitHub

Please keep PRs focused on a single change and describe what it does clearly.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

**Pruthviraj Gaikwad**

Node.js & Full-Stack Developer — building practical tools and real-world projects

[![GitHub](https://img.shields.io/badge/GitHub-Pruthviraj75-black?style=for-the-badge&logo=github)](https://github.com/Pruthviraj75)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-0A66C2?style=for-the-badge&logo=google-chrome&logoColor=white)](https://pruthviii.onrender.com/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pruthvi-gaikwad/)

</div>

---
