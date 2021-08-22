import { Handler } from '@netlify/functions'
import { nanoid } from 'nanoid'
import faunadb from 'faunadb'

const handler: Handler = async (event) => {
  function validateURL(link) {
    if (link.indexOf('http://') === 0 || link.indexOf('https://') === 0) {
      return true
    }
    return false
  }

  try {
    const q = faunadb.query
    const client = new faunadb.Client({
      secret: process.env.FAUNADB_SERVER_KEY,
    })

    const data = JSON.parse(event.body)
    let { longUrl } = data
    if (!validateURL(longUrl)) {
      longUrl = `http://${longUrl}`
    }

    const nanoId = nanoid(5)

    await client.query(
      q.Create(q.Collection('urls'), { data: { longUrl, nanoId } }),
    )

    return {
      statusCode: 200,
      body: JSON.stringify({ longUrl, nanoId }),
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    }
  }
}

export { handler }
