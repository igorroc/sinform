import React from "react"
import { styled } from "@stitches/react"
import img from "../assets/person.webp"
import data from "../../public/Palestrantes"

const Wrapper = styled("div", {
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "center",
	gap: "50px",

	".person": {
		position: "relative",
		maxWidth: "300px",
		height: "max-content",
		".pic": {
			position: "relative",
			width: "300px",
			height: "300px",
			overflow: "hidden",
			marginBottom: "20px",
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
					top: "calc(-100% - 10px)",
				},
				"&:after": {
					content: "",
					position: "absolute",
					width: "100%",
					height: "100%",
					borderRadius: "50%",
					top: "calc(100% + 20px)",
				},
			},

			"&.triangle": {
				width: "200px",
				height: "200px",

				"&.TR": {
					transform: "translate(50%, -50%) rotate(45deg)",
				},
				"&.TL": {
					transform: "translate(-50%, -50%) rotate(45deg)",
				},
				"&.BR": {
					transform: "translate(50%, 50%) rotate(45deg)",
				},
				"&.BL": {
					transform: "translate(-50%, 50%) rotate(45deg)",
				},
			},

			"&.blue": {
				background: "#00a4bd",
				"&:before": {
					background: "#00a4bd",
				},
				"&:after": {
					background: "#00a4bd",
				},
			},
			"&.orange": {
				background: "#f29249",
				"&:before": {
					background: "#f29249",
				},
				"&:after": {
					background: "#f29249",
				},
			},
			"&.yellow": {
				background: "#f2ef49",
				"&:before": {
					background: "#f2ef49",
				},
				"&:after": {
					background: "#f2ef49",
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
				background: "#eb3941",
				"&:before": {
					background: "#eb3941",
				},
				"&:after": {
					background: "#eb3941",
				},
			},

			"&.TR": {
				top: "0",
				right: "0",
			},
			"&.TL": {
				top: "0",
				left: "0",
			},
			"&.BL": {
				bottom: "0",
				left: "0",
			},
			"&.BR": {
				bottom: "0",
				right: "0",
			},
		},

		"&:hover": {
			".pic img": {
				filter: "grayscale(0%)",
			},

			".TR": {
				transform: "translate(100%, -100%)",
			},
			".TL": {
				transform: "translate(-100%, -100%)",
			},
			".BL": {
				transform: "translate(-100%, 100%)",
			},
			".BR": {
				transform: "translate(100%, 100%)",
			},

			".leaf": {
				transform: "scale(0)",
				"&.TR": {
					transformOrigin: "100% 0",
				},
				"&.TL": {
					transformOrigin: "0 0",
				},
				"&.BR": {
					transformOrigin: "100% 100%",
				},
				"&.BL": {
					transformOrigin: "0 100%",
				},
			},

			".triangle": {
				"&.TR": {
					transform: "translate(100%, -100%)",
				},
				"&.TL": {
					transform: "translate(-100%, -100%)",
				},
				"&.BL": {
					transform: "translate(-100%, 100%)",
				},
				"&.BR": {
					transform: "translate(100%, 100%)",
				},
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
