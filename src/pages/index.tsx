import React from 'react'
import { PageProps } from 'gatsby'
import { Router } from '@reach/router'
import Index from '../components/Index'
import RedirectPath from '../components/RedirectPath'

const Home: React.FC<PageProps> = () => {
  return (
    <main>
      <Router>
        <Index path="/" />
        <RedirectPath path="/:nanoId" />
      </Router>
    </main>
  )
}

export default Home
