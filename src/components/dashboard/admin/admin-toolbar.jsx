"use client";
import { deleteAdminAction } from "@/actions/admin-actions";
import { swAlert, swConfirm } from "@/helpers/swal";
import React from "react";
import { TfiTrash } from "react-icons/tfi";

const AdminToolbar = ({ row }) => {

    

    const handleDelete = async () => {
        const { id, username } = row;
        const answer = await swConfirm(`Are you sure delete to ${username}?`);

        if (!answer.isConfirmed) return;

        const res= await deleteAdminAction(id);

        if(res.ok){
            swAlert(res.message,"success");
        }
        else{
            swAlert(res.message,"error");
        }
    }



  return (
    <button className="btn text-danger" onClick={handleDelete}>
      <TfiTrash />
    </button>
  );
};

export default AdminToolbar;
