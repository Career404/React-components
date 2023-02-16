import React from 'react'
import './nav.css'

interface Props {
	children: React.ReactNode
}
export default function Nav({ children }: Props) {
	return <nav className="Navbar">{children}</nav>
}
