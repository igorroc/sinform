import { createStitches } from "@stitches/react"

export const { styled, css } = createStitches({
	media: {
		bp1: "(max-width: 1200px)",
		bp2: "(min-width: 1000px)",
	},
})
