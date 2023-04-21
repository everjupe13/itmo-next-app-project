const cities = [
  { id: 1, address: 'Saint-Petersburg' },
  { id: 2, name: 'Moscow' },
  { id: 3, name: 'Kazan' }
]

export default function handler(req, res) {
  res.status(200).json(cities)
}
