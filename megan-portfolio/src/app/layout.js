import { Albert_Sans, Instrument_Serif, Homemade_Apple } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";
 
const sans = Albert_Sans({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const hand = Homemade_Apple({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand"
});
export const metadata = {
  // the live site's address, so link previews get full image URLs
  metadataBase: new URL("https://meghubbert.vercel.app"),
  title: "Megan Hubbert | Communications and Digital Content",
  description:
    "Writing, newsletters, social content, campaigns, photography, video, web content, and graphic design.",
  // the text shown with link previews; the image comes from opengraph-image.png
  // in this folder once it's added
  openGraph: {
    title: "Megan Hubbert | Communications and Digital Content",
    description:
      "Writing, newsletters, social content, campaigns, photography, video, web content, and graphic design.",
    url: "/",
    siteName: "Megan Hubbert",
    type: "website",
  },
};
 
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${hand.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
