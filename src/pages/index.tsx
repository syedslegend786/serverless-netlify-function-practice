import * as React from "react"

const IndexPage = () => {
  interface props {
    message?: string
  }
  const [urldata, seturldata] = React.useState<props>({})
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(".netlify/functions/hello")
        const data = await res.json()
        seturldata(data)
      } catch (err) {
        alert('error occured!')
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      index file... {urldata?.message}
    </div>
  )
}

export default IndexPage
