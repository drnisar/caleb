import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import EditEmployee from "./EditEmployee";

function Employee(props) {
  return (
    <Card className="card d-inline-flex p-2 m-3" style={{ width: "18rem" }}>
      <Card.Img
        className="mx-auto"
        variant="top"
        src={props.img}
        style={{ width: "16rem", height: "16rem", borderRadius: "8rem" }}
      />
      <Card.Body className="mx-auto">
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <p className="card-text">{props.role}</p>

          <EditEmployee
            id={props.id}
            name={props.name}
            role={props.role}
            updateEmployee={props.updateEmployee}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Employee;
