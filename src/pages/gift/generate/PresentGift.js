import { Row, Col, Card } from 'react-bootstrap';
import Button from '../../../components/CustomButton';
import { Link } from 'react-router-dom';
export default function PresentGift({ gift, removeGiftHandler }) {
  const { name, amount, secret } = gift;
  return (
    <>
      <Row className="p-4">
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </Row>
      <Row>
        <Col>Let your firend know!</Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              Hey {name}! <br />
              I'm sending you {amount} dots as a gift! you can go here and type
              in the following secret message to claim your DOTs. <br />
              {secret} <br />
              The website will walk you through to create your own secure
              Polkadot account. <br />
              Enjoy!
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>Print</Button>
        </Col>
        <Col>
          <Button>Email</Button>
        </Col>
        <Col>
          <Button onClick={() => removeGiftHandler(secret)}>Remove</Button>
        </Col>
      </Row>
    </>
  );
}
