import { useState } from "react";
import { ContactSection, FormContainer, Input, SubmitBtn, TextArea, TitleForm } from "./Contact.style";
import emailJs from '@emailjs/browser'
import EmailDone from "../EmailDoneMessage/EmailDone";

export default function Contact() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [popupVisible, setPopupVisible] = useState(false)


  function sendEmail(e){
    e.preventDefault();
    setPopupVisible(true)
    
    if(email === '' || nome === '' || message === '' ){
        alert("Nenhum campo pode estar vázio!")
        return;
    }
    setEmail("");
    setNome("");
    setMessage("");

    const templateParams ={
        from_name: nome,
        message: message,
        email: email,
    }

    emailJs.send("service_ilo6upj", "template_ao78ijo",templateParams, "5HpiXyEvO3kJDIycD")
    .then((response)=>{
        console.log("EMAIL ENVIADO", response.status, response.text)
    }, (err) =>{
        console.log("ERRO: ", err)
    })

  }


  return (
    <ContactSection>
        <TitleForm>Contato</TitleForm>
        <FormContainer onSubmit={sendEmail}>
            <Input id="nome" onChange={(e)=> setNome(e.target.value)} value={nome} type="text" name="name" placeholder="Nome*" required/>
            <Input id="email" onChange={(e)=> setEmail(e.target.value)} value={email} type="email" name="email" placeholder="E-mail*" required/>
            <TextArea id="message" onChange={(e)=> setMessage(e.target.value)} value={message} name="message" placeholder="Mensagem"/>
            <SubmitBtn type="submit">Enviar</SubmitBtn>
        </FormContainer>
        <EmailDone popupVisible={popupVisible} setPopupVisible={setPopupVisible}/>
    </ContactSection>
  )
}
