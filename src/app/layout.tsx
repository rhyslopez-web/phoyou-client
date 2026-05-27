import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ReactQueryProvider from "./context/ReactQueryProvider";

export const metadata: Metadata = {
  title: "PhoYou Hastings",
  description: "Restaurant With Fresh Flavors of​ Vietnam & Thailand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className=''
      >
        <Header/>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
        <Footer/>
      </body>
    </html>
  );
}
