import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

import HeaderImage from "./components/header/header"
import AboutMe from "./components/aboutme/aboutme"
import Skills from "./components/skills/skills"
import Portfolio from "./components/portfolio/portfolio"

function App() {
	return (
		<div className="App">
			<HeaderImage />
			<AboutMe />
			<Skills />
			<Portfolio />
		</div>
	)
}

export default App
