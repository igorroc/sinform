import { Icon } from "@iconify/react"
import { styled } from "@stitches/react"
import React, { useEffect, useState } from "react"

const Floating = styled("a", {
	position: "fixed",
	zIndex: "100",
	bottom: "20px",
	right: "20px",
	width: "50px",
	height: "50px",
	borderRadius: "50%",
	background: "linear-gradient(to right, #d4419b, #ea9c4b)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer",

	fontWeight: "bold",
	fontSize: "2.5rem",
	transition: "all 0.3s ease-in-out",


	"&:hover": {
		transform: "scale(1.1)",
	},
	"*": {
		color: "#fff",
	},

	"&.hide": {
		transform: "scale(0)",
	},
})

export default function ScrollTop() {
	const [scrollPosition, setScrollPosition] = useState(0)

	const handleScroll = () => {
		const position = window.pageYOffset
		setScrollPosition(position)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<Floating href="#scrollTop" className={scrollPosition < 100 && "hide"}>
			<Icon icon="bx:up-arrow-alt" />
		</Floating>
	)
}
