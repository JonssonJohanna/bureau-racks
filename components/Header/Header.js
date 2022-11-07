import { TitleWrapper, Heading  } from "./styles";
import walking from './../../public/walking.png'
import Image from 'next/image'


 const Header = () => {
    return (
    
        <TitleWrapper>
        <Heading>
        <text>Byrårackor</text>
      </Heading>
      <Image src={walking} width='150' height='120px' alt='standing dog'/>
         </TitleWrapper>
    );
  };
  






export default Header;
