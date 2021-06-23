<template>
  <nav
    class="navbar navbar-expand-lg bg-primary fixed-top"
    style="background-color: grey !important"
  >
    <TitleFrame></TitleFrame>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor03"
      aria-controls="navbarColor03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse justify-content-end"
      id="navbarColor03"
    >
      <span class="navbar-text mr-3" v-if="userName != ''"
        ><h4>Connected as {{ userName }}</h4></span
      >
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a
            class="nav-link"
            @mouseover="displaycart()"
            href="#"
            data-toggle="dropdown"
            ><img
              src="../assets/cart.png"
              alt="handshake"
              width="40px"
              class=""
          /></a>
          <ul class="dropdown-menu dropdown-menu-right" style="">
            <li v-for="items in cart" v-bind:key="items.id">
              <a class="dropdown-item" href="#">
                Article : {{ items.name }} | {{ items.price }}€</a
              >
            </li>
            <li class="dropdown-item">TOTAL : {{ this.totalprice }}€</li>
            <li class="dropdown-item uppercase">
              <router-link to="/cart" href="#">Pay now</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <button
        type="button"
        v-on:click="logout()"
        class="btn btn-primary"
        style="background-color: grey; border: grey"
      >
        <img src="../assets/log.png" alt="handshake" width="40px" class="" />
      </button>
    </div>
  </nav>
</template>

<script>
import TitleFrame from "./TitleFrame";
import Productservice from "../services/Product.service";

export default {
  name: "NavbarHead",
  components: {
    TitleFrame,
  },
  data() {
    return {
      userName: "",
      cart: [],
      totalprice: 0,
    };
  },
  methods: {
    displaycart: function () {
      this.totalprice = 0
      let b = parseInt(localStorage.getItem("tmp"))
      console.log(b)
      for(let t = 1; t<b; t++){
        console.log("boucle passage : ",t,"local id",localStorage.getItem("article"+t))
        Productservice.getOneProductById(JSON.parse(localStorage.getItem("article"+t)))
        .then((res) => {
        if (res) { 
          this.cart = this.cart+res;
        }
      })
      }
      let i = 0;
      for (i; i < this.cart.length; i++) {
        this.totalprice = this.totalprice + this.cart[i].price;
      }
      console.log(this.cart.length + " : " + this.cart[1]);
    },
    logout: function () {
      localStorage.removeItem("name");
      localStorage.removeItem("password");
      localStorage.clear();
      window.location = "/";
    },
  },
  mounted() {
    this.isConnected = localStorage.getItem("name") !== null;
    if (this.isConnected) {
      this.userName = localStorage.getItem("name");
    } else {
      localStorage.clear();
      localStorage.removeItem("name");
      localStorage.removeItem("jwt");
      window.location = "/";
    }
  },
};
</script>
<style scoped>
@media all and (min-width: 992px) {
  .navbar .nav-item .dropdown-menu {
    display: none;
  }
  .navbar .nav-item:hover .nav-link {
    color: #fff;
  }
  .navbar .nav-item:hover .dropdown-menu {
    display: block;
  }
  .navbar .nav-item .dropdown-menu {
    margin-top: 0;
  }
}
</style>