import { styled } from "../components/Global/Breakpoints"
import Botao from "../components/Botao"
import Header from "../components/Header"
import BG1 from "../assets/bg_tex1.png"
import BG2 from "../assets/bg_tex2.png"
import Schedule from "../components/Schedule"
import Footer from "../components/Footer"

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

			"@bp1": {
				left: "-120px",
			},
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

			<Section id="Sobre">
				<div className="wrapper">
					<h1>Sobre a SINFORM</h1>
					<p>
						O <b>SINFORM</b> é a Semana de Informática promovida
						pela UESC em parceria com o curso de Ciência da
						Computação. O evento reúne diversos profissionais do
						ramo da tecnologia que promoverão palestras e
						minicursos. Em sua XX (vigésima) edição o <b>SINFORM</b>{" "}
						trará discussões a respeito da sua temática principal:{" "}
						<b>Metaverso</b>; mostrando de que forma aqueles, que
						almejam seguir uma carreira na área da tecnologia,
						poderão se aprofundar e aproveitar dessa nova realidade.
					</p>
					<p>
						O <b>SINFORM</b> 2022 acontecerá nos dias 28, 29 e 30 de
						setembro, e sua programação contará com minicursos pela
						manhã, palestras a tarde e Lives em nosso canal do
						YouTube pela noite.
					</p>
					<p>
						Essa edição também contará com um dia bônus, dedicado ao
						Campeonato Universitário de Programação (CPU) que
						ocorrerá no dia 1 de outubro.
					</p>
					<p> Participe! O evento é 100% ONLINE e GRATUITO.</p>

					<Botao href="./">Quero participar!</Botao>
				</div>
			</Section>

			<Section id="Programacao" className="inverted">
				<div className="wrapper">
					<h1>Programação</h1>
					<p>
						Confira a programação do evento, ou baixe o pdf{" "}
						<a href="/download">aqui</a>
					</p>
					<Schedule />
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

			<Section id="Cursos" className="inverted">
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

			<Footer />
		</>
	)
}

export default Home
