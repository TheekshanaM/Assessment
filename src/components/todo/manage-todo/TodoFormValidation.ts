import * as Yup from "yup";

const todoFormValidationSchema = Yup.object({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

export { todoFormValidationSchema };
