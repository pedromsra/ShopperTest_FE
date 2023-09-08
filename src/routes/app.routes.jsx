import {Routes, Route} from "react-router-dom"
	
import { Home } from "../pages/Home"
import { Updates } from "../pages/Updates"

export function AppRoutes() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/updates" element={<Updates />} />
  </Routes>
  )
}