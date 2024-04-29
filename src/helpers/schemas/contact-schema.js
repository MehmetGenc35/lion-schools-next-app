import * as Yup from "yup";

//schemaları burda
//fetch leri services da
//actionları action içinde yapmış olacağız
export const ContactSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});
