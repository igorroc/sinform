import { Icon } from "@iconify/react"
import { styled } from "@stitches/react"
import gif from "../assets/404.gif"

const Modal = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	width: "100vw",
	height: "100vh",
	gap: "20px",

	a: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "10px",
		background: "#7195e5",
		color: "#fff",
		padding: "10px 20px",
		fontSize: "1.2rem",
		textDecoration: "none",
		borderRadius: "5px",
		transition: "all 300ms ease-out",

		boxShadow: `
			0.9px 1.6px 1.9px rgba(0, 0, 0, 0.04),
			2.2px 4px 5px rgba(0, 0, 0, 0.058),
			4.4px 8.2px 10.6px rgba(0, 0, 0, 0.072),
			9.1px 16.8px 22.2px rgba(0, 0, 0, 0.09),
			25px 46px 60px rgba(0, 0, 0, 0.13)`,

		"*": {
			color: "#fff",
		},

		"&:hover": {
			background: "#5c7fc9",
		},
	},
})

function PageNotFound() {
	return (
		<Modal>
			<img src={gif} alt="" />
			<h1>Parece que você se perdeu...</h1>
			<a href="./">
				<Icon icon="bxs:home" />
				Voltar para casa
			</a>
		</Modal>
	)
}

export default PageNotFound
