import { FC } from 'react'
// import { Items } from '../../app.interface'
import { SquareX } from 'lucide-react'
import styles from './CartItem.module.scss'
// import { API } from '../../api.service'

interface ICartItems {
	id: number
	title: string
	imageUrl: string
	price: number
	count: number
	onMinus: Function
}

const CartItem: FC<ICartItems> = ({
	id,
	title,
	price,
	imageUrl,
	count,
	onMinus,
}) => {
	// const api_cart = new API('https://271ea91daf28a18b.mokky.dev/cart/')

	// const onClickX = () => {
	// 	if (count == 1) {
	// 		api_cart.delete(id)
	// 	} else {
	// 		api_cart.patch(id, { count: count - 1 })
	// 	}
	// }
	const onClickX = () => {
		onMinus({ id, title, imageUrl, price, count })
	}

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
				<SquareX
					className={styles.removeBtn}
					strokeWidth={1.5}
					width={35}
					height={35}
					color='#CDCDCD'
					onClick={onClickX}
				/>
			</div>
		</>
	)
}

export default CartItem
