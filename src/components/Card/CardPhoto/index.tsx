import styles from './CardPhoto.module.scss'
import { FC } from 'react'

interface ICardPhoto {
	imageUrl: string
	setIsPhotoOpened: Function
}

const CardPhoto: FC<ICardPhoto> = ({ imageUrl, setIsPhotoOpened }) => {
	const close = () => {
		setIsPhotoOpened(false)
	}

	return (
		<>
			<div className={styles.overlay}>
				<div className={styles.backend} onClick={close}></div>
				<div className={styles.photo}>
					<img
						className={styles.sneakers}
						width={260}
						height={240}
						src={imageUrl}
						alt='Sneakers'
					/>
				</div>
			</div>
		</>
	)
}
export default CardPhoto
