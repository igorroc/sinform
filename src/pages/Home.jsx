import { styled } from "@stitches/react"
import Botao from "../components/Botao"
import Header from "../components/Header"
import BG1 from "../assets/bg_tex1.png"
import BG2 from "../assets/bg_tex2.png"

const Main = styled("main", {
	position: "relative",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: "10px",
	padding: "150px 0",

	h1: {
		fontSize: "5rem",
	},

	img: {
		position: "absolute",
		top: "0",
		zIndex: "-1",

		"&#bg_left": {
			left: "-70px",
		},

		"&#bg_right": {
			right: "0",
		},
	},
})

const Section = styled("section", {
	background: "#ECF1FC",

	"&.inverted": {
		background: "#1E2D37",
		position: "relative",

		"*": {
			color: "#FFF",
		},
	},

	".wrapper": {
		display: "flex",
		flexDirection: "column",
		gap: "30px",
		margin: "50px auto",
		padding: "50px",

		maxWidth: "var(--max-width)",
	},
})

function Home() {
	return (
		<>
			<Header />
			<Main>
				<img src={BG1} id="bg_left" />
				<img src={BG2} id="bg_right" />

				<h1>SINFORM</h1>
				<h2>Semana de Informática</h2>
				<p>30 de Setembro • UESC</p>
				<Botao href="./">Quero participar!</Botao>
			</Main>

			<Section className="inverted" id="Sobre">
				<div className="wrapper">
					<h1>
						Sobre: Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Neque convallis rhoncus proin nisl ut nunc. Consectetur
						mauris, blandit commodo viverra arcu ut in lorem.
					</p>
					<ul>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</li>
						<li>Neque convallis rhoncus proin nisl ut nunc.</li>
						<li>
							Consectetur mauris, blandit commodo viverra arcu ut
							in lorem.
						</li>
					</ul>
					<Botao href="./">Quero participar!</Botao>
				</div>
			</Section>

			<Section id="Palestrantes">
				<div className="wrapper">
					<h1>
						Sobre: Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Neque convallis rhoncus proin nisl ut nunc. Consectetur
						mauris, blandit commodo viverra arcu ut in lorem.
					</p>
					<ul>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</li>
						<li>Neque convallis rhoncus proin nisl ut nunc.</li>
						<li>
							Consectetur mauris, blandit commodo viverra arcu ut
							in lorem.
						</li>
					</ul>
					<Botao href="./">Quero participar!</Botao>
				</div>
			</Section>

			<Section id="Cursos">
				<div className="wrapper">
					<h1>
						Sobre: Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Neque convallis rhoncus proin nisl ut nunc. Consectetur
						mauris, blandit commodo viverra arcu ut in lorem.
					</p>
					<ul>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</li>
						<li>Neque convallis rhoncus proin nisl ut nunc.</li>
						<li>
							Consectetur mauris, blandit commodo viverra arcu ut
							in lorem.
						</li>
					</ul>
					<Botao href="./">Quero participar!</Botao>
				</div>
			</Section>
		</>
	)
}

export default Home
