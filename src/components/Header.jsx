import { styled } from "../components/Global/Breakpoints"
import Logo from "../assets/logo.png"
import LogoSmall from "../assets/favicon.png"
import Botao from "./Botao"
import MaxWrapper from "./Global/MaxWrapper"
import { useEffect, useState } from "react"
import { Icon } from "@iconify/react"

const Space = styled("div", {
	height: "100px",
})

const Head = styled("header", {
	position: "fixed",
	zIndex: "100",
	top: "0",
	width: "100vw",
	height: "80px",
	backgroundColor: "#fffa",
	backdropFilter: "blur(50px)",
})

const HeaderContent = styled("div", {
	display: "flex",
	height: "80px",
	justifyContent: "space-between",
	alignItems: "center",

	a: {
		img: {
			height: "32px",
		},
	},

	".hamburguer": {
		position: "relative",
		width: "30px",
		background: "transparent",
		border: "none",
		cursor: "pointer",

		span: {
			display: "block",
			width: "100%",
			height: "3px",
			backgroundColor: "var(--primary-color)",
			margin: "5px 0",
			transition: "all 125ms ease-out",
		},

		"&.active": {
			span: {
				backgroundColor: "var(--cancel-color)",
			},
			"span:nth-child(1)": {
				transform: "translateY(8px) rotate(45deg)",
			},
			"span:nth-child(2)": {
				opacity: 0,
			},
			"span:nth-child(3)": {
				transform: "translateY(-8px) rotate(-45deg)",
			},
		},
	},
})

const LinkList = styled("div", {
	position: "absolute",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",

	top: "80px",
	right: "0",
	width: "70vw",
	height: "calc(100vh - 80px)",
	zIndex: 10,

	backgroundColor: "#fff",
	transition: "all 600ms ease-out",

	"a:first-child": {
		marginTop: "20px",
	},
	"a:not(:last-child)": {
		width: "100%",
		padding: "10px 0",
		textDecoration: "none",
		textAlign: "center",
		fontWeight: "600",

		"&:hover": {
			backgroundColor: "#f8f8f8",
		},
	},
	"a:last-child": {
		marginTop: "auto",
		marginBottom: "20px",
	},

	"&:before": {
		content: "",
		position: "absolute",
		top: "0",
		left: "-30vw",
		width: "30vw",
		height: "100%",
		background: "linear-gradient(to left, #0007, #0000)",
		zIndex: -10,
	},

	"&.hidden": {
		transform: "translateX(100vw)",
	},

	"@bp2": {
		position: "unset",
		height: "unset",
		width: "unset",
		backgroundColor: "unset",
		backdropFilter: "unset",
		display: "flex",
		flexDirection: "row",
		gap: "20px",
		padding: "0",
		alignItems: "center",

		"&:before": {
			content: "unset",
		},

		"a:first-child": {
			marginTop: "unset",
		},
		"a:last-child": {
			marginTop: "unset",
			marginBottom: "unset",
			width: "200px",
		},

		"&.hidden": {
			transform: "unset",
		},
	},
})

function Header() {
	const [isDesktop, setIsDesktop] = useState(
		window.matchMedia("(min-width: 1000px)").matches
	)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		window
			.matchMedia("(min-width: 1000px)")
			.addEventListener("change", (e) => setIsDesktop(e.matches))
	}, [])

	function menuToggle() {
		console.log("menuToggle")
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<>
			<Space id="scrollTop" />
			<Head>
				<MaxWrapper>
					<HeaderContent>
						<a href="./">
							{isDesktop ? (
								<img src={Logo} alt="Logo do Sinform" />
							) : (
								<img src={LogoSmall} alt="Logo do Sinform" />
							)}
						</a>
						{!isDesktop && (
							<button
								className={
									"hamburguer" + (isMenuOpen ? " active" : "")
								}
								id="hamburguer"
								onClick={menuToggle}
							>
								<span></span>
								<span></span>
								<span></span>
							</button>
						)}
						<LinkList
							id="navlist"
							className={!isMenuOpen && "hidden"}
						>
							<a href="./#scrollTop">Inicio</a>
							<a href="./#Sobre">Sobre</a>
							<a href="./#Programacao">Programação</a>
							<a href="./#Palestrantes">Palestrantes</a>
							<a href="./#Cursos">Cursos</a>
							<Botao href="./">Quero participar!</Botao>
						</LinkList>
					</HeaderContent>
				</MaxWrapper>
			</Head>
		</>
	)
}

export default Header
