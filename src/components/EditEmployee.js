import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditEmployee(props) {
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-primary btn-sm" onClick={handleShow}>
        Update
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="bg-primary-subtle">
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            id="editModal"
            onSubmit={(e) => {
              handleClose();
              e.preventDefault();
              props.updateEmployee(props.id, name, role);
            }}
          >
            <div className="mb-3">
              <label for="name" className="form-label">
                Employee Name
              </label>
              <input
                type="text"
                className="form-control "
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="role" className="form-label">
                Role
              </label>
              <input
                type="text"
                className="form-control"
                id="role"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <button
            className="btn btn-sm btn-outline-secondary "
            onClick={handleClose}
          >
            Close
          </button>
          <button form="editModal" className="btn btn-sm btn-outline-primary">
            Update
          </button>
          {/* <Button variant="primary">Update</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
