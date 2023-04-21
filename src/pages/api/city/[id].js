export default function handler(req, res) {
  const { query, method } = req
  const id = Number.parseInt(query.id, 10)
  const city = query.name

  switch (method) {
    case 'GET': {
      res.status(200).json({ id, city: `City ${id}` })
      break
    }
    case 'PATCH': {
      // some logic to update data in database
      res.status(200).json({ id, city: city || `City ${id}` })
      break
    }
    default: {
      res.setHeader('Allow', ['GET', 'PATCH'])
      res.status(405).end(`Method ${method} Not Allowed`)
    }
  }
}
