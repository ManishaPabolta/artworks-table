# 🎨 Artworks Table (PrimeReact + React + TypeScript)

A responsive, paginated artworks table built with **React**, **TypeScript**, and **PrimeReact**. The project fetches artwork data from an API, supports pagination, checkbox-based row selection, and a **custom overlay** to select the first N rows on the current page.

---

## ✨ Features

* 📄 Paginated & lazy-loaded DataTable (PrimeReact)
* ☑️ Multi-row selection with checkboxes
* 🧠 Custom Select Overlay (select first N rows on current page)
* 🔁 Sync between checkbox selection & custom overlay
* ⚡ Fast dev experience with **Vite**
* 🧩 Fully typed with **TypeScript**

---

## 🛠️ Tech Stack

* **React 18**
* **TypeScript**
* **PrimeReact** (DataTable, OverlayPanel, Button)
* **Vite** (bundler)
* **CSS**

---

## 📁 Project Structure

```
<img width="230" height="857" alt="image" src="https://github.com/user-attachments/assets/f31d4182-b567-40aa-a106-572b072256b5" />

```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/artworks-table.git
cd artworks-table
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the project

```bash
npm run dev
```

Open: **[http://localhost:5173](http://localhost:5173)**

---

## 📦 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

---

## 🧠 How Selection Works

* **DataTable** selection is row-based (`Artwork[]`)
* **CustomSelectOverlay** works with IDs (`number[]`)
* IDs are safely derived from selected rows
* TypeScript guards ensure `id` is never `undefined`

---

## 🖼️ Screenshots

<img width="1866" height="883" alt="image" src="https://github.com/user-attachments/assets/afdc552a-faad-4cc5-9291-1dc4b9034aa8" />


---

## 🐞 Common Issues

* **Red lines in TypeScript** → usually caused by `number | undefined`
* Fixed using proper type guards (`id is number`)

---

## 📌 Future Improvements

* 🔍 Search & filters
* 📊 Column sorting
* 💾 Persist selection across pages
* 🌙 Dark mode

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

This project is open-source and free to use.

---

Made with ❤️ using React & PrimeReact
