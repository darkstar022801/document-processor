import React from 'react'
import Body from './Body'
import Header from './Header'

function Directory() {
  // const [data, setData] = useState<any[]>()

  // useEffect(() => {
  //   const getContents = async () => {
  //     try {
  //       const contents = await window.showDirectoryPicker({
  //         startIn: 'desktop',
  //       })

  //       console.log('********************************')
  //       console.log(contents)

  //       setData(contents)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }

  //   getContents()
  // }, [])

  // const renderData = () => {
  //   if (!data) {
  //     return null
  //   }
  //   return data.map((item) => {
  //     console.log(item)
  //     return <div>item</div>
  //   })
  // }

  return (
    <>
      <Header />
      <Body />
      {/* {renderData()} */}
    </>
  )
}

export default Directory
