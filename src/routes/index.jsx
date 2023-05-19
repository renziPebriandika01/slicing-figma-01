import { Route,Switch } from "react-router-dom"
import Home from "../page/home"
import Produk from "../page/produk"
import Navbar from "../components/navbar";
import brands from "../page/brands";
import Categories from "../page/categories";
const route = () => {
  

  return (
    <div>
    <Navbar  />
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produk" exact component={Produk} />
        <Route path="/brands" exact component={brands} />
        <Route path="/categories" exact component={Categories} />
    </Switch>
    </div>
  )
}

export default route
