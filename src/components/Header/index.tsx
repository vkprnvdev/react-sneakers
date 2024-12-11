import styles from './Header.module.scss'
import { FC, MouseEventHandler } from 'react'
import { ShoppingCart, CircleUserRound, Heart } from 'lucide-react'

interface IHeader {
	onCart: MouseEventHandler<HTMLLIElement>
}

const Header: FC<IHeader> = ({ onCart }) => {
	return (
		<>
			<div className={styles.header}>
				<div>
					<img
						width={50}
						height={50}
						src='/react-sneakers/img/logo.png'
						alt='logo'
					/>
					<div>
						<h3>React Sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul>
					<li className={styles.favorites}>
						<Heart 
							width={40}
							height={40}
							strokeWidth={1.75}
							color='#9B9B9B'
						/>
					</li>
					<li className={styles.cart} onClick={onCart}>
						<ShoppingCart
							width={40}
							height={40}
							strokeWidth={1.75}
							color='#9B9B9B'
						/>
					</li>
					<li className={styles.profile}>
						<CircleUserRound
							width={40}
							height={40}
							strokeWidth={1.5}
							color='#9B9B9B'
						/>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Header
