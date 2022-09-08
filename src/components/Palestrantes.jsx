import React from "react"
import { styled } from "@stitches/react"
import img from "../assets/person.webp"
import data from "../utils/Palestrantes"

const Wrapper = styled("div", {
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "center",
	gap: "50px",

	".person": {
		position: "relative",
		".pic": {
			position: "relative",
			width: "300px",
			height: "300px",
			overflow: "hidden",
			transition: "all 500ms ease-out",

			img: {
				filter: "grayscale(100%)",
				width: "100%",
				height: "100%",
				objectFit: "cover",
				transition: "all 700ms ease-out",

				"&:hover": {
					transform: "scale(1.1)",
				},
			},
		},

		".extra": {
			position: "absolute",
			zIndex: "1",
			pointerEvents: "none",
			transition: "all 500ms ease-out",

			"&.leaf": {
				width: "100px",
				height: "100px",
				borderRadius: "50% 0",
			},

			"&.dots": {
				width: "40px",
				height: "40px",
				borderRadius: "50%",
				"&:before": {
					content: "",
					position: "absolute",
					width: "100%",
					height: "100%",
					borderRadius: "50%",
					// background: "",
					top: "calc(-100% - 10px)",
				},
				"&:after": {
					content: "",
					position: "absolute",
					width: "100%",
					height: "100%",
					borderRadius: "50%",
					// background: "",
					top: "calc(-200% - 20px)",
				},
			},

			"&.line": {},

			"&.blue": {
				background: "#00a4bd",
				"&:before": {
					background: "#00a4bd",
				},
				"&:after": {
					background: "#00a4bd",
				},
			},
			"&.yellow": {
				background: "#f5c26b",
				"&:before": {
					background: "#f5c26b",
				},
				"&:after": {
					background: "#f5c26b",
				},
			},
			"&.green": {
				background: "#00bda5",
				"&:before": {
					background: "#00bda5",
				},
				"&:after": {
					background: "#00bda5",
				},
			},
			"&.red": {
				background: "#ff5c35",
				"&:before": {
					background: "#ff5c35",
				},
				"&:after": {
					background: "#ff5c35",
				},
			},

			"&.TR": {
				top: "0",
				right: "0",
			},
			"&.BL": {
				bottom: "0",
				left: "0",
			},
		},

		"&:hover": {
			".pic img": {
				filter: "grayscale(0%)",
			},

			".TR": {
				transform: "translate(100%, -100%)",
			},
			".BL": {
				transform: "translate(-100%, 100%)",
			},
		},
	},
})

export default function Palestrantes() {
	return (
		<Wrapper>
			{data.info.map((item, index) => (
				<div className="person" key={index} id={item.id}>
					<div className="pic">
						<div className={item.variacao}></div>

						<img src={item.foto} alt={item.nome} />
					</div>
					<h3>{item.nome}</h3>
					<p>{item.descricao}</p>
				</div>
			))}
		</Wrapper>
	)
}
