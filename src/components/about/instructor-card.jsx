"use client";
import { Card } from "react-bootstrap";
import "./instructor-card.scss";
import Image from "next/image";

const InstructorCard = (props) => {
  const { firstName, lastName, title, image } = props;

  const fullName = `${firstName} ${lastName}`;
  return (
    <Card className="instructor-card">
      <Image
        src={`/images/instructors/${image}`}
        width={400}
        height={400}
        alt={fullName}
        className="card-img-top card-img-bottom"
      />

      <Card.Title>
        <h4>{fullName}</h4>
        <h6>{title}</h6>
      </Card.Title>
    </Card>
  );
};

export default InstructorCard;
