import React from 'react'
import Image from 'next/image'

export default function Page({ hotel }: { id: number; name: string; address: string; price: number; rating: number; description: string; image: string; imageCreds: string }) {
	const { id, name, address, price, rating, description, image, imageCreds } = hotel
	const imagePath = `/images/${id}.webp`
	return (
		<div>
			<h1>{name}</h1>
			<p>{address}</p>
			<p>{description}</p>
			<p>Price: {price} €</p>
			<p>Rating {rating}</p>
			<Image className="card-image" src={imagePath} alt={imageCreds} />
		</div>
	)
}
