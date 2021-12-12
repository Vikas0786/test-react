import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function NewUser() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { firstname, lastname, email, job };

    setIsPending(true);

    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then(() => {
        setIsPending(false);
        alert(`New User ${firstname} added successfully...`);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <Button color="primary" className="btn-back" onClick={handleClick}>
        Back
      </Button>
      <h1 className="addnew-header">Add New User</h1>
      <hr />
      <Form className="add-user-wrapper" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="firstname">First Name</Label>
          <Input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="firstname">Last Name</Label>
          <Input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="job">JOB</Label>
          <Input
            type="text"
            name="job"
            id="job"
            placeholder="JOB"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </FormGroup>
        {!isPending && <Button color="primary">Add New User</Button>}
        {isPending && (
          <Button color="primary" disabled>
            Adding User...
          </Button>
        )}
      </Form>
    </Container>
  );
}
