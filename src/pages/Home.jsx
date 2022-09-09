import { styled } from "../components/Global/Breakpoints"
import Botao from "../components/Botao"
import Header from "../components/Header"
import BG from "../assets/bg2.png"
import Wave from "../assets/bg-02.png"
import asset from "../assets/main.png"
import assetGif from "../assets/main.gif"
import Schedule from "../components/Schedule"
import Footer from "../components/Footer"
import Palestrantes from "../components/Palestrantes"
import ScrollTop from "../components/ScrollTop"
import { useEffect, useState } from "react"
import useWindowDimensions from "../hooks/useWindowDimentions"

const Main = styled("main", {
	position: "relative",
	minHeight: "555px",

	h1: {
		color: "#fff",
		fontSize: "5rem",
	},

	img: {
		top: "0",
		zIndex: "-1",

		"&#bg": {
			width: "100%",
			height: "100%",
			minHeight: "555px",
			maxHeight: "80vh",
			objectFit: "fill",
		},

		"&#asset": {
			position: "absolute",
			right: 0,
			top: "50%",
			transform: "translateY(-50%)",
		},
	},

	".info": {
		position: "absolute",
		top: "100px",
		left: "50%",
		transform: "translateX(-50%)",
		zIndex: "1",

		display: "flex",
		flexDirection: "column",
		alignItems: "start",
		justifyContent: "center",
		gap: "10px",
		width: "90%",
		maxWidth: "var(--max-width)",
		textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",

		"*": {
			color: "#fff",
		},

		h1: {
			fontSize: "3rem",
			span: {
				fontSize: "5rem",
				display: "block",
				width: "max-content",
				padding: "0 50px",
				background: "linear-gradient(to right, #d4419b, #ea9c4b)",
			},
		},
	},
})

const Section = styled("section", {
	// background: "#ECF1FC",
	position: "relative",

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
		margin: "0 auto",
		padding: "50px",

		maxWidth: "var(--max-width)",
	},

	"&>img": {
		position: "absolute",
		top: "-90%",
		left: "0",
		width: "100%",
		height: "100%",
		maxHeight: "80vh",
		objectFit: "fill",
	},
})

function Home() {
	const { height, width } = useWindowDimensions()

	return (
		<>
			<Header />
			<ScrollTop />
			<Main>
				<img src={BG} id="bg" />
				<div className="info">
					{/* <img src={asset} id="asset" /> */}
					<img src={assetGif} id="asset" />

					<h1 style={{ fontSize: width < 600 && "1em" }}>
						Bem-vindo(a) ao{" "}
						<span style={{ fontSize: width < 600 && "2em" }}>
							MetaVerso
						</span>
					</h1>
					<h2>SINFORM • Semana de Informática</h2>
					<p>28 de Setembro • UESC</p>
					<Botao
						href="./inscricao"
						variant
						style={{
							fontSize: width < 600 && "1em",
							lineHeight: width < 600 && "2.5em",
						}}
					>
						Quero participar!
					</Botao>
				</div>
			</Main>

			<Section id="Sobre">
				{/* <img src={Wave} alt="" /> */}
				<div className="wrapper">
					<h1>Sobre a SINFORM</h1>
					<p>
						A <b>SINFORM</b> é um evento anual promovido pelo Centro
						Acadêmico de Ciência da Computação (<b>CACIC</b>), pelo
						Colegiado de Ciência da Computação (<b>COLCIC</b>) e
						pelo Departamento de Ciências Exatas e Tecnológicas (
						<b>DCET</b>) da Universidade Estadual de Santa Cruz (
						<b>UESC</b>).
					</p>
					<p>
						O evento visa promover o <b>intercâmbio científico</b>{" "}
						entre estudantes, professores, empresários e
						pesquisadores da área de computação em nível nacional,
						bem como sua atualização técnico-científica, divulgando
						o <b>potencial dos futuros profissionais da região</b>.
						Além disso, o evento oferece{" "}
						<b>minicursos e palestras</b> à comunidade, contribuindo
						para a <b>inclusão digital</b> e promovendo a{" "}
						<b>difusão do conhecimento</b>.
					</p>
					<p>
						O <b>SINFORM 2022</b> acontecerá nos dias 28, 29 e 30 de
						setembro, e sua programação contará com minicursos pela
						manhã, palestras a tarde e Lives em nosso{" "}
						<a target="_blank" href="https://www.youtube.com/SINFORMuesc">
							canal do YouTube
						</a>{" "}
						pela noite.
					</p>
					<p>
						Essa edição também contará com um dia bônus, dedicado ao{" "}
						<b>Campeonato Universitário de Programação (CPU)</b> que
						ocorrerá no dia 1 de outubro.
					</p>

					<Botao href="./inscricao">Quero participar!</Botao>
				</div>
			</Section>

			<Section id="Programacao" className="inverted">
				<div className="wrapper">
					<h1>Programação</h1>
					<p>
						Confira a programação do evento, ou acompanhe a planilha
						em tempo real da programação{" "}
						<a href="/programacao">clicando aqui</a>
					</p>
					<Schedule />
				</div>
			</Section>

			<Section id="Palestrantes">
				<div className="wrapper">
					<h1>Palestrantes</h1>
					<p>
						Conheça os palestrantes que estarão presentes no evento.
					</p>
					<Palestrantes />
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
