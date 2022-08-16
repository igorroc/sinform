import { styled } from "@stitches/react"

const Wrapper = styled("div", {
	width: "85%",
	maxWidth: "var(--max-width)",
	margin: "0 auto",
})

function MaxWrapper(props) {
	return <Wrapper>{props.children}</Wrapper>
}

export default MaxWrapper
