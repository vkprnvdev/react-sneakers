import { FC } from 'react'
// import { Items } from '../../app.interface'
import styles from './CartItem.module.scss'
// import { API } from '../../api.service'

interface ICartItems {
	title: string
	imageUrl: string
	price: number
	count: number
}

const CartItem: FC<ICartItems> = ({ title, price, imageUrl, count }) => {
	return (
		<>
			<div className={styles.cartItem}>
				<div className={styles.cartItemImg}>
					<img width={100} height={80} src={imageUrl} alt='Sneakers' />
				</div>
				<div className={styles.text}>
					<b>x{count}</b>
					<p>{title}</p>
					<b>{price} руб.</b>
				</div>
				{/* <SquareX
					className={styles.removeBtn}
					strokeWidth={1.5}
					width={35}
					height={35}
					color='#CDCDCD'
					onClick={onClickX}
				/> */}
			</div>
		</>
	)
}

export default CartItem
