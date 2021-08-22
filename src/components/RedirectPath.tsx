import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import axios from 'axios'
import { navigate } from 'gatsby'

const RedirectPath: React.FC<RouteComponentProps<{ nanoId: string }>> = ({
  nanoId,
}) => {
  const getlongUrl = async (Id: string) => {
    try {
      const res = await axios.post('/.netlify/functions/redirect', {
        nanoId: Id,
      })

      if (res.data) return res.data.longUrl
      return null
    } catch (error) {
      console.log(error)
      return null
    }
  }

  useEffect(() => {
    getlongUrl(nanoId)
      .then((longUrl) => {
        if (longUrl) {
          navigate(longUrl)
          return <div />
        }
        return <div>Invalid url</div>
      })
      .catch((error) => {
        console.log(error)
        return <div>Invalid url</div>
      })
  }, [])

  return <div />
}

export default RedirectPath
