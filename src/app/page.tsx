import { ChatBox } from "./components/ChatBox"
import { Header } from "./components/Header"
import './globals.css'


export default function Home() {
  return (
    <main className='w-[100%] h-[100vh] flex flex-col justify-center items-center'>
      <Header/>
    </main>
  )
}
