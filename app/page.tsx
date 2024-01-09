import Image from 'next/image'
import { NavBar, PreloadingScreen , MainContent, Textbetween, Experience, Recommendation, Aboutme} from "../components";
import { Bebas_Neue } from 'next/font/google';


const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  return (
    <main className='  h-screen w-screen max-w-[100vw] overflow-x-hidden bg-slate-100'>

      <PreloadingScreen />
      <NavBar></NavBar>
      <MainContent />
      <Textbetween title='EXPERIENCE' />
      <Experience />
      <Textbetween title='RECOMMENDATION' />
      <Recommendation />
      <Textbetween title='ABOUT ME' />
      <Aboutme />


    </main>
  )
}
/*
<PreloadingScreen />
      <NavBar></NavBar>
      <MainContent />
      <Textbetween title='EXPIRIENCE' />
      <Expirience />
      <Textbetween title='RECOMMENDATION' />
      <Recommendation />
      <Textbetween title='ABOUT ME' />
      <Aboutme />

*/