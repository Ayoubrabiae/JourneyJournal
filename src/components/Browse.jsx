import Card from "./Card"
import BrowseData from "../BrowseData"


export default function Browse() {
  const cards = BrowseData.map(card => {
    return (
      <Card
        key={card.id}
        item={card}
      />
    )
  })

  return (
    <section className="browse" id="browse">
      <div className="container">
        {cards}
      </div>
    </section>
  )
}