import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import PageNotFound from "./pages/404"
import Home from "./pages/Home"

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</Router>
	)
}
