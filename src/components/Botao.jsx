import { styled } from "@stitches/react"

const Button = styled("a", {
	backgroundColor: "var(--primary-color)",
	color: "#fff",
	padding: "10px 20px",
	borderRadius: "100px",
	width: "max-content",

	transition: "all 300ms ease-out",

	"&:hover": {
		backgroundColor: "var(--primary-color-darker)",
	},
})

function Botao(props) {
	return <Button href={props.href}>{props.children}</Button>
}

export default Botao
