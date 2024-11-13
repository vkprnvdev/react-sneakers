import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import Header from './components/Header.js'
import Drawer from './components/Drawer.js'
import { Items } from './app.interface.js'

function App() {
	const [items, setItems] = useState<Items[]>([])
	const [cartItems, setCartItems] = useState<Items[]>([])
	const [cartOpened, setCartOpened] = useState<boolean>(false)

	useEffect(() => {
		const api = 'https://271ea91daf28a18b.mokky.dev/items'
		axios.get(api).then(res => {
			setItems(res.data)
		})
	}, [])

	const onAddToCart = (obj: Items, isAdded: Function) => {
		if (isAdded) {
			setCartItems(prev => prev.filter(item => item.id !== obj.id))
		} else {
			setCartItems(prev => [...prev, obj])
		}
	}

	return (
		<>
			<div className='wrapper clear'>
				{cartOpened && (
					<Drawer onClose={() => setCartOpened(false)} items={cartItems} />
				)}
				<Header onCart={() => setCartOpened(true)} />
				<div className='content p-40'>
					<div className='d-flex align-center justify-between mb-40'>
						<h1>Все кроссовки</h1>
						<div className='search-block d-flex'>
							<img src='/img/search.svg' alt='Search' />
							<input placeholder='Поиск...' />
						</div>
					</div>
					<div className='d-flex flex-wrap'>
						{items?.map((item: Items) => (
							<Card
								key={item.id}
								id={item.id}
								title={item.title}
								price={item.price}
								imageUrl={item.imageUrl}
								onFavorite={() => console.log(cartItems)}
								// onFavorite={() => alert('favorite')}
								onPlus={(obj: Items, isAdded: Function) =>
									onAddToCart(obj, isAdded)
								}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default App
