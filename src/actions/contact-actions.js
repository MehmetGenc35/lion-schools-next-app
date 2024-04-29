"use server"

import {
    YupValidationError,
    convertFormDataToJSON,
    transformYupErrors,
    response
} from "@/helpers/form-validation";

import { ContactSchema } from "@/helpers/schemas/contact-schema";
import { createContactMessage } from "@/services/contact-service";

export const createContactMessageAction = async (prewState,formData) => {
    try {
        const fields= convertFormDataToJSON(formData);

        ContactSchema.validateSync(fields, { abortEarly: false });

        const res= await createContactMessage(fields);
        const data= await res.json();

        if(!res.ok){
            return response(false,"",data.validations);
        }
        return response(true,"Your message has been sent");

    } catch (err) {
        if(err instanceof YupValidationError){
            return transformYupErrors(err); 
        }
        throw err;
    }
}