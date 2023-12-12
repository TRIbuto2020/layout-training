import { Bottom, Container, Left, Right, Title, Top, Text } from "./styles"


const Boxes = () => {
  return (
    <>
      <Title>Boxes</Title>
      <Container>
        <Left>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat ex aliquam tempore, dolorum molestiae culpa explicabo doloribus maxime, et suscipit ipsa ea iusto tempora obcaecati consectetur. Optio, assumenda adipisci.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita numquam veritatis iusto culpa adipisci aliquid, repellat, quaerat ad quas nihil nam beatae dolorum eos? Culpa sit ipsa atque dolores!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum nemo amet, eum similique, quod temporibus deleniti aut natus minus aspernatur nobis.
          </Text>
        </Left>
        <Right>
          <Top>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero molestias fugit minus corporis ex delectus aliquam rerum similique rem, quis, reiciendis provident ducimus id nemo error hic voluptates. Ipsa, magni?Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, harum temporibus itaque, odio non debitis fugiat veniam iste eaque cumque ratione tempore dignissimos commodi possimus aspernatur ipsum amet quibusdam mollitia.
            </Text>
          </Top>
          <Bottom>
            <div>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat ex aliquam tempore, dolorum molestiae culpa explicabo doloribus maxime, et suscipit ipsa ea iusto tempora obcaecati consectetur. Optio, assumenda adipisci.
              </Text>
            </div>
            <div>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat ex aliquam tempore, dolorum molestiae culpa explicabo doloribus maxime, et suscipit ipsa ea iusto tempora obcaecati consectetur. Optio, assumenda adipisci.
              </Text>
            </div>
          </Bottom>
        </Right>
      </Container>
    </>
  )
}

export default Boxes