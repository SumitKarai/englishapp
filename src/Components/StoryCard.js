
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
function StoryCard()
{
    let card = [
        {image:"logo512.png", title:"Lily and the Golden Key", description:"a curious girl named Lily discovers a mysterious golden key by a stream",goto:"/storyone" },
        {image:"logo512.png", title:"StoryTwo", description:"description",goto:"/storytwo" },
        {image:"logo512.png", title:"StoryThree", description:"description",goto:"/storythree" }
    ]



    return(
        <>

     <Container>
  <Row className="justify-content-center">
    {card.map((card, index) => (
      <Col key={index} md={4} className="mb-3">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={card.image} className="img-size" />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              {card.description}
            </Card.Text>
            <Link to={card.goto}>
              <Button variant="primary">Read Story</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>  
    
 </>
    )}
export default StoryCard;