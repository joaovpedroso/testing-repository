import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
  nome: Yup.string().required(),
});
