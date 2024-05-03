"use server"

import { response } from "@/helpers/form-validation";
import { deleteAdmin } from "@/services/admin-service";
import { revalidatePath } from "next/cache";


export const deleteAdminAction= async(id)=> {
    if(!id) throw new Error("id is required");

    try{
        const res= await deleteAdmin(id);

        if(!res.ok) {
            const data= await res.text();
            throw new Error(data);
        }
    }catch(err){
        return response(false,err.message);
    }

    revalidatePath("/dashboard/admin");
    return response(true,"Admin deleted");
}