import { Cutive_Mono, Inter, Paytone_One } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/navigation/MainNav";
import { Poppins } from "next/font/google";
import Footer from "@/components/navigation/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const paytone = Paytone_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-paytone-one",
  weight: ["400"],
});

const cutive = Cutive_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cutive-mono",
  weight: ["400"],
});

export const metadata = {
  title: "This Blog",
  description: "It's a blog!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${paytone.variable} ${cutive.variable}`}
    >
      <body className="">
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
