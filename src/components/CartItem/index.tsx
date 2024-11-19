import { FC } from 'react'
import { Items } from '../../app.interface'
import styles from './CartItem.module.scss'

const CartItem: FC<Items> = ({ title, price, imageUrl, count }) => {
	return (
		<>
			<div className={styles.cartItem}>
				<div
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
					className={styles.cartItemImg}
				></div>
				<div className={styles.text}>
					<b>X{count}</b>
					<p>{title}</p>
					<b>{price} руб.</b>
				</div>
				<img
					className={styles.removeBtn}
					src='/react-sneakers/img/btn-remove.svg'
					alt='Remove'
				/>
			</div>
		</>
	)
}

export default CartItem
