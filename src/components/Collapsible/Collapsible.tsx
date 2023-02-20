import React, { CSSProperties } from 'react'
import detectOutsideClick from '../../hooks/DetectOutsideClick'
import './Collapsible.css'

interface CProps {
	children: React.ReactNode
	handle?: string
	altHandle?: string
	boxStyle?: CSSProperties
	maxWidthHandle?: boolean
}
export default function Collapsible({
	children = 'Hello there!',
	handle = 'click me',
	altHandle = handle,
	boxStyle,
	maxWidthHandle = false,
}: CProps) {
	const [open, setOpen] = React.useState(false)
	const [elementWidth, setElementWidth] = React.useState('unset')
	function handleClick() {
		if (open) {
			setOpen(!open)
		}
	}
	const ref: React.RefObject<HTMLDivElement> = detectOutsideClick(handleClick)
	React.useEffect(() => {
		if (maxWidthHandle) {
			setElementWidth(ref.current?.offsetWidth + 'px')
		}
	}, [maxWidthHandle])

	return (
		<div
			style={{ ...boxStyle, minWidth: elementWidth }}
			onClick={() => {
				setOpen(!open)
			}}
			ref={ref}
			className={`handle ${open ? 'Collapsible_opened' : 'Collapsible_closed'}`}
		>
			<span>{!open ? handle : altHandle}</span>
			<ul>{children}</ul>
		</div>
	)
}
