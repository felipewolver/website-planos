import "./assets/js/script";
import './App.css'

import Header from "./components/Header/Header";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import Features from "./components/features/Features";
import Packages from "./components/packages/Packages";
import Projects from "./components/Projects/Projects";
import Team from "./components/Team/Team";
import Support from "./components/Support/Support";
import Footer from "./components/Footer/Footer";


function App() {
  

  return (
    <div className="App">
      <Header />
      <WhatWeDo />
      <Features />
      <Packages />
      <Projects />
      <Team />
      <Support />
      <Footer />

    </div>
  )
}

export default App
