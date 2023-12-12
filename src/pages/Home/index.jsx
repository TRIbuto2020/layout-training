import { Body} from "./styles"
import Header from "../../components/Header"
import Boxes from "../../components/Boxes"
import ParalaxTitle from "../../components/ParalaxTitle"
import Tear from "../../components/Tear"
import Transition from "../../components/Transition"
import Cards from "../../components/Cards"

const Home = () => {

    return (
      <Body>
        <Header/>
        <ParalaxTitle />
        <Boxes />
        <Tear/>
        <Transition />
        <Cards />
      </Body>
    )
}

export default Home