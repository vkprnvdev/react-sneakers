import styles from './Drawer.module.scss'

import { FC, MouseEventHandler, useEffect, useState } from 'react'
import { Items } from '../../app.interface'
import { X } from 'lucide-react'
import CartItem from '../CartItem'

interface IDrawer {
	onClose: MouseEventHandler<SVGSVGElement & HTMLDivElement>
	items: Items[]
	onMinus: Function
}

const Drawer: FC<IDrawer> = ({ onClose, items = [], onMinus }) => {
	const [total, setTotal] = useState<number>(0)

	useEffect(() => {
		let count = 0
		items.map(item => {
			count = count + item.price * item.count
		})
		setTotal(count)
	}, [items])

	return (
		<>
			<div className={styles.overlay}>
				<div className={styles.backend} onClick={onClose}></div>
				<div className={styles.drawer}>
					<h2>
						Корзина
						<X
							className={styles.X}
							color='#9B9B9B'
							strokeWidth={3}
							width={30}
							height={30}
							onClick={onClose}
						/>
					</h2>

					<div className={styles.items}>
						{items.map((item, index) => (
							<CartItem
								key={index}
								id={item.id}
								title={item.title}
								price={item.price}
								imageUrl={item.imageUrl}
								count={item.count}
								onMinus={onMinus}
							/>
						))}
					</div>
					<div className={styles.cartTotalBlock}>
						<ul>
							<li>
								<span>Скидка 5%:</span>
								<div></div>
								<b>{(total * 0.05).toFixed(2)} руб.</b>
							</li>
							<li>
								<span>Итого:</span>
								<div></div>
								<b>{(total - total * 0.05).toFixed(2)} руб.</b>
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
