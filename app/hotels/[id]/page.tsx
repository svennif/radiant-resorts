'use client'

import { useState, useEffect } from 'react'
import Card from './card'
import { log } from 'console'

interface Hotel {
	id: number
	name: string
	address: string
	price: number
	rating: number
	description: string
	image: string
	imageCreds: string
}

function Hotels() {
	const [hotels, setHotels] = useState<Hotel[]>([])

	useEffect(() => {
		async function fetchHotels() {
			const res = await fetch('/api/hotels')
			const data = await res.json()
      console.log(data.id);
      
			setHotels(data)
		}

		fetchHotels()
	}, [])


}

export default Hotels
