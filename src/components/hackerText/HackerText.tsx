import React from 'react'
import './HackerText.css'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let interval: any = null

interface Props {
	text: string
	block?: boolean
}

export default function HackerText({
	text = 'HackerText',
	block = false,
}: Props) {
	const HackerRef = React.useRef<HTMLDivElement>(null)
	const handleMouseOver = () => {
		let iteration = 0
		const Hacker = HackerRef.current
		if (Hacker) {
			clearInterval(interval)
			interval = setInterval(() => {
				const value = Hacker?.dataset?.value
				if (!value) {
					return
				}
				Hacker.innerText = value
					.split('')
					.map((letter, index) => {
						if (index < iteration) {
							return value[index]
						}
						return letters[Math.floor(Math.random() * 26)]
					})
					.join('')
				if (iteration >= value.length) {
					clearInterval(interval)
				}
				iteration += 1 / 3
			}, 30)
		}
	}
	return (
		<span
			className="HackerText"
			style={block ? { display: 'block' } : { display: 'inline-block' }}
			ref={HackerRef}
			onMouseOver={handleMouseOver}
			data-value={text}
		>
			{text}
		</span>
	)
}
