"use server"

import { AssistantManagerSchema } from "@/helpers/schemas/assistant-manager-schema";
import { createAssistantManager, deleteAssistantManager, updateAssistantManager } from "@/services/assistant-manager-service";

const { convertFormDataToJSON, response, YupValidationError, transformYupErrors } = require("@/helpers/form-validation");

export const createAssistantManagerActions=async(prewState,formData)=>{
  try {
    const fields = convertFormDataToJSON(formData);

    AssistantManagerSchema.validateSync(fields, { abortEarly: false });

    const res = await createAssistantManager(fields);

    const data = res.json();

    if (!res.ok) {
      return response(false, data?.message);
    }

      revalidatePath("/dashboard/assistant-manager");
      return response(true, "Assistant manager was created");
  } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner);
    }
    throw err;
  }

};

export const updateAssistantManagerAction = async (prewState, formData) => {
  if (!formData.id) throw new Error("Id is missing");
  try {
    const fields = convertFormDataToJSON(formData);
    AssistantManagerSchema.validateSync(fields, { abortEarly: false });
    const res = await updateAssistantManager(fields);
    const data = await res.json();
    if (!res.ok) {
      return response(false, data?.message);
    }
      revalidatePath("/dashboard/assistant-manager");
      return response(true, "Assistant manager was updated");
  } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner);
    }
    throw err;
  }

};

export const deleteAssitantManagerAction = async (id) => {
  if (!id) throw new Error("Id is missing");
  try {
    const res = await deleteAssistantManager(id);
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.message);
    }

      revalidatePath("/dashboard/assistant-manager");
      return response(true, "Assistant manager was deleted");
  } catch (err) {
    return response(false, err.message);
  }

};