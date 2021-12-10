import React from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function NewUser() {
  return (
    <Container>
      <div>
        <h1 className="heading">Add New User</h1>
      </div>
      <hr />
      <Form className="add-user-wrapper">
        <FormGroup>
          <Label for="firstname">First Name</Label>
          <Input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="firstname">Last Name</Label>
          <Input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
}
