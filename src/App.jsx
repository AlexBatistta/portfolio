import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Hero } from "./components/Hero"
import { NavBar } from "./components/NavBar"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

function App() {
  return (
    <main className="flex flex-col bg-blue-950 w-full h-screen text-white bg-gradient-to-tl from-blue-900 to-indigo-950">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
