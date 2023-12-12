import { Body} from "./styles"
import Header from "../../components/Header"
import Boxes from "../../components/Boxes"
import ParalaxTitle from "../../components/ParalaxTitle"
import Tear from "../../components/Tear"

const Home = () => {

    return (
      <Body>
        <Header/>
        <ParalaxTitle />
        <Boxes />
        <Tear/>
      </Body>
    )
}

export default Home