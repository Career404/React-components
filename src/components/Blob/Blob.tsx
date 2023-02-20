import React from 'react'
import './Blob.css'

export default function Blob({
	colors = 'linear-gradient(to bottom right, #00425A, #1F8A70, #BFDB38, #FC7300)',
	blobStyle,
	blur,
	blurStyle,
}: React.HTMLAttributes<HTMLDivElement> & {
	colors?: string
	blobStyle?: React.CSSProperties
	blur?: React.CSSProperties['filter']
	blurStyle?: React.CSSProperties
}) {
	const blobRef = React.useRef<HTMLDivElement>(null)

	const handlePointerMove = React.useCallback(
		(event: PointerEvent) => {
			const { clientX, clientY } = event
			const blob = blobRef.current
			if (blob) {
				blob.animate(
					{
						left: `${clientX}px`,
						top: `${clientY}px`,
					},
					{ duration: 2500, fill: 'forwards' }
				)
			}
		},
		[blobRef]
	)

	React.useEffect(() => {
		window.addEventListener('pointermove', handlePointerMove)
		return () => {
			window.removeEventListener('pointermove', handlePointerMove)
		}
	}, [handlePointerMove])

	return (
		<div className="blur" style={{ filter: blur, ...blurStyle }}>
			<div
				className="blob"
				ref={blobRef}
				style={{ background: colors, ...blobStyle }}
			></div>
		</div>
	)
}
