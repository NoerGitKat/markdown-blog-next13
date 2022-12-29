import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="mx-auto max-w-2xl px-4 md:px-0">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
