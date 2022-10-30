import {ThemeProvider} from "@mui/material";
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App'
import {mainTheme} from "./themes/mainTheme.js"
import './index.css'

ReactDOM.createRoot(document.getElementById('root'))
		.render(
		  <React.StrictMode>
			<ThemeProvider theme = {mainTheme}>
			  <BrowserRouter>
				<App/>
			  </BrowserRouter>
			</ThemeProvider>
		  </React.StrictMode>
		)
