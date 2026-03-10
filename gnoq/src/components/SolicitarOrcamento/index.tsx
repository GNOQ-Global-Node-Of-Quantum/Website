"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { sendOrcamento } from "@/utils/email";
import { toast } from "sonner";

export function SolicitarOrcamento() {
    const [open, setOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [email, setEmail] = useState("");
    const [titulo, setTitulo] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [name, setName] = useState("");

    function enviar() {
        setSubmitted(true);
        if (!email || !titulo || !mensagem || !name) {
            toast.error("Preencha todos os campos.");
            return;
        }

        try {
            sendOrcamento(email, name, titulo, mensagem);
            toast.success("Email enviado com sucesso.");
            setOpen(false);
        } catch (error) {
            toast.error("Erro ao enviar o email.");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 transition rounded-xl font-medium cursor-pointer">
                    Solicitar Orçamento
                </Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
                <DialogHeader>
                    <DialogTitle className="text-center">Solicitar Orçamento</DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-2">
                    <Input    
                        placeholder  = "Nome"
                        type         = "text"
                        value        = {name}
                        aria-invalid = {submitted && !name}
                        onChange     = {(e) => setName(e.target.value)} />

                    <Input    
                        placeholder  = "E-mail"
                        type         = "email"
                        value        = {email}
                        aria-invalid = {submitted && !email}
                        onChange     = {(e) => setEmail(e.target.value)} />

                    <Input    
                        placeholder  = "Titulo"
                        type         = "text"
                        value        = {titulo}
                        aria-invalid = {submitted && !titulo}
                        onChange     = {(e) => setTitulo(e.target.value)} />

                    <Textarea 
                        placeholder  = "Descrição da sua ideia"
                        className    = "h-32 resize-none overflow-y-auto break-all"
                        value        = {mensagem}
                        aria-invalid = {submitted && !mensagem}
                        onChange     = {(e) => setMensagem(e.target.value)} />

                    <Button className="cursor-pointer" onClick = {enviar}>Enviar</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}