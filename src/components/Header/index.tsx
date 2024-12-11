import { Link } from '@tanstack/react-router'
import styles from './Header.module.scss'
import { FC, MouseEventHandler } from 'react'
import { Heart, ShoppingBag, CircleUserRound } from 'lucide-react'

interface IHeader {
	onCart: MouseEventHandler<HTMLLIElement>
}

const Header: FC<IHeader> = ({ onCart }) => {
	return (
		<>
			<div className={styles.header}>
				<div>
					<Link to='/'>
						<img width={50} height={50} src='/img/logo.png' alt='logo' />
					</Link>
					<div>
						<h3>React Sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul>
					<li className={styles.heart}>
						<Link to='/favorites'>
							<Heart width={35} height={35} color='#CDCDCD' strokeWidth={1.7} />
						</Link>
					</li>
					<li className={styles.cart} onClick={onCart}>
						<ShoppingBag
							width={35}
							height={35}
							color='#CDCDCD'
							strokeWidth={1.7}
						/>
					</li>
					<li className={styles.profile}>
						<Link to='/profile'>
							<CircleUserRound
								width={35}
								height={35}
								color='#CDCDCD'
								strokeWidth={1.7}
							/>
						</Link>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Header
