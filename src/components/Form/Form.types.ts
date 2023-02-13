export interface IForm {
  onSubmit?: (formValues: IFormValues) => void;
}

export interface IFormValues {
  nome: string;
}
