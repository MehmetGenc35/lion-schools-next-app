"use server"

const { convertFormDataToJSON, response, YupValidationError, transformYupErrors } = require("@/helpers/form-validation");
const { ManagerSchema } = require("@/helpers/schemas/manager-schema");
const { createManager, updateManager } = require("@/services/manager-service");

export const createManagerActions=async(prewState,formData)=>{

    try {
      const fields = convertFormDataToJSON(formData);

      ManagerSchema.validateSync(fields, { abortEarly: false });

      const res = await createManager(fields);

      const data = res.json();

      if (!res.ok) {
        return response(false, data?.message);
      }

      revalidatePath("/dashboard/manager");
      return response(true, "Manager was created");
    } catch (err) {
        if(err instanceof YupValidationError){
            return transformYupErrors(err.inner);
        }
        throw err;
    }

};

export const updateManagerAction = async (prewState, formData) => {
    if(!formData.id) throw new Error("Id is missing");
    try {
      const fields = convertFormDataToJSON(formData);
      ManagerSchema.validateSync(fields, { abortEarly: false });
      const res = await updateManager(fields);
      const data = await res.json();
      if (!res.ok) {
        return response(false, data?.message);
      }
      revalidatePath("/dashboard/manager");
      return response(true, "Manager was updated");
    } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner);
    }
    throw err;
  }

};

export const deleteManagerAction = async (id) => {
  if (!id) throw new Error("Id is missing");
  try {
    const res = await deleteManager(id);
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.message);
    }
      revalidatePath("/dashboard/manager");
      return response(true, "Manager was deleted");
  } catch (err) {
    return response(false, err.message);
  }

};