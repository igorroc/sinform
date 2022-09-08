import { styled } from "@stitches/react"
import React from "react"
import Botao from "./Botao"
import Logo from "../assets/logo.png"
import { Icon } from "@iconify/react"

const DivFooter = styled("footer", {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: "20px",
	background: "#fff",
	padding: "50px 0",

	".redes": {
		display: "flex",
		gap: "20px",
		fontSize: "2rem",

		a: {
			"&:hover": {
				"*": {
					color: "#FFD532",
				},
			},
		},

		"*": {
			transition: "all 100ms ease-out",
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
			<p>30 de Setembro • UESC</p>
			<Botao href="./inscricao">Quero participar!</Botao>
			<div className="redes">
				<a target="_blank" href="https://www.instagram.com/cacicuesc/">
					<Icon icon="ant-design:instagram-filled" />
				</a>
				<a target="_blank" href="https://linktr.ee/cacicinova">
					<Icon icon="simple-icons:linktree" />
				</a>
			</div>
		</DivFooter>
	)
}
