'use client'

import { useState, useEffect } from 'react'

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

  return <>
  
  </>
}

export default Hotels
