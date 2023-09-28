/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
Component Main container of the project, it establish the static structure wich all the other 
components will inherit
*/

import "./globals.css"
import Navbar from "@/components/Header/Navbar"

export const metadata = {
  //Modifies Metadata o the project, in this case only the title and description
  title: "OFS Playground",
  description: "Universidad Nacional",
}

export default function RootLayout({ children }) {
  //Main structure of the app
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
