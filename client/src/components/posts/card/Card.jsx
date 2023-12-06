import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function Card1({
    _id,
    title,
    topic,
    text,
}) {
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{topic}</Card.Subtitle>
        {/* <Card.Text>
          {text}
        </Card.Text> */}
        <Link to={`${_id}`}>Go to Post</Link>
      </Card.Body>
    </Card>
  );
}

export default Card1;