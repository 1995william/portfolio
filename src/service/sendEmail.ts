import emailjs from "@emailjs/browser";

export const sendEmail = (formulario: HTMLFormElement) => {
  emailjs
    .sendForm(
      "mensagemPortfolio",
      "template_i2fs162",
      formulario,
      "H4lVi7qfJ6IdynUBF"
    )
    .then(
      (result) => {
        console.log(result.text);
        console.log("Mensagem enviada com sucesso");
      },
      (error) => {
        console.log(error.text);
        console.log("Falha ao enviar mensagem. Tente novamente!");
      }
    );
};
