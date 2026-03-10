import emailjs from "@emailjs/browser";

export function sendOrcamento(email: string, name:string, titulo: string, mensagem: string) {
    return emailjs.send(
        "service_64zdlbq",
        "template_d6xqlit",
        {
            email  : email,
            name   : name,
            title  : titulo,
            message: mensagem,
        },
        "CWpLblmnZPenrsEjT"
    );
}