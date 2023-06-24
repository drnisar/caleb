import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddEmployee(props) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [img, setImg] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleShow}
      >
        + Add Employee
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="bg-primary-subtle">
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            id="editModal"
            onSubmit={(e) => {
              e.preventDefault();
              props.newEmployee(name, role, img);
              setName("");
              setRole("");
              setImg("");
            }}
          >
            <div className="mb-3">
              <label for="name" className="form-label">
                Employee Name
              </label>
              <input
                type="text"
                className="form-control "
                placeholder="John Smith"
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
                placeholder="bank guy"
                id="role"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="img" className="form-label">
                Image URL
              </label>
              <input
                type="text"
                className="form-control"
                id="img"
                placeholder="https://www.google.com"
                value={img}
                onChange={(e) => {
                  setImg(e.target.value);
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
          <button
            form="editModal"
            className="btn btn-sm btn-outline-primary"
            onClick={handleClose}
          >
            Add
          </button>
          {/* <Button variant="primary">Update</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;
