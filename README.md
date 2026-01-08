# 🌸 Flow Beauty

**Flow Beauty** is a premium, modern e-commerce application designed for the beauty and cosmetics industry. Built with the latest web technologies, it offers a seamless, aesthetically pleasing, and responsive shopping experience.

![Flow Beauty Branding](https://via.placeholder.com/1200x600?text=Flow+Beauty+Preview)

## 🚀 Tech Stack

This project leverages a robust and modern stack to ensure performance, scalability, and developer experience.

### **Core Framework**
- **[Next.js 15](https://nextjs.org/)**: The React Framework for the Web (App Router).
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed JavaScript for generic stability.
- **[React 19](https://react.dev/)**: The library for web and native user interfaces.

### **Styling & UI**
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- **[Shadcn UI](https://ui.shadcn.com/)**: Reusable components built with Radix UI and Tailwind CSS.
- **[Framer Motion](https://www.framer.com/motion/)**: Production-ready animation library for React.
- **[Lucide React](https://lucide.dev/)**: Beautiful & consistent icons.
- **Fonts**: `Inter` (Sans) & `Playfair Display` (Serif) via `next/font`.

### **State Management & Logic**
- **[Zustand](https://zustand-demo.pmnd.rs/)**: Small, fast, and scalable bearbones state-management (Used for Cart & Wishlist persistence).
- **[NextAuth.js](https://next-auth.js.org/)**: Authentication for Next.js.
- **[Prisma](https://www.prisma.io/)**: Next-generation Node.js and TypeScript ORM.
- **SQLite**: Lightweight database for development.

---

## ✨ Key Features

- **Storefront**:
  - **Dynamic Product Listing**: Filter by category, search real-time, and browse trending items.
  - **Product Details**: Rich product pages with image galleries, ingredients, and related items.
  - **Hero Carousel**: Immersive homepage slider with 3D-like interactions.

- **Shopping Experience**:
  - **Cart System**: Persistent shopping cart with quantity management and real-time total calculation.
  - **Wishlist**: Save favorite items for later (persisted locally).
  - **Responsive Design**: fully optimized for mobile, tablet, and desktop.

- **User Accounts**:
  - **Authentication**: Secure Login and Registration system using Credentials.
  - **Session Management**: Protected routes and personalized user headers.
  - **Profile Management**: (Foundation laid for future expansion).

- **Technical Highlights**:
  - **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)** where applicable.
  - **SEO Optimized**: Semantic HTML and metadata configuration.
  - **Glassmorphism Design**: Modern UI aesthetic with blur effects and gradients.

---

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/flow-beauty.git
    cd flow-beauty
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory and add the following variables:
    ```env
    # Database (SQLite)
    DATABASE_URL="file:./dev.db"

    # NextAuth Configuration
    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="your-super-secret-key-change-this"

    # Prisma Configuration (Important for Serverless/Next.js compatibility)
    PRISMA_CLIENT_ENGINE_TYPE="library"
    ```

4.  **Database Setup:**
    Initialize the SQLite database and generate the Prisma client.
    ```bash
    npx prisma generate
    npx prisma db push
    ```
    *(Optional) Seed the database if a seed script is provided.*
    ```bash
    npm run seed
    ```

5.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

6.  **Open the App:**
    Visit `http://localhost:3000` in your browser.

---

## 📂 Project Structure

```bash
├── prisma/               # Database schema and migrations
├── public/               # Static assets (images, icons)
├── src/
│   ├── app/              # Next.js App Router pages & API routes
│   │   ├── api/          # Backend API endpoints (auth, register, etc.)
│   │   ├── (pages)       # page.tsx files for routes
│   │   └── layout.tsx    # Root layout
│   ├── components/       # Reusable React components (Navbar, Footer, etc.)
│   │   └── ui/           # Shadcn UI primitives
│   ├── hooks/            # Custom React hooks (useCart, useWishlist)
│   ├── lib/              # Utility functions and configurations
│   └── styles/           # Global styles
└── package.json          # Project dependencies and scripts
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### 🎨 Design Philosophy
*Beautiful Things don't ask for attention.*  
Flow Beauty aims to provide a calm, luxurious digital environment where the product shines.
