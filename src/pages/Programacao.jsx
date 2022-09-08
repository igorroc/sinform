import { styled } from "@stitches/react"
import React from "react"
import download from "../assets/download.gif"

const Main = styled("main", {
	background: "#232323",
	width: "100vw",
	height: "100vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",

	".modal": {
		position: "absolute",
		background: "#fff",
		padding: "30px",
		paddingBottom: "60px",
		maxWidth: "400px",
		textAlign: "center",
		borderRadius: "10px",
		overflow: "hidden",
		boxShadow: `
            0.8px 2.4px 2.5px rgba(0, 0, 0, 0.031),
            1.9px 6px 6.8px rgba(0, 0, 0, 0.044),
            3.9px 12.2px 14.3px rgba(0, 0, 0, 0.056),
            8px 25.2px 30px rgba(0, 0, 0, 0.069),
            22px 69px 81px rgba(0, 0, 0, 0.1)`,

		"&>p": {
			margin: "30px 0",
		},

		".small": {
			fontSize: "0.8rem",
		},

		".bar": {
			position: "absolute",
			left: "0",
			bottom: "0",
			width: "100%",
			height: "50px",
			background: "linear-gradient(to right, #5b78be, #374872)",
		},
	},
})
export default function Programacao() {
	return (
		<Main>
			<div className="modal">
				<div className="img">
					<img src={download} alt="send" />
				</div>
				<h1>Download iniciando!</h1>
				<p>
					O seu download deve começar automaticamente em alguns
					segundos.
				</p>
				<div className="small">
					<p>Caso o download não comece, clique no link:</p>
					<a href="https://sinform.uesc.br/programacao.pdf">
						https://sinform.uesc.br/programacao.pdf
					</a>
				</div>
				<div className="bar"></div>
			</div>
		</Main>
	)
}
