import Image from 'next/image'
import Link from 'next/link'

const Card = ({ hotel }: { hotel: { id: number; name: string; address: string; price: number; rating: number; description: string; image: string; imageCreds: string } }) => {
	const { id, name, address, price, rating, description, image, imageCreds } = hotel
	const imagePath = `/images/${id}.webp`

	return (
		<li className="card">
			<Link href={`/hotels/${id}`} key={hotel.id}>
				<div className="card-image-wrapper">
					<Image className="card-image" src={imagePath} alt={imageCreds} width={300} height={300} />
				</div>
				<div className="card-info">
					<h3 className="card-title">{name}</h3>
					<p className="card-address">{address}</p>
					<p className="card-description">{description}</p>
					<p className="card-price">Price: {price} €</p>
					<p className="card-rating">Rating {rating}</p>
				</div>
			</Link>
		</li>
	)
}

export default Card
