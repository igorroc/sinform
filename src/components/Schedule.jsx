import { styled } from "../components/Global/Breakpoints"
import React from "react"
import Programacao from "../utils/Programacao"

const Wrapper = styled("div", {
	width: "100%",

	"& .group": {

		".dia": {
			position: "relative",
			display: "flex",
			alignItems: "center",
			marginBottom: "20px",
			marginLeft: "30px",

			"&:before": {
				content: "",
				position: "absolute",
				background: "#fff",
				width: "20px",
				height: "3px",
				marginLeft: "-40px",
			},
		},
		".item": {
			display: "flex",
			flexDirection: "row",
			alignItems: "start",
			padding: "30px 0",
			marginLeft: "20px",

			"& .hora": {
				background: "linear-gradient(to right, #ffd532, #ffb11c)",
				width: "90px",
				height: "80px",
				padding: "5px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",

				"& span": {
					writingMode: "vertical-rl",
				},

				"&:before": {
					content: "",
					position: "absolute",
					left: "-5px",
					width: "10px",
					height: "10px",
					backgroundColor: "#ffd532",
					transform: "rotate(45deg)",
				},
			},

			"& .info": {
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				maxWidth: "500px",

				"& .title": {
					background: "linear-gradient(to top, #ffd532, #ffb11c)",
					width: "100%",
					height: "80px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					fontSize: "2rem",
					marginBottom: "10px",
					textAlign: "center",
					padding: "5px",
				},
			},

			"&.minicurso": {
				"& .hora": {
					background: "linear-gradient(to right, #fa9822, #ee5627)",
					"&:before": {
						backgroundColor: "#fa9822",
					},
				},

				"& .info .title": {
					background: "linear-gradient(to top, #fa9822, #ee5627)",
				},
			},
		},
		".line": {
			position: "relative",
			"&:before": {
				content: "",
				position: "absolute",
				left: 0,
				width: "5px",
				height: "100%",
				backgroundColor: "#fff",
				transform: "translateX(-50%)",
			},
		},

		"@bp2": {
			width: "50%",
			marginLeft: "50%",
			
			"&:nth-child(odd)": {
				marginLeft: "0",

				".dia": {
					justifyContent: "flex-end",
					marginRight: "30px",
					"&:before": {
						marginLeft: "unset",
						marginRight: "-40px",
					},
				},

				".item": {
					flexDirection: "row-reverse",
					marginLeft: "unset",
					marginRight: "20px",

					"& .hora": {
						background:
							"linear-gradient(to left, #ffd532, #ffb11c)",

						"&:before": {
							left: "unset",
							right: "-5px",
						},
					},

					"&.minicurso": {
						"& .hora": {
							background:
								"linear-gradient(to left, #fa9822, #ee5627)",
						},
					},
				},

				".line": {
					"&:before": {
						right: 0,
						left: "unset",
						transform: "translateX(50%)",
					},
				},
			},
		},
	},
})

export default function Schedule() {
	return (
		<Wrapper>
			{Programacao.info.map((info, index) => (
				<div key={index} className="group">
					<div className="line">
						<h2 className="dia">{info.dia}</h2>
						{info.programacao.map((p, index) => (
							<div
								key={index}
								className={p.tipo ? `item ${p.tipo}` : "item"}
							>
								<div className="hora">
									<h3>{p.inicio}</h3>
									<span>•••</span>
									<h3>{p.fim}</h3>
								</div>
								<div className="info">
									<h4 className="title">{p.titulo}</h4>
									<p>{p.descricao}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</Wrapper>
	)
}
