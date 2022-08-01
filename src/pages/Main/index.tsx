import React from 'react'

import ApplicationHeader from '../../components/ApplicationHeader/ApplicationHeader'
import Sidebar from '../../components/Sidebar/Sidebar'

function Main(): JSX.Element {
  return (
    <>
      <section>
        <ApplicationHeader />
      </section>

      <section>
        <Sidebar />
      </section>
    </>
  )
}

export default Main
