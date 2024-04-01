import { BtnContainer, ContactBtn, DeveloperTitle, DownloadCv, HeaderSection, InfoContainer, LeoPicture, NomeTitle } from "./Header.style";
import resume from '../../assets/leoResume.pdf'

export default function Header() {
  return (
    <HeaderSection>
        <LeoPicture/>
        <InfoContainer>
            <div>
                <NomeTitle>Leonardo Martin De <br /> Oliveira</NomeTitle>
                <DeveloperTitle>&lt;Developer/&gt;</DeveloperTitle>
            </div>
            <BtnContainer>
                <DownloadCv> <a href={resume} download>Downlaod CV</a></DownloadCv>
                <ContactBtn> <a href="https://api.whatsapp.com/send/?phone=551915630912&text&type=phone_number&app_absent=0" target="blank">Contact</a></ContactBtn>
            </BtnContainer>
        </InfoContainer>
    </HeaderSection>
  )
}
