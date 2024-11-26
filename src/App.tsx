import { useEffect, useState } from 'react'
import { Delete } from 'lucide-react'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import { Items } from './app.interface.js'
import { API } from './api.service.js'

function App() {
	const [items, setItems] = useState<Items[]>([])
	const [cartItems, setCartItems] = useState<Items[]>([])
	const [cartOpened, setCartOpened] = useState<boolean>(false)
	const [searchValue, setSearchValue] = useState<string>('')

	// const api_items = 'https://271ea91daf28a18b.mokky.dev/items/'
	// const api_cart = 'https://271ea91daf28a18b.mokky.dev/cart/'

	const api_items = new API('https://271ea91daf28a18b.mokky.dev/items/')
	const api_cart = new API('https://271ea91daf28a18b.mokky.dev/cart/')

	useEffect(() => {
		api_cart.setFromApi(setCartItems)
		api_items.setFromApi(setItems)
	}, [])

	cartItems.map(cartItem => {
		items.map((item: Items) => {
			if (item.id === cartItem.id) {
				item.count = cartItem.count
			}
		})
	})

	const onAddToCart = (obj: Items, isAdded: boolean) => {
		if (!isAdded) {
			setCartItems(prev => [...prev, obj])
			api_cart.post(obj)
		} else {
			setCartItems(prev =>
				prev.map(item =>
					item.id === obj.id ? { ...item, count: item.count + 1 } : item
				)
			)
			api_cart.patch(obj.id, { count: obj.count + 1 })
		}
	}

	const onRemoveFromCart = (obj: Items) => {
		if (obj.count === 1) {
			setCartItems(prev => prev.filter(item => item.id !== obj.id))
			api_cart.delete(obj.id)
		} else {
			setCartItems(prev =>
				prev.map(item =>
					item.id === obj.id ? { ...item, count: item.count - 1 } : item
				)
			)
			api_cart.patch(obj.id, { count: obj.count - 1 })
		}
	}

	return (
		<>
			<div className='wrapper'>
				{cartOpened && (
					<Drawer
						onClose={() => setCartOpened(false)}
						items={cartItems}
						onMinus={(obj: Items) => onRemoveFromCart(obj)}
					/>
				)}
				<Header onCart={() => setCartOpened(true)} />
				<div className='content'>
					<div className='filter'>
						<h1>
							{searchValue
								? `Поиск по запросу: "${searchValue}"`
								: 'Все кроссовки'}
						</h1>
						<div className='searchBlock'>
							<img
								width={20}
								src='/react-sneakers/img/search.svg'
								alt='Search'
							/>
							<input
								onChange={event => setSearchValue(event.target.value)}
								value={searchValue}
								placeholder='Поиск...'
							/>
							{searchValue && (
								<Delete
									className='clear'
									width={25}
									height={25}
									color='#e4e4e4'
									onClick={() => setSearchValue('')}
								/>
							)}
						</div>
					</div>
					<div className='cards'>
						{items
							.filter(item =>
								item.title
									.toLowerCase()
									.includes(searchValue.toLowerCase().trim())
							)
							?.map((item: Items, index) => (
								<Card
									key={index}
									id={item.id}
									title={item.title}
									price={item.price}
									imageUrl={item.imageUrl}
									countItem={item.count}
									onFavorite={() => console.log(cartItems)}
									onPlus={(obj: Items, isAdded: boolean) =>
										onAddToCart(obj, isAdded)
									}
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
