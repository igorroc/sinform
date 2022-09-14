import { styled } from "../components/Global/Breakpoints"
import React, { useEffect, useState } from "react"
import Programacao from "../../public/Programacao"

import Fade from "react-reveal/Fade"

const Wrapper = styled("div", {
	width: "100%",

	".links": {
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center",
		gap: "10px",
		marginBottom: "40px",

		a: {
			color: "#fff",
			transition: "all 300ms ease-out",

			"&:hover": {
				color: "var(--primary-color)",
			},
		},
	},

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
				position: "absolute",
				background: "linear-gradient(to right, #fbbc04, #cf9b06)",
				width: "60px",
				top: 0,
				bottom: 0,
				zIndex: -1,
				left: "-70px",
				padding: "0 5px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "1rem",

				"& span": {
					writingMode: "vertical-rl",
				},

				"&:before": {
					content: "",
					position: "absolute",
					left: "-5px",
					width: "10px",
					height: "10px",
					backgroundColor: "#fbbc04",
					transform: "rotate(45deg)",
				},
			},

			"& .info": {
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				// maxWidth: "500px",
				textAlign: "justify",

				"& .title": {
					position: "relative",
					background: "linear-gradient(to top, #fbbc04, #d09c06)",
					width: "calc(100% - 90px)",
					minHeight: "80px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					fontSize: "2rem",
					marginBottom: "10px",
					marginLeft: "90px",
					textAlign: "center",
					padding: "5px",
				},

				".content": {
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
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

			"&.palestra": {
				"& .hora": {
					background: "linear-gradient(to right, #22faa4, #15bd7a)",
					"&:before": {
						backgroundColor: "#22faa4",
					},
				},

				"& .info .title": {
					background: "linear-gradient(to top, #22faa4, #15bd7a)",
				},
			},

			"&.pausa": {
				"& .hora": {
					background: "linear-gradient(to right, #46bdc6, #1c7a94)",
					"&:before": {
						backgroundColor: "#46bdc6",
					},
				},

				"& .info .title": {
					background: "linear-gradient(to top, #46bdc6, #1c7a94)",
				},
			},

			"&.live": {
				"& .hora": {
					background: "linear-gradient(to right, #d14c28, #8f270a)",
					"&:before": {
						backgroundColor: "#d14c28",
					},
				},

				"& .info .title": {
					background: "linear-gradient(to top, #d14c28, #8f270a)",
				},
			},
		},
		".line": {
			position: "relative",
			overflow: "hidden",
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
			width: "calc(50% + 2.9px);",
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
						left: "unset",
						right: "-70px",
						background:
							"linear-gradient(to left, #ffd532, #ffb11c)",

						"&:before": {
							left: "unset",
							right: "-5px",
						},
					},

					"& .info .title": {
						marginRight: "90px",
						marginLeft: "unset",
					},

					"& .content": {
						marginRight: "90px",
						marginLeft: "unset",
					},

					"&.minicurso": {
						"& .hora": {
							background:
								"linear-gradient(to left, #fa9822, #ee5627)",
						},
					},
					"&.palestra": {
						"& .hora": {
							background:
								"linear-gradient(to left, #22faa4, #15bd7a)",
						},
					},

					"&.pausa": {
						"& .hora": {
							background:
								"linear-gradient(to left, #46bdc6, #1c7a94)",
						},
					},

					"&.live": {
						"& .hora": {
							background:
								"linear-gradient(to left, #d14c28, #8f270a)",
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

			".content": {
				width: "calc(100% - 90px)",
				marginLeft: "90px",
			},
		},
	},
})

export default function Schedule() {
	const [isDesktop, setIsDesktop] = useState(
		window.matchMedia("(min-width: 1000px)").matches
	)

	useEffect(() => {
		window
			.matchMedia("(min-width: 1000px)")
			.addEventListener("change", (e) => setIsDesktop(e.matches))
	}, [])

	return (
		<Wrapper>
			<div className="links">
				Links rápidos:
				<a href="#28-09">28/09</a>
				<a href="#29-09">29/09</a>
				<a href="#30-09">30/09</a>
				<a href="#01-10">01/10</a>
			</div>
			{Programacao.info.map((info, indexGlobal) => (
				<div key={indexGlobal} className="group">
					<div className="line">
						<h2 className="dia" id={info.id}>
							{info.dia}
						</h2>
						{info.programacao.map((p, index) => (
							<Fade
								left={indexGlobal % 2 == 0 || !isDesktop}
								right={indexGlobal % 2 == 1 && isDesktop}
								key={index}
							>
								<div
									className={
										p.tipo ? `item ${p.tipo}` : "item"
									}
								>
									<div className="info">
										<div className="title">
											<div className="hora">
												<h3>{p.inicio}</h3>
												<span>•••</span>
												<h3>{p.fim}</h3>
											</div>
											<h4>{p.titulo}</h4>
										</div>
										<div className="content">
											{p.palestrante && (
												<a href={p.link}>
													{p.palestrante}
												</a>
											)}
											{p.palestrante == "A definir" ? (
												<a
													href="https://instagram.com/cacicuesc"
													target="_blank"
												>
													Clique aqui para saber mais
												</a>
											) : (
												<p>{p.descricao}</p>
											)}
										</div>
									</div>
								</div>
							</Fade>
						))}
					</div>
				</div>
			))}
		</Wrapper>
	)
}
