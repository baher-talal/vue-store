
import HomePage from './components/HomePage'
import CartPage from './components/CartPage'

const routes = [
  {path: "/", component: HomePage, name: "home"},
  {path: "/cart", component: CartPage, name: "cart"}
];

export default routes;