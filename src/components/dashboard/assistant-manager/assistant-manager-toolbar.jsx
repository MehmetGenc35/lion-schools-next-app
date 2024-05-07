"use client";
import { deleteAssitantManagerAction } from "@/actions/assistant-manager-actions";
import { swAlert, swConfirm } from "@/helpers/swal";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import { TfiPencil, TfiTrash } from "react-icons/tfi";

const AssistantManagerToolbar = ({ row }) => {
  const handleDelete = async () => {
    const answer = await swConfirm("Are you sure to delete?");
    if (!answer.isConfirmed) return;
    const res = await deleteAssitantManagerAction(row.userId);
    if (res.ok) {
      swAlert(res.message, "success");
    } else {
      swAlert(res.message, "error");
    }
  };

  return (
    <>
      <Link className="btn text-info" href={`/dashboard/assistant-manager/${row.userId}`}>
        <TfiPencil />
      </Link>
      <Button variant="link" onClick={handleDelete}>
        <TfiTrash />
      </Button>
    </>
  );
};
export default AssistantManagerToolbar;
