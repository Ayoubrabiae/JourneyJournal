import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className="card">
      <div className="image">
        <img src={`../../public/${props.item.img}`} alt="Card Image" />
      </div>
      <div className="text">
        <h3>{props.item.title}</h3>
        <div className="date">{props.item.date}</div>
        <div className="location">{props.item.location}</div>
        <div className="description">{props.item.description}</div>
        <a href={props.item.link} className="link">Visit Now</a>
      </div>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.any.isRequired,
};

export default Card;