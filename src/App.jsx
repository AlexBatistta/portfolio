import { About } from './components/About';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import "../i18n";

function App() {
  return (
    <main className="flex flex-col w-full h-screen dark:bg-dark-background bg-light-background">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
