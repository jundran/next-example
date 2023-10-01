"use client"
import { ReactNode, createContext, useContext, useState } from 'react'

const ThemeContext = createContext<ThemeContextType>({
	mode: 'light',
	toggle: () => { throw new Error('Function not yet implemented') }
})

type Theme = 'dark' | 'light'
export function ThemeProvider({ children }: { children: ReactNode }) {
	const [mode, setMode] = useState<Theme>('light')

	return (
		<ThemeContext.Provider value={{
			mode,
			toggle: () => setMode(prev => prev === 'light' ? 'dark' : 'light')
		}}>
			<div className={`theme ${mode}`}>
				{children}
			</div>
		</ThemeContext.Provider>
	)
}

export default function useTheme() {
	return useContext(ThemeContext)
}

type ThemeContextType = {
	mode: Theme
	toggle: () => void
}
