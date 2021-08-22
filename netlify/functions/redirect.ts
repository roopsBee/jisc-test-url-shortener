import { Handler } from '@netlify/functions'
import faunadb from 'faunadb'

type ResType = {
  data: { longUrl: string }
}

const handler: Handler = async (event) => {
  try {
    const q = faunadb.query
    const client = new faunadb.Client({
      secret: process.env.FAUNADB_SERVER_KEY,
    })

    const data = JSON.parse(event.body)
    const { nanoId } = data

    const res: ResType = await client.query(
      q.Get(q.Match(q.Index('nanoId'), nanoId)),
    )

    const { longUrl } = res.data
    return {
      statusCode: 200,
      body: JSON.stringify({ longUrl }),
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    }
  }
}

export { handler }
