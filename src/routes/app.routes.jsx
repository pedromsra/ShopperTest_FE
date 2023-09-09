import {Routes, Route} from "react-router-dom"
	
import { Home } from "../pages/Home"
import { Updates } from "../pages/Updates"

export function AppRoutes() {
  return (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Updates />} />
  </Routes>
  )
}