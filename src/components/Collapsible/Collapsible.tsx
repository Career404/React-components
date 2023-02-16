import React, { CSSProperties } from 'react'
import './Collapsible.css'

function detectOutsideClick<T extends HTMLElement>(callback: () => void) {
	const ref = React.useRef<T>(null)
	React.useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback()
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref, callback])
	return ref
}
interface CProps {
	children: React.ReactNode
	handle: string
	altHandle: string
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
			console.log(ref)
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
			{!open ? handle : altHandle}
			<ul>{children}</ul>
		</div>
	)
}
