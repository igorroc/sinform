import { keyframes, styled } from "@stitches/react"

const glitch = keyframes({
	"0%": {
		clipPath: "var(--slice-1)",
		transform: "translate(-20px, -10px)",
	},
	"10%": {
		clipPath: "var(--slice-3)",
		transform: "translate(10px, 10px)",
	},
	"20%": {
		clipPath: "var(--slice-1)",
		transform: "translate(-10px, 10px)",
	},
	"30%": {
		clipPath: "var(--slice-3)",
		transform: "translate(0px, 5px)",
	},
	"40%": {
		clipPath: "var(--slice-2)",
		transform: "translate(-5px, 0px)",
	},
	"50%": {
		clipPath: "var(--slice-3)",
		transform: "translate(5px, 0px)",
	},
	"60%": {
		clipPath: "var(--slice-4)",
		transform: "translate(5px, 10px)",
	},
	"70%": {
		clipPath: "var(--slice-2)",
		transform: "translate(-10px, 10px)",
	},
	"80%": {
		clipPath: "var(--slice-5)",
		transform: "translate(20px, -10px)",
	},
	"90%": {
		clipPath: "var(--slice-1)",
		transform: "translate(-10px, 0px)",
	},
	"100%": {
		clipPath: "var(--slice-1)",
		transform: "translate(0)",
	},
})

const Button = styled("a", {
	backgroundColor: "var(--primary-color)",
	color: "#fff",
	padding: "10px 20px",
	borderRadius: "100px",
	width: "max-content",
	textDecoration: "none",

	transition: "all 300ms ease-out",

	"&:hover": {
		backgroundColor: "#d95589",
	},

	"&.variant": {
		padding: "0 20px",
		borderRadius: "unset",
		// width: "380px",
		// height: "56px",
		// fontSize: "36px",
		background: "linear-gradient(-45deg, transparent 5%, #ea9a4d 5%)",
		border: "0",
		color: "#000",
		letterSpacing: "1px",
		lineHeight: "3em",
		fontSize: "1.5em",
		fontWeight: "bold",
		// fontFamily: "Bebas Neue, cursive",
		boxShadow: "-6px 0px 0px #d44399",
		outline: "transparent",
		position: "relative",

		"&:after": {
			"--slice-0": "inset(50% 50% 50% 50%)",
			"--slice-1": "inset(80% -6px 0 0)",
			"--slice-2": "inset(50% -6px 30% 0)",
			"--slice-3": "inset(10% -6px 85% 0)",
			"--slice-4": "inset(40% -6px 43% 0)",
			"--slice-5": "inset(80% -6px 5% 0)",

			content: "Quero participar!",
			display: "block",
			position: "absolute",
			top: "0",
			left: "0",
			right: "0",
			bottom: "0",
			background:
				"linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #da449f 5%)",
			textShadow: " -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6",
			clipPath: " var(--slice-0)",
		},

		"&:hover": {
			"&:after": {
				animation: `1s ${glitch}`,
				animationTimingFunction: "steps(2, end)",
			},
		},
	},
})

function Botao(props) {
	return (
		<Button
			href={props.href}
			className={props.variant && "variant"}
			style={props.style}
		>
			{props.children}
		</Button>
	)
}

export default Botao
