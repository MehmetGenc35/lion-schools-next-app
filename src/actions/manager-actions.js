"use server"

const { convertFormDataToJSON, response, YupValidationError, transformYupErrors } = require("@/helpers/form-validation");
const { ManagerSchema } = require("@/helpers/schemas/manager-schema");
const { createManager, updateManager } = require("@/services/manager-service");

export const createManagerActions=async(prewState,formData)=>{

    try {
        const fields= convertFormDataToJSON(formData);
        
        ManagerSchema.validateSync(fields, { abortEarly: false });

        const res= await createManager(fields);

        const data= res.json();

        if(!res.ok){
            return response(false,data?.message);
        }
    } catch (err) {
        if(err instanceof YupValidationError){
            return transformYupErrors(err.inner);
        }
        throw err;
    }
  //revalidatePath("/dashboard/admin");
  return response(true, "Manager was created");
};

export const updateManagerAction = async (prewState, formData) => {
    if(!formData.id) throw new Error("Id is missing");
    try {
        const fields= convertFormDataToJSON(formData);
        ManagerSchema.validateSync(fields, { abortEarly: false });
        const res= await updateManager(fields);
        const data= await res.json();
        if (!res.ok) {
            return response(false, data?.message);
        }
    } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner);
    }
    throw err;
  }
  //revalidatePath("/dashboard/admin");
  return response(true, "Manager was updated");
};

export const deleteManagerAction = async (id) => {
  if (!id) throw new Error("Id is missing");
  try {
    const res = await deleteManager(id);
    if (!res.ok) {
      // API daki donus degeri json degil string oldugu icin res.text() ile karsilamak zorunda kaldik
      const data = await res.text();
      throw new Error(data);
    }
  } catch (err) {
    return response(false, err.message);
  }
  revalidatePath("/dashboard/manager");
  return response(true, "Manager was deleted");
};