import React, { useEffect, useState } from "react";
import "./Home.css";
import { Container, Row, Col, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const result = await fetch("https://reqres.in/api/users");
    const json = await result.json();
    setUsers(json.data);
  };

  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/newuser");
  };

  return (
    <Container>
      <div>
        <h1 className="heading">Users List</h1>
        <Button className="add-user-btn" color="primary" onClick={handleClick}>
          Add New User
        </Button>
      </div>
      <hr />
      <Row className="users">
        {users.map((user) => {
          return (
            <Col md={4}>
              <div key={user.id}>
                <Link to={`/users/${user.id}`}>
                  <img src={user.avatar} alt="user" className="user-avatar" />
                </Link>
                <br />
                <strong>{user.first_name}</strong>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
