import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import { Items } from './app.interface.js'

function App() {
	const [items, setItems] = useState<Items[]>([])
	const [cartItems, setCartItems] = useState<Items[]>([])
	const [cartOpened, setCartOpened] = useState<boolean>(false)

	useEffect(() => {
		const api = 'https://271ea91daf28a18b.mokky.dev/items'
		// const api = 'https://271ea91daf28a18b.mokky.dev/items-gh-pages'
		axios.get(api).then(res => {
			setItems(res.data)
		})
	}, [])

	const onFirstAddToCart = (obj: Items) => {
		setCartItems(prev => [...prev, obj])
	}

	const onAddToCart = (obj: Items) => {
		setCartItems(prev =>
			prev.map(item =>
				item.id === obj.id ? { ...item, count: item.count + 1 } : item
			)
		)
	}

	const onLastRemoveFromCart = (obj: Items) => {
		setCartItems(prev => prev.filter(item => item.id !== obj.id))
	}

	const onRemoveFromCart = (obj: Items) => {
		setCartItems(prev =>
			prev.map(item =>
				item.id === obj.id ? { ...item, count: item.count - 1 } : item
			)
		)
	}

	return (
		<>
			<div className='wrapper'>
				{cartOpened && (
					<Drawer onClose={() => setCartOpened(false)} items={cartItems} />
				)}
				<Header onCart={() => setCartOpened(true)} />
				<div className='content'>
					<div className='filter'>
						<h1>Все кроссовки</h1>
						<div>
							<img
								width={20}
								src='/react-sneakers/img/search.svg'
								alt='Search'
							/>
							<input placeholder='Поиск...' />
						</div>
					</div>
					<div className='cards'>
						{items?.map((item: Items) => (
							<Card
								key={item.id}
								id={item.id}
								title={item.title}
								price={item.price}
								imageUrl={item.imageUrl}
								onFavorite={() => console.log(cartItems)}
								// onFavorite={() => alert('favorite')}
								onFirstPlus={(obj: Items) => onFirstAddToCart(obj)}
								onPlus={(obj: Items) => onAddToCart(obj)}
								onLastMinus={(obj: Items) => onLastRemoveFromCart(obj)}
								onMinus={(obj: Items) => onRemoveFromCart(obj)}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default App
