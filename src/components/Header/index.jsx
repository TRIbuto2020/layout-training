import { colors } from '../../styles'
import { Body, Bubbles, Title, WaveTop } from "./styles"
import { useEffect } from 'react';
import bubbles from '../../assets/bubbles.svg'

function parallax(id, initPos, speed) {
  var s = document.getElementById(id);
  var yPos = 0 - window.scrollY/speed; 
  s.style.top = initPos + yPos + "%"; }

const Header = () => {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      parallax("title", 30, 5)
      parallax("wave", 0, 15)
      parallax("bubbles", 0, 3)
      console.log("Scroll")
    });
  }, []);

    return (
      <Body>
        <WaveTop id='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill={colors.purple} d="M0,128L26.7,160C53.3,192,107,256,160,240C213.3,224,267,128,320,90.7C373.3,53,427,75,480,106.7C533.3,139,587,181,640,213.3C693.3,245,747,267,800,240C853.3,213,907,139,960,122.7C1013.3,107,1067,149,1120,154.7C1173.3,160,1227,128,1280,112C1333.3,96,1387,96,1413,96L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
        </WaveTop>
        <Bubbles id="bubbles" src={bubbles}/>
        <Title id='title'>Layouts</Title>
      </Body>
    )
}

export default Header