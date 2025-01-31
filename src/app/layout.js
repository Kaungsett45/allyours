
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Fnavigation from '../components/navigation';
import AllFooter from '../components/footer';

export const metadata = {
  title: "allyours",
  description: "allyours is an innovation hub that empowers creative individuals by providing co-working space and connecting them to a supportive network.",
};

export default function RootLayout({ children }) {
  

    

  return (
    <html lang="en">
       <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        
        
      >
    
         <Fnavigation/>  {/* navigation components*/}
            <div className="animate-fadeIn">{children} </div>  
          <AllFooter/>
          </body>
    </html>
  );
}
