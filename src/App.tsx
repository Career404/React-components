import React from 'react'
import './App.css'
import Nav from './components/nav/nav'
import Collapsible from './components/Collapsible/Collapsible'
import Blob from './components/Blob/Blob'
import HackerText from './components/hackerText/HackerText'
import Hero from './components/Hero/Hero'
import NumberControl from './components/NumberControl/NumberControl'

function App() {
	const [collapsibleSelect, setcollapsibleSelect] = React.useState('intro')
	const collapsibleSelectRef = React.useRef<HTMLElement>()

	React.useEffect(() => {
		const element = document.getElementById(collapsibleSelect)
		if (collapsibleSelectRef.current) {
			collapsibleSelectRef.current.style.display = 'none'
		}
		if (element) {
			element.style.display = 'block'
			collapsibleSelectRef.current = element
		}
	}, [collapsibleSelect])

	return (
		<div className="App">
			<Nav>
				<Collapsible
					title="freecodecamp"
					altTitle="close"
					boxStyle={{
						backgroundColor: '#5a5a5acc',
					}}
					callback={(event) => {
						setcollapsibleSelect(event.toString())
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
					title="Hyperplexed"
					altTitle="close"
					callback={(event) => {
						setcollapsibleSelect(event.toString())
					}}
				>
					<li>Blob</li>
					<li>HackerText</li>
				</Collapsible>
				<Collapsible
					title="My components"
					altTitle="close"
					boxStyle={{
						backgroundColor: 'rgba(30,40,50, 0.8)',
					}}
					callback={(event) => {
						setcollapsibleSelect(event.toString())
					}}
				>
					<p>Collapsible</p>
					<p>Navigation</p>
					<p>Hero</p>
					<p>NumberControl</p>
				</Collapsible>
			</Nav>
			<h1>
				{'<'}
				{collapsibleSelect}
				{'>'}
			</h1>
			<main>
				<div className="info" id="intro">
					<h3>Hello there!</h3>
					<p>This is a demo page for my custom components</p>
					<p>
						There is not only a demo for every component, but also an
						explanation - short description, component props and classNames
					</p>
					<p>
						Click through the menu above (it is also a custom component) to
						display the component and its corresponding text
					</p>
				</div>
				<div className="info" id="Collapsible">
					<p>Example in Navbar on the top of the page</p>
					<p>Keyboard-focusable!</p>
					<p>
						Use li elements as children to use built-in styling, anything else
						to ignore it <br />
					</p>
					<p>
						Class naming follows BEM convention: .Collapsible and
						.Collapsible_opened / .Collapsible_closed
					</p>
					<p>
						Takes callback function - default console.logs selected textContent.{' '}
						<br />
						handleChildKeyDown function passes (event.target as
						HTMLElement).textContent to the callback function
					</p>
					<p>
						hooks: useState for open/close, custom hook with useRef and
						useEffect to detect clicks outside the element, useEffect to title
						keyboard controls
					</p>
					<br />
					<p className="Code">
						interface CProps {'{'} <br />
						children: React.ReactNode <br />
						title: string <br />
						altTitle: string <br />
						titleStyle: CSSProperties <br />
						{'}'}
					</p>
				</div>
				<div className="info" id="Navigation">
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
				<div className="info" id="Hero">
					<p>
						Clasic hero element - simple and easy. By default uses a third-party
						service (picsum.photos) to set random background-image
					</p>
					<p>
						Props: <br /> title?: string <br /> subtitle?: string <br /> image?:
						React.CSSProperties['backgroundImage'] <br /> style?:
						React.CSSProperties <br />
						children?: React.ReactNode
					</p>
					<p>Classes: .Hero and .Hero_Text</p>
					<Hero
						title="This is a Hero Component"
						subtitle="Yes it is"
						style={{ fontFamily: 'Monaco, Courier, mono' }}
						textColor="rgb(255, 255, 255"
					>
						<p>Children go here by default</p>
						<h4
							style={{
								textAlign: 'center',
								color: 'teal',
								textShadow: '1px 1px white',
								fontSize: '2rem',
							}}
						>
							You can style children individually
						</h4>
						<p>
							<br />
							this
							<br />
							is
							<br />
							how
							<br />a<br />
							lot
							<br />
							of
							<br />
							children
							<br />
							elements
							<br />
							affect <br />
							this <br />
							component
						</p>
					</Hero>
				</div>

				<div className="info" id="NumberControl">
					<p>Another simple component</p>
					<p>
						Keyboard-focusable with up/down arrows responsible for
						increment/decrement
					</p>
					<p className="Code">
						interface ControlProps {'{'} <br />
						title?: string <br /> defaultValue?: number <br /> callback?:
						(value: any) ={'>'} void <br /> //currentNum is passed to callback
						every time the value changes <br />
						minValue?: number <br /> maxValue?: number <br /> styleBox?:
						React.CSSProperties <br />
						{'}'}
					</p>
					<NumberControl
						title="Up and down"
						minValue={1}
						maxValue={10}
						callback={(e) => console.log('the number is ' + e)}
					/>
					<NumberControl
						title="Down and up"
						minValue={10}
						maxValue={99}
						callback={(e) =>
							console.log('the number in the round block is ' + e)
						}
						styleBox={{
							backgroundColor: 'darkslategray',
							borderRadius: '50px',
							width: '100px',
							height: '100px',
							textAlign: 'center',
							fontFamily: 'cursive',
						}}
					/>
				</div>
				<div className="info" id="Blob">
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
					<p>Classes: .Blob and .Blur</p>
					<Blob />
				</div>
				<div className="info" id="HackerText">
					<p>
						This cool effect is from{' '}
						<a href="https://www.youtube.com/watch?v=W5oawMJaXbU&t=1s&ab_channel=Hyperplexed">
							this video
						</a>{' '}
						by <a href="https://www.youtube.com/@Hyperplexed">Hyperplexed</a>
					</p>
					<p>Takes {'{ text }'} prop (obvious)</p>
					<p>
						This is {'<span>'} element with display: inline-block by default.
						Use 'block' prop to set display: block
					</p>
					<p>Has one class: .HackerText</p>
					<HackerText text="HERESSOMELONGTEXT" />
				</div>
			</main>
		</div>
	)
}

export default App
