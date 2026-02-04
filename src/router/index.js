import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Shop from "@/views/Shop.vue";
import Product from "@/views/Product.vue";
import Cart from "@/views/Cart.vue";
import Wishlist from "@/views/Wishlist.vue";
import Checkout from "@/views/Checkout.vue";
import Payment from "@/views/Payment.vue";
import Order from "@/views/Order.vue";
import Account from "@/views/Account.vue";
import Services from "@/views/Services.vue";
import Spa from "@/views/Spa.vue";
import Nails from "@/views/Nails.vue";
import Parfume from "@/views/Parfume.vue";
import Makeup from "@/views/Makeup.vue";
import Skincare from "@/views/Skincare.vue";
import Hair from "@/views/Hair.vue";
import Blog from "@/views/Blog.vue";
import Post from "@/views/Post.vue";
import Contact from "@/views/Contact.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/shop", name: "Shop", component: Shop },
  { path: "/product", name: "Product", component: Product },
  { path: "/cart", name: "Cart", component: Cart },
  { path: "/wishlist", name: "Wishlist", component: Wishlist },
  { path: "/checkout", name: "Checkout", component: Checkout },
  { path: "/payment", name: "Payment", component: Payment },
  { path: "/order", name: "Order", component: Order },
  { path: "/account", name: "Account", component: Account },
  { path: "/services", name: "Services", component: Services },
  { path: "/spa", name: "SPA", component: Spa },
  { path: "/nails", name: "Nails", component: Nails },
  { path: "/perfume", name: "Perfume", component: Parfume },
  { path: "/makeup", name: "Make Up", component: Makeup },
  { path: "/skincare", name: "Skin Care", component: Skincare },
  { path: "/haircare", name: "Hair", component: Hair },
  { path: "/news", name: "News", component: Blog },
  { path: "/post", name: "News Post", component: Post },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});
export default router;
