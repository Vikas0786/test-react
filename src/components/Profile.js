import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

export default function Profile() {
  const [userdetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
    job: "",
  });

  const fetchUserDetails = async () => {
    const result = await fetch(`https://reqres.in/api/users/${id}`);
    const json = await result.json();
    setUserDetails(json.data);
  };

  const { id } = useParams();
  useEffect(() => {
    fetchUserDetails();
  }, []);

  console.log(userdetails);
  return (
    <Container>
      <h1 className="heading">Profile Details of : {userdetails.first_name}</h1>
      <hr />
      <Row>
        <Col md={4}>
          <div>
            <img src={userdetails.avatar} alt="userpicture" />
          </div>
        </Col>
        <Col md={8}>
          <div>
            <p>{userdetails.first_name}</p>
            <p>{userdetails.last_name}</p>
            <p>{userdetails.email}</p>
            <p>{userdetails.job}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
