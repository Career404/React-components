import { useState } from 'react'
import Nav from './components/nav/nav'
import './App.css'
import Collapsible from './components/Collapsible/Collapsible'

function App() {
	const [current, setCurrent] = useState('Intro')
	return (
		<div className="App">
			<Nav>
				<Collapsible
					handle="freecodecamp - long handle for demonstration purposes"
					altHandle="close"
					boxStyle={{
						backgroundColor: '#5a5a5acc',
					}}
				>
					<li>Color Flipper</li>
					<li>Simple Counter</li>
					<li>Reviews/Quotes</li>
					<li>Sidebar</li>
					<li>Modal</li>
					<li>Questions</li>
					<li>Menu</li>
					<li>Video</li>
					<li>Scroll</li>
					<li>Tabs</li>
					<li>Countdown Timer</li>
					<li>Lorem Ipsum</li>
					<li>Grocery Bud</li>
					<li>Slider</li>
				</Collapsible>
				<Collapsible
					handle="My components - long handle for demonstration purposes"
					altHandle="close"
					boxStyle={{
						backgroundColor: 'rgba(30,40,50, 0.8)',
					}}
					maxWidthHandle
				>
					<li>Collapsible</li>
					<li>Navigation</li>
				</Collapsible>
			</Nav>
			<main>
				<div className="info" id="collapsible">
					<h3>{'<Collapsible>'}</h3>
					<p>Example in Navbar on the top of the page</p>
					<p>
						Use li elements as children to use built-in styling, anything else
						to ignore it <br />
						Use maxWidthHandle prop to set width of the element equal to the
						width of default (closed) element. It (almost always) just works
					</p>
					<p>
						hooks: useState for open/close, useRef and useState to set
						maxWidthHandle and custom hook with useRef and useEffect to detect
						clicks outside the element
					</p>
					<br />
					<p>
						interface CProps {'{'} <br />
						children: React.ReactNode <br />
						handle: string <br />
						altHandle: string <br />
						handleStyle: CSSProperties <br />
						maxWidthHandle?: boolean <br />
						{'}'}
					</p>
				</div>
				<div className="info" id="Navbar">
					<h3>{'<Nav>'}</h3>
					<p>Example on the top of the page</p>
					<p>
						Not much of a component - just a {'<nav>'} element with display:
						flex
					</p>
					<p>
						I'll have to come up with a reacon why this is a separate component
						one day
					</p>
				</div>
			</main>
		</div>
	)
}

export default App
