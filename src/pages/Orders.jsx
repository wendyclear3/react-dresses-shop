import React from 'react'
import Card from '../components/Card'
import axios from 'axios'

function Orders() {
  const [orders, setOrders] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(
          'https://64afff88c60b8f941af50a3c.mockapi.io/orders'
        )
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setIsLoading(false)
      } catch (error) {
        alert('Ошибка при запросе заказов')
        console.error(error)
      }
    })()
  }, [])

  return (
    <div className="content p-40">
      <div className="mb-40 d-flex justify-between align-center">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(10)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Orders
