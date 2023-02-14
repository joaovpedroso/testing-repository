import { useFormik } from "formik";
import Button from "components/Button";
import Input from "components/Input";
import { FormSchema } from "./Form.schema";
import * as styled from "./Form.styles";
import { IForm, IFormValues } from "./Form.types";

const INITIAL_VALUES: IFormValues = {
  nome: "",
};

function Form({ onSubmit }: IForm) {
  const form = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: FormSchema,
    onSubmit: handleSubmitForm,
  });

  function handleSubmitForm(values: IFormValues) {
    onSubmit?.(values);
  }

  return (
    <styled.Form onSubmit={form.handleSubmit}>
      <styled.InputGroup>
        <label htmlFor="nome">Nome:</label>
        <Input
          id="nome"
          placeholder="Informe o nome"
          error={!!form.errors.nome && !!form.touched.nome}
          {...form.getFieldProps("nome")}
        />

        {form.touched.nome && form.errors.nome && (
          <span>* {form.errors.nome}</span>
        )}
      </styled.InputGroup>

      <Button type="submit">Enviar dados</Button>
      <Button type="button">Cancelar</Button>
    </styled.Form>
  );
}

export default Form;
