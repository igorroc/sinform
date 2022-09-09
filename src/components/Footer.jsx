import { styled } from "@stitches/react"
import React from "react"
import Botao from "./Botao"
import Logo from "../assets/logo.png"
import { Icon } from "@iconify/react"

const DivFooter = styled("footer", {
	position: "relative",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: "20px",
	background: "#fff",
	paddingTop: "50px",

	".redes": {
		display: "flex",
		gap: "20px",
		fontSize: "2rem",

		a: {
			"&:hover": {
				"*": {
					color: "#d95589",
				},
			},
		},

		"*": {
			transition: "all 100ms ease-out",
		},
	},

	"#copy": {
		width: "100%",
		marginTop: "20px",
		fontSize: "0.8rem",
		background: "#232323",
		color: "#fff",
		padding: "10px",
		textAlign: "center",

		"& a": {
			color: "#00bda5",
		},
	},
})

export default function Footer() {
	return (
		<DivFooter>
			<a href="./">
				<img src={Logo} alt="Logo do Sinform" />
			</a>
			<h3>Semana de Informática</h3>
			<p>28 de Setembro • UESC</p>
			<Botao href="./inscricao">Quero participar!</Botao>
			<div className="redes">
				<a target="_blank" href="https://www.instagram.com/cacicuesc/">
					<Icon icon="ant-design:instagram-filled" />
				</a>
				<a target="_blank" href="https://linktr.ee/cacicinova">
					<Icon icon="simple-icons:linktree" />
				</a>
			</div>
			<p id="copy">
				Site desenvolvido com muito ☕ e ❤️ por{" "}
				<a href="https://ilrocha.com" target="_blank">
					Igor Rocha
				</a>
			</p>
		</DivFooter>
	)
}
