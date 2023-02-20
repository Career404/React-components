import { useState } from 'react'
import Nav from './components/nav/nav'
import './App.css'
import Collapsible from './components/Collapsible/Collapsible'
import Blob from './components/Blob/Blob'

function App() {
	const [collapsibleSelect, setcollapsibleSelect] = useState('')
	function handleCollapsible(data: string) {
		setcollapsibleSelect(data)
	}
	return (
		<div className="App">
			<Nav>
				<Collapsible
					handle="freecodecamp"
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
				<Collapsible handle="Hyperplexed" altHandle="close">
					<li>Blob</li>
					<li>HackerText</li>
				</Collapsible>
				<Collapsible
					handle="My components"
					altHandle="close"
					boxStyle={{
						backgroundColor: 'rgba(30,40,50, 0.8)',
					}}
				>
					<p>Collapsible</p>
					<p>Navigation</p>
				</Collapsible>
			</Nav>
			<main>
				<div className="info" id="Collapsible">
					<h3>{'<Collapsible>'}</h3>
					<p>Example in Navbar on the top of the page</p>
					<p>Keyboard-focusable!</p>
					<p>
						Use li elements as children to use built-in styling, anything else
						to ignore it <br />
					</p>
					<p>
						Takes callback function - default console.logs selected textContent.
					</p>
					<p>
						hooks: useState for open/close, custom hook with useRef and
						useEffect to detect clicks outside the element, useEffect to handle
						keyboard controls
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
				<div className="info" id="Navigation">
					<h3>{'<Nav>'}</h3>
					<p>Example on the top of the page</p>
					<p>
						Not much of a component - just a {'<nav>'} element with display:
						flex
					</p>
					<p>
						I'll have to come up with a reason why this is a separate component
						one day
					</p>
				</div>
				<div className="info" id="Blob">
					<h3>{'<Blob>'}</h3>
					<p>
						This beatiful cursor-following shape-changing color-gradienting
						background thingy is something I moved to React from{' '}
						<a href="https://www.youtube.com/watch?v=kySGqoU7X-s&ab_channel=Hyperplexed">
							this video
						</a>{' '}
						by <a href="https://www.youtube.com/@Hyperplexed">@Hyperplexed</a>
					</p>
					<p>
						It's beatiful, isn't it? I kind of like the concentric circles
						though, so I left blur as layer
					</p>
					<p>Props are:</p>
					<p>
						colors = 'linear-gradient(to bottom right, #00425A, #1F8A70,
						#BFDB38, #FC7300)'(default gradient is nice, but you can set
						anything you like)
						<br /> blobStyle - add inline styles to blob, <br /> blur - directly
						set blur value, <br /> blurStyle - add inline styles to blur layer
					</p>
				</div>
				<Blob />
			</main>
		</div>
	)
}

export default App
