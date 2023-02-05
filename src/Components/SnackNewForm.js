import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SnackNewForm() {
  const API = process.env.REACT_APP_API_URL;
  let { id } = useParams();
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    is_healthy: false,
    image: "",
  });

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  //   const handleCheckboxChange = () => {
  //     setSnack({ ...snack, is_healthy: !snack.is_healthy });
  //   };

  useEffect(() => {
    if (!id) return;
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => {
        setSnack(response.data);
      })
      .catch((error) => console.error("catch", error));
  }, [id, API]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!id) {
      axios
        .post(`${API}/snacks`, snack)
        .then(() => {
          navigate(`/snacks`);
        })
        .catch((error) => console.error("catch", error));
    } else {
      axios
        .put(`${API}/snacks/${id}`, snack)
        .then(() => {
          navigate(`/snacks/${id}`);
        })
        .catch((error) => console.error("catch", error));
    }
  };

  return (
    <Form className="newForm" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Snack Name</Form.Label>
        <Form.Control
          type="text"
          placeholder={id ? snack.name : "Enter the snack's name"}
          value={snack.name}
          onChange={handleTextChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="fiber">
        <Form.Label>Fiber</Form.Label>
        <Form.Control
          type="text"
          placeholder={id ? snack.fiber : "Enter how much fiber the snack has"}
          value={snack.fiber}
          onChange={handleTextChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="protein">
        <Form.Label>Protein</Form.Label>
        <Form.Control
          type="number"
          placeholder={
            id ? snack.protein : "Enter how much protein the snack has"
          }
          value={snack.protein}
          onChange={handleTextChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="added_sugar">
        <Form.Label>Added Sugar</Form.Label>
        <Form.Control
          type="number"
          placeholder={
            id ? snack.added_sugar : "Enter how much sugar the snack has"
          }
          value={snack.added_sugar}
          onChange={handleTextChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Snack Image</Form.Label>
        <Form.Control
          type="text"
          placeholder={id ? snack.image : "Enter a url for the snack's image"}
          value={snack.image}
          onChange={handleTextChange}
        />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="is_healthy">
        <Form.Check
          type="checkbox"
          label="Is the snack healthy?"
          checked={snack.is_healthy}
          onChange={handleCheckboxChange}
        />
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
