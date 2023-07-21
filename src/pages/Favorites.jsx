import React from 'react'
import AppContext from '../context'
import Card from '../components/Card'

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext)

  return (
    <div className="content p-40">
      <div className="mb-40 d-flex justify-between align-center">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item) => (
          <Card
            key={item.title}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites
