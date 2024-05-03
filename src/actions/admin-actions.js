"use server";
import {
  YupValidationError,
  convertFormDataToJSON,
  response,
  transformYupErrors,
} from "@/helpers/form-validation";
import { AdminSchema } from "@/helpers/schemas/admin-schema";
import { createAdmin, deleteAdmin } from "@/services/admin-service";
import { revalidatePath } from "next/cache";

export const createAdminAction = async (prevState, formData) => {
  try {
    const fields = convertFormDataToJSON(formData);
    AdminSchema.validateSync(fields, { abortEarly: false });
    const res = await createAdmin(fields);
    const data = await res.json();
    console.log(data);
    if (!res.ok) {
      return response(false, data?.message);
    }
  } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner);
    }
    throw err;
  }
};

export const deleteAdminAction = async (id) => {
  if (!id) throw new Error("id is required");

  try {
    const res = await deleteAdmin(id);

    if (!res.ok) {
      const data = await res.text();
      throw new Error(data);
    }
  } catch (err) {
    return response(false, err.message);
  }

  revalidatePath("/dashboard/admin");
  return response(true, "Admin deleted");
};
