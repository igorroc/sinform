import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import PageNotFound from "./pages/404"
import Home from "./pages/Home"
import Inscricao from "./pages/Inscricao"
import Programacao from "./pages/Programacao"

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/programacao" element={<Programacao />} />
				<Route path="/inscricao" element={<Inscricao />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</Router>
	)
}
