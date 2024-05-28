import { Card, Button, Nav } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Card>
      <Card.Header>About App</Card.Header>
      <Card.Body>
        <Card.Title>React Feature Used In This App..</Card.Title>
        <Card.Text>This App is created with create-react-app coammnd</Card.Text>
        <Card.Text>React bootstrap is used for responsive design</Card.Text>
        <Card.Text>AntD is used for responsive Component Librery</Card.Text>
        <Card.Text>React-Route-Dom is used for routing in this app</Card.Text>
        <Button variant="outline-secondary">
          <Nav.Link href="/">Main Home page</Nav.Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AboutUs;
