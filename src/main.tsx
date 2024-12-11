import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.scss'
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path='/react-sneakers' element={<App />} />
				<Route path='/react-sneakers/test' element={<h1>Test Page</h1>} />
			</Routes>
		</Router>
	</StrictMode>
)
