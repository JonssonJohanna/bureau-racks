import { AboutText, Heading, HeadingWrapper, ImageWrapper } from "./styles";
import standing from './../../public/standing.png'
import Image from 'next/image'




const Info = () => {
  return (
    <HeadingWrapper>
      <Heading>Om oss</Heading>
      <AboutText>
      Förra året registrerades 78 000 hundar i Sverige enligt Jordbruksverket. En ökning med nästan 25% jämfört med 2019 
      och även den största ökningen av SKKs register under hela 2000-talet. Och vi förstår, en hund är supermysigt men
       också ett ansvar som kräver mycket tid och närvaro. 
       <br></br>
       <br></br>
      Att inte kunna ta med hunden ställer till det för många. Det innebär oftast mycket planering och stora kostnader 
      för ägaren och kan i sig bli en daglig stress i vår annars redan fullspäckade vardag.Byrårackor.se är för dig
       som vill se dina möjligheter oavsett om du har egen hund och vill kunna ta med till jobbet, eller om du bara 
       söker en byrå där det redan finns en gosig kontorskompis.<br></br>
       <br></br>
       <br></br>
      Saknas din byrå på listan?
      Mejla oss på info@byrårackor.se

      <ImageWrapper>
      <Image src={standing} width='150px' height='120px' alt='standing dog'/>
      </ImageWrapper>
      </AboutText>

    </HeadingWrapper>
    
  );
};

export default Info;
