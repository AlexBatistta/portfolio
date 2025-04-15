import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Hero } from "./components/Hero"
import { NavBar } from "./components/NavBar"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

function App() {
  return (
    <main className="flex flex-col px-10 bg-blue-950 w-full h-screen text-white gap-6">
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default App
