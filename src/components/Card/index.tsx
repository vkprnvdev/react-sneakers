import { FC, useEffect, useState } from 'react'
import styles from './Card.module.scss'
import { Plus, Minus } from 'lucide-react'

interface ICard {
	id: number
	title: string
	imageUrl: string
	price: number
	countItem: number
	onPlus: Function
	onMinus: Function
	onFavorite: Function
}

const Card: FC<ICard> = ({
	id,
	title,
	imageUrl,
	price,
	countItem,
	onPlus,
	onMinus,
	onFavorite,
}) => {
	const [isAdded, setIsAdded] = useState(false)
	const [count, setCount] = useState<number>(1)
	const [isFavorite, setIsFavorite] = useState(false)

	useEffect(() => {
		if (countItem > 0) {
			setIsAdded(true)
			setCount(countItem)
		}
	}, [])

	const onFirstClickPlus = () => {
		onPlus({ id, title, imageUrl, price, count }, isAdded)
		setIsAdded(!isAdded)
	}

	const onClickPlus = () => {
		setCount(prev => prev + 1)
		onPlus({ id, title, imageUrl, price, count }, isAdded)
	}

	const onLastClickMinus = () => {
		setIsAdded(!isAdded)
		onMinus({ id, title, imageUrl, price, count })
	}

	const onClickMinus = () => {
		setCount(prev => prev - 1)
		onMinus({ id, title, imageUrl, price, count })
	}

	const onClickFavorite = () => {
		onFavorite()
		setIsFavorite(!isFavorite)
	}

	return (
		<>
			<div className={styles.card}>
				<div className={styles.favorite} onClick={onClickFavorite}>
					<img
						src={
							isFavorite
								? '/react-sneakers/img/heart-liked.svg'
								: '/react-sneakers/img/heart-unliked.svg'
						}
						alt='Unliked'
					/>
				</div>
				<img
					className='sneakers'
					width={133}
					height={112}
					src={imageUrl}
					alt='Sneakers'
				/>
				<h5>{title}</h5>
				<div className={styles.add}>
					<div>
						<span>Цена:</span>
						<b>{price} руб.</b>
					</div>
					<div className={styles.btn}>
						{isAdded ? (
							<span>
								<div onClick={count === 1 ? onLastClickMinus : onClickMinus}>
									<Minus color='#9B9B9B' />
								</div>
								<h3>{count}</h3>
								<div onClick={onClickPlus}>
									<Plus color='#9B9B9B' />
								</div>
							</span>
						) : (
							<div className={styles.addCard} onClick={onFirstClickPlus}>
								<Plus color='#CDCDCD' />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
export default Card
