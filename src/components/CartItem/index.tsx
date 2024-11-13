import { Items } from '../../app.interface'
import styles from './CartItem.module.scss'

function CartItem({ title, price, imageUrl }: Items) {
	return (
		<>
			<div className={styles.cartItem}>
				<div
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
					className={styles.cartItemImg}
				></div>
				<div className='mr-20 flex'>
					<p className='mb-5'>{title}</p>
					<b>{price} руб.</b>
				</div>
				<img
					className={styles.removeBtn}
					src='/img/btn-remove.svg'
					alt='Remove'
				/>
			</div>
		</>
	)
}

export default CartItem
