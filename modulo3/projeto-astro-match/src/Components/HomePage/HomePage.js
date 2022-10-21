import Header from "../Header/Header";
import Card from "../Card/Card";
import { HomepageContainer } from "./Styles";

export function Homepage() {
  return (

    <HomepageContainer>
      <Header />
      <main>
        <Card />
        <Card />
      </main>
    </HomepageContainer>


  )
}