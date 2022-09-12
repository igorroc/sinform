import { styled } from "../components/Global/Breakpoints"
import Botao from "../components/Botao"
import Header from "../components/Header"
import BG from "../assets/bg2.png"
import assetGif from "../assets/main.gif"
import Schedule from "../components/Schedule"
import Footer from "../components/Footer"
import Palestrantes from "../components/Palestrantes"
import ScrollTop from "../components/ScrollTop"
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
			display: "none",
			position: "absolute",
			right: 0,
			top: "50%",
			transform: "translateY(-50%)",

			"@bp2": {
				display: "block",
			},
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
		alignItems: "center",
		justifyContent: "center",
		gap: "10px",
		width: "90%",
		maxWidth: "var(--max-width)",
		textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
		textAlign: "center",

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

		"@bp2": {
			alignItems: "start",
			textAlign: "left",
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
		padding: "10px",

		maxWidth: "var(--max-width)",

		".lista": {
			marginLeft: "20px",
		},

		"@bp2": {
			padding: "50px",
		},
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

const Legenda = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "10px",
	".leg_item": {
		display: "flex",
		alignItems: "center",
		gap: "10px",

		width: "100%",
		maxWidth: "300px",

		".leg_block": {
			width: "30px",
			height: "30px",
			background: "white",

			"&.apresentacao": {
				background: "linear-gradient(to right, #fbbc04, #cf9b06)",
			},
			"&.live": {
				background: "linear-gradient(to right, #d14c28, #8f270a)",
			},
			"&.minicurso": {
				background: "linear-gradient(to right, #fa9822, #ee5627)",
			},
			"&.palestra": {
				background: "linear-gradient(to right, #22faa4, #15bd7a)",
			},
			"&.pausa": {
				background: "linear-gradient(to right, #46bdc6, #1c7a94)",
			},
		},
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
						<a
							target="_blank"
							href="https://www.youtube.com/SINFORMuesc"
						>
							canal do YouTube
						</a>{" "}
						pela noite.
					</p>
					<p>
						Essa edição também contará com um dia bônus, dedicado ao{" "}
						<b>Campeonato Universitário de Programação (CPU)</b> que
						ocorrerá no dia 1 de outubro. Toda informação sobre o{" "}
						<b>CPU</b> está no site:{" "}
						<a href="https://cpu.tecnojr.com.br" target="_blank">
							cpu.tecnojr.com.br
						</a>
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
					<Legenda>
						<h3>Legenda</h3>
						<div className="leg_item">
							<div className="leg_block apresentacao"></div>
							<p>Apresentação</p>
						</div>
						<div className="leg_item">
							<div className="leg_block minicurso"></div>
							<p>Minicurso</p>
						</div>
						<div className="leg_item">
							<div className="leg_block palestra"></div>
							<p>Palestra</p>
						</div>
						<div className="leg_item">
							<div className="leg_block pausa"></div>
							<p>Pausa</p>
						</div>
						<div className="leg_item">
							<div className="leg_block live"></div>
							<p>Live</p>
						</div>
					</Legenda>
					<Schedule />
				</div>
			</Section>

			<Section id="LineUp">
				<div className="wrapper">
					<h1>Line Up</h1>
					<p>
						Conheça os palestrantes que estarão presentes no evento.
					</p>
					<Palestrantes />
				</div>
			</Section>

			<Section id="CPU" className="inverted">
				<div className="wrapper">
					<h1>Sobre o CPU</h1>
					<p>
						O CPU é um <b>campeonato de programação</b> que ocorre
						todos os anos. O evento é promovido pela <b>TecnoJr</b>{" "}
						(Empresa Júnior de Computação da UESC). Destinado aos
						alunos do curso de graduação na área de Computação e
						afins (Ciência da Computação, Engenharia de Computação,
						Sistemas de Informação, Matemática, etc.), com o
						objetivo de:
					</p>
					<ul className="lista">
						<li>
							Estimular o <b>interesse pela programação</b> de
							computadores
						</li>
						<li>
							Proporcionar a <b>prática</b> nas disciplinas de{" "}
							<b>programação</b>
						</li>
						<li>
							Criar novos <b>desafios</b> aos estudantes das
							Faculdades ou Universidades da região
						</li>
						<li>Entre outros.</li>
					</ul>
					<Botao
						href="https://cpu.tecnojr.com.br"
						target="_blank"
						variant
						style={{
							fontSize: "1em",
							lineHeight: "2.5em",
						}}
					>
						Quero competir!
					</Botao>
				</div>
			</Section>

			<Footer />
		</>
	)
}

export default Home
