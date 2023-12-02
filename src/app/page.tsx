"use client"

import { ChatBox } from "./components/ChatBox"
import { Header } from "./components/Header"
import { useToast } from "@/components/ui/use-toast"
import './globals.css'


export default function Home() {

  const { toast } = useToast();

  return (
    <main className='w-[100%] h-[100vh] flex flex-col justify-center items-center'>
      <Header />
      <ChatBox />
    </main>
  )
}
