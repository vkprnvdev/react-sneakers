// import { useState } from 'react'
import { MouseEventHandler } from 'react'
import { Items } from '../app.interface'
import CartItem from './CartItem'

interface IDrawer {
	onClose: MouseEventHandler<HTMLImageElement>
	items: Items[]
}

function Drawer({ onClose, items = [] }: IDrawer) {
	// const [total, setTotal] = useState(0)

	return (
		<>
			<div className='overlay'>
				<div className='drawer d-flex flex-column'>
					<h2 className='d-flex justify-between mb-30'>
						Корзина
						<img
							className='cu-p'
							src='/img/btn-remove.svg'
							alt='Remove'
							onClick={onClose}
						/>
					</h2>

					<div className='items'>
						{items.map(item => (
							<CartItem
								key={item.id}
								id={item.id}
								title={item.title}
								price={item.price}
								imageUrl={item.imageUrl}
							/>
						))}
					</div>
					<div className='cartTotalBlock'>
						<ul>
							<li className='d-flex'>
								<span>Итого:</span>
								<div></div>
								<b>69 руб.</b>
							</li>
							<li className='d-flex'>
								<span>Налог 5%:</span>
								<div></div>
								<b>1074 руб.</b>
							</li>
						</ul>
						<button className='greenButton'>
							Оформить заказ <img src='/img/arrow.svg' alt='Arrow' />
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Drawer
