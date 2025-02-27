import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Login Routing",
  description: "Next.js App Router Example",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <nav className="bg-blue-500 text-white p-4">
          <div className="container mx-auto flex justify-between">
            <div>
              <Link className="px-4" href="/">Home</Link>
              <Link className="px-4" href="/about">About Us</Link>
              <Link className="px-4" href="/blog">Blog</Link>
              <Link className="px-4" href="/students">Students</Link> {/* ✅ Thêm mục Students */}
            </div>
            <Link className="px-4" href="/login">Logout</Link>
          </div>
        </nav>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
