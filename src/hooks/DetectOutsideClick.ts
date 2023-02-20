import React from 'react'
export default function detectOutsideClick<T extends HTMLElement>(
	callback: () => void
) {
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
