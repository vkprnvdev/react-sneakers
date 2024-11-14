import styles from './Drawer.module.scss'

import { MouseEventHandler } from 'react'
import { Items } from '../../app.interface'
import CartItem from '../CartItem'

interface IDrawer {
	onClose: MouseEventHandler<HTMLImageElement>
	items: Items[]
}

function Drawer({ onClose, items = [] }: IDrawer) {
	// const [total, setTotal] = useState(0)

	return (
		<>
			<div className={styles.overlay}>
				<div className={styles.backend} onClick={onClose}></div>
				<div className={styles.drawer}>
					<h2>
						Корзина
						<img
							src='/react-sneakers/img/btn-remove.svg'
							alt='Remove'
							onClick={onClose}
						/>
					</h2>

					<div className={styles.items}>
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
					<div className={styles.cartTotalBlock}>
						<ul>
							<li>
								<span>Итого:</span>
								<div></div>
								<b>69 руб.</b>
							</li>
							<li>
								<span>Налог 5%:</span>
								<div></div>
								<b>1074 руб.</b>
							</li>
						</ul>
						<button className={styles.greenButton}>
							Оформить заказ{' '}
							<img src='/react-sneakers/img/arrow.svg' alt='Arrow' />
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Drawer
