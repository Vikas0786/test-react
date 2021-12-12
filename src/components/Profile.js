import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

export default function Profile() {
  const [userdetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  const fetchUserDetails = async () => {
    const result = await fetch(`https://reqres.in/api/users/${id}`);
    const json = await result.json();
    setUserDetails(json.data);
  };

  const { id } = useParams();
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const onEdit = async (id, first_name, last_name, email) => {
    await fetch(`https://reqres.in/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .catch((error) => console.log(error));
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(
      id,
      userdetails.first_name,
      userdetails.last_name,
      userdetails.email
    );
    alert("User Details Updated Successfully...");
    setIsEdit(!isEdit);
  };

  return (
    <Container>
      <Button color="primary" className="btn-back" onClick={handleClick}>
        Back
      </Button>
      <h1 className="profile-header">Profile Details</h1>
      <hr />
      <Row>
        <Col md={4}>
          <div>
            <img src={userdetails.avatar} alt="userpicture" />
          </div>
        </Col>
        {isEdit === true ? (
          <Col md={8}>
            <Form onSubmit={handleOnEditSubmit}>
              <FormGroup>
                <Label for="firstname">First Name</Label>
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  value={userdetails.first_name}
                  onChange={(e) =>
                    setUserDetails({
                      ...userdetails,
                      first_name: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="firstname">Last Name</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  value={userdetails.last_name}
                  onChange={(e) =>
                    setUserDetails({
                      ...userdetails,
                      last_name: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  value={userdetails.email}
                  onChange={(e) =>
                    setUserDetails({
                      ...userdetails,
                      email: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <Button color="primary">Submit</Button>
            </Form>
          </Col>
        ) : (
          <Col md={8}>
            <div>
              <p>
                <strong>First Name : </strong>
                {userdetails.first_name}
              </p>
              <p>
                <strong>Last Name : </strong>
                {userdetails.last_name}
              </p>
              <p>
                <strong>Email : </strong>
                {userdetails.email}
              </p>
              <p>{userdetails.job}</p>
            </div>
            <div>
              <Button color="primary" onClick={handleEdit}>
                Edit User
              </Button>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}
