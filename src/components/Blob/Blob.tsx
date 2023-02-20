import React from 'react'
import './Blob.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	colors?: React.CSSProperties['background']
	style?: React.CSSProperties
	blur?: React.CSSProperties['filter']
}

export default function Blob({
	colors = 'linear-gradient(to bottom right, #00425A, #1F8A70, #BFDB38, #FC7300)',
	style,
	blur,
}: Props) {
	React.useEffect(() => {
		const handlePointerMove = (event: PointerEvent) => {
			const { clientX, clientY } = event
			const blob = document.getElementById('blob')
			if (blob) {
				blob.animate(
					{
						left: `${clientX}px`,
						top: `${clientY}px`,
					},
					{ duration: 2500, fill: 'forwards' }
				)
			}
		}
		window.addEventListener('pointermove', handlePointerMove)

		return () => {
			window.removeEventListener('pointermove', handlePointerMove)
		}
	}, [])
	return (
		<div id="blur" style={{ filter: blur }}>
			<div id="blob" style={{ background: colors, ...style }}></div>
		</div>
	)
}
