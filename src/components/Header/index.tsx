import styles from './Header.module.scss'
import { MouseEventHandler } from 'react'

interface IHeader {
	onCart: MouseEventHandler<HTMLLIElement>
}

function Header({ onCart }: IHeader) {
	// function Header({...props, onCart }: IHeader): FC<MouseEventHandler<HTMLLIElement>> {
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
					<li className={styles.cart} onClick={onCart}>
						<img
							width={30}
							height={30}
							src='/react-sneakers/img/cart.svg'
							alt='cart'
						/>
						<span>1205 руб.</span>
					</li>
					<li className={styles.profile}>
						<img
							width={30}
							height={30}
							src='/react-sneakers/img/user_profile.svg'
							alt='cart'
						/>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Header
