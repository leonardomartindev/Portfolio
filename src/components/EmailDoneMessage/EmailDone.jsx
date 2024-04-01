import { DescriptionDone, DoneIcone, OkBtn, PopupContainer, PopupContainerMessage, TitleDone } from "./EmailDone.style";

export default function EmailDone({popupVisible, setPopupVisible}) {
  
  const close = () =>{
    setPopupVisible(false)
  }
  
    return (
    <PopupContainer popupVisible={popupVisible}>
        <PopupContainerMessage>
            <DoneIcone/>
            <TitleDone>Email enviado com sucesso!</TitleDone>
            <DescriptionDone>Seu email logo será respondido, obrigado por entrar em contato :&#41;
 </DescriptionDone>
            <OkBtn onClick={close}>Ok</OkBtn>
        </PopupContainerMessage>
    </PopupContainer>
    )
}
