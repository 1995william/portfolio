import * as yup from "yup";

export const validationSchema = yup.object().shape({
    nome: yup.string().required("Preencha seu nome."),
    email: yup.string().email("E-mail inválido").required("Preencha seu E-mail."),
    mensagem: yup.string().required("Digite sua mensagem.")
});