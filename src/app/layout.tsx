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
      <body>
        {children}
        <Toaster/>
      </body>
    </html>
  )
}
