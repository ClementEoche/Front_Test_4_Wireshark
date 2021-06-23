<template>
  <div>
    <NavbarHead></NavbarHead>
    <NavbarSide></NavbarSide>
    <div><br /><br /><br /><br /><br /></div>
    <div class="text-center p-4 m-4">
      <h2>All Products</h2>
    </div>
    <div class="row text-center p-4 ml-5">
      <div
        v-for="prod in prods"
        v-bind:key="'key' + prod.id + prod.name"
        style="background-color: grey; width: 20%"
        class="m-4"
      >
        <a class="nav-link">
          <router-link
            :to="{ path: '/OneProd/' + prod.id }"
            style="text-decoration: none; color: inherit"
          >
            {{ prod.name }}
          </router-link>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarHead from "../components/NavbarHead";
import NavbarSide from "../components/NavbarSide";
import Productservice from "../services/Product.service";

export default {
  name: "SubCategories",
  data() {
    return {
      prods: [],
    };
  },
  methods: {},

  components: {
    NavbarHead,
    NavbarSide,
  },
  created() {},
  mounted: async function () {
    Productservice.getAllProduct()
      .then((res) => {
        if (res) {
          this.prods = res;
        }
      })
      .catch((err) => console.log(err));
  },
};
</script>