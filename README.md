# 🚀 Хүргэлтийн Апп

Монголын хүргэлтийн менежментийн систем — React дээр суурилсан.

---

## 📁 Хавтасны бүтэц

```
hurgeltiin-app/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← GitHub Actions (auto deploy)
├── public/
│   └── index.html
├── src/
│   ├── constants/
│   │   └── index.js            ← STATUS_CONFIG, INITIAL_STATE
│   ├── store/
│   │   ├── helpers.js          ← genId, fmtTime, estDist...
│   │   └── reducer.js          ← бүх action-ууд
│   ├── components/
│   │   ├── ui/                 ← StatusBadge, Button, Card, TopBar, BottomNav
│   │   └── shared/
│   │       └── DeliveryForm.jsx
│   ├── pages/
│   │   ├── auth/               ← LoginPage, RegisterPage, GuestOrderPage
│   │   ├── admin/              ← AdminApp
│   │   ├── driver/             ← DriverApp
│   │   └── customer/           ← CustomerApp
│   ├── App.jsx
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Локалд ажиллуулах

```bash
npm install
npm start
```

---

## 🚀 GitHub-д байршуулах (Deploy)

### 1. GitHub репо үүсгэх

1. [github.com/new](https://github.com/new) хуудсанд очих
2. Repository name: `hurgeltiin-app`
3. Public сонгох → **Create repository**

### 2. package.json дээрх homepage засах

`package.json` файлыг нээж, `YOUR_GITHUB_USERNAME` гэснийг өөрийн GitHub нэрээр солих:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/hurgeltiin-app"
```

Жишээ нь таны GitHub нэр `batbold` бол:
```json
"homepage": "https://batbold.github.io/hurgeltiin-app"
```

### 3. Git эхлүүлж, GitHub-т push хийх

```bash
git init
git add .
git commit -m "Initial commit: Хүргэлтийн апп"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/hurgeltiin-app.git
git push -u origin main
```

### 4. GitHub Pages идэвхжүүлэх

1. GitHub дээр репо руугаа орох
2. **Settings** → **Pages**
3. Source: **"Deploy from a branch"**
4. Branch: **`gh-pages`** → `/root` → **Save**

### 5. GitHub Actions зөвшөөрөл өгөх

1. **Settings** → **Actions** → **General**
2. "Workflow permissions" хэсэгт:
   - ✅ **Read and write permissions** сонгох
   - ✅ **Allow GitHub Actions to create and approve pull requests** сонгох
3. **Save**

### 6. Автомат deploy ажиллах

Одоо `main` branch-д push хийх бүрд:
1. GitHub Actions автоматаар `npm run build` ажиллуулна
2. Build амжилттай болбол `gh-pages` branch-д байрлуулна
3. Таны апп `https://YOUR_GITHUB_USERNAME.github.io/hurgeltiin-app` хаягаар нээгдэнэ

---

## 🔄 GitHub Actions workflow тайлбар

```yaml
on:
  push:
    branches: [main]     # main-д push хийхэд автомат ажиллана
  pull_request:
    branches: [main]     # PR үед build шалгана

jobs:
  build:   → npm ci + npm run build   (бүтэц шалгах)
  deploy:  → gh-pages branch-д push  (зөвхөн main-аас)
```

---

## 👤 Туршилтын бүртгэлүүд

| Дүр       | Имэйл                | Нууц үг   |
|-----------|----------------------|-----------|
| Админ     | admin@hurgelt.mn     | admin123  |
| Жолооч 1  | driver1@hurgelt.mn   | driver123 |
| Жолооч 2  | driver2@hurgelt.mn   | driver123 |
| Хэрэглэгч | cust1@example.mn     | cust123   |

Нэвтрэлгүйгээр захиалга өгөх: нүүр хуудасны **"📦 Нэвтрэлгүйгээр захиалга өгөх"** товч.
