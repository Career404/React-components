import React from 'react'
import './Hero.css'

interface Props {
	title?: string
	subtitle?: string
	textColor?: React.CSSProperties['color']
	image?: React.CSSProperties['backgroundImage']
	style?: React.CSSProperties
	children?: React.ReactNode
}

export default function Hero({
	title,
	subtitle,
	textColor,
	image = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(126, 126, 126, 0.5)), url("https://picsum.photos/800/400")',
	style,
	children,
}: Props) {
	return (
		<div className="Hero" style={{ ...style, backgroundImage: image }}>
			<div className="Text" style={{ color: textColor }}>
				{title ? <h2>{title}</h2> : null}
				{subtitle ? <h3>{subtitle}</h3> : null}
			</div>
			{children}
		</div>
	)
}
