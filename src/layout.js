import React from 'react'
import { Helmet } from 'react-helmet'
import SiteNav from './components/SiteNav/SiteNav';

import './css/typography.css'
import './css/styles.css'

export default function Template({ children }) {
  return (
    <main>
      <Helmet
        title="The Halsey Wedding | Sunday, October 17, 2021"
        meta={[{ name: 'description', content: 'Sample' }]}
      />
      <SiteNav />
      <div>
        {children}
      </div>
    </main>
  )
}