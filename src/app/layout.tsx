import { Toaster } from "@/components/ui/toaster"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'ZyraNova',
  description: 'ZyraNova adalah chatbot dengan model GPT (Generative Pre-trained Transformer)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </head>
      <body className="show-chatbot">
        {children}
        <Toaster/>
        <script src="/script/script.js"></script>
      </body>
    </html>
  )
}
