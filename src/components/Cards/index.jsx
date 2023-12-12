import { Bg, Card, Container } from "./styles"
import pattern from "../../assets/patternCard.jpg"

const numbers = [1, 2, 3, 4, 5]

const Cards = () => {
  return (
    <Bg>
      <Container>
        {numbers.map((number) =>
          <Card key={number} className="card">
            <img src={pattern} alt="" />
            <h1><a href="#0">Card</a></h1>
            <p>Um card com imagem e/ou texto.</p>   
          </Card>
        )}
      </Container>
    </Bg>
  )
}

export default Cards