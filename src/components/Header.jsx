import { styled } from "@stitches/react"
import Logo from "../assets/logo.png"
import Botao from "./Botao"
import MaxWrapper from "./Global/MaxWrapper"

const Space = styled("div", {
	height: "100px",
})

const Head = styled("header", {
	position: "fixed",
	zIndex: "100",
	top: "0",
	width: "100vw",
	backgroundColor: "#fffa",
	backdropFilter: "blur(50px)",
})

const HeaderContent = styled("div", {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "20px 0",
})

const LinkList = styled("ul", {
	display: "flex",
	gap: "20px",
	alignItems: "center",
})

function Header() {
	return (
		<>
			<Space id="scrollTop" />
			<Head>
				<MaxWrapper>
					<HeaderContent>
						<a href="./">
							<img src={Logo} alt="Logo do Sinform" />
						</a>
						<LinkList>
							<a href="./#scrollTop">Inicio</a>
							<a href="./#Sobre">Sobre</a>
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
