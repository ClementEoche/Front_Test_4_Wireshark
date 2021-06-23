<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-left" style="background-color:grey!important">
    <div class="collapse navbar-collapse mt-4" id="navbarsExampleDefault" style="padding-top:6em;">
      <ul class="navbar-nav">
        <li class="nav-item text-center">
          <a class="nav-link mt-2">
            <router-link to="./ArmaHome" style="text-decoration: none; color: inherit;"><h4>Accueil</h4></router-link>              
          </a>
        </li>
        <li class="nav-item text-center mt-2">
            <a class="nav-link" >
                <router-link to="/Category" style="text-decoration: none; color: inherit;"><h4>Categories</h4></router-link>              
            </a>
        </li>
        <li class="nav-item text-center mt-2">
            <a class="nav-link" >    
                <router-link to="/SubCategory" style="text-decoration: none; color: inherit;"><h4>Subcategories</h4></router-link>              
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-center mt-2">    
                <router-link to="/AllProducts" style="text-decoration: none; color: inherit;"><h4>All Product</h4></router-link>              
            </a>
        </li>
      </ul>  
    </div>
</nav>
</template>
<script>
  export default {
    name: "NavbarSide",
    methods:{
    },
  }
  
</script>
<style>
body{padding-top:90px}
@media (min-width:768px){
    body{padding-top:0}
}
@media (min-width:768px){
    body{margin-left:232px}
}

.navbar.fixed-left{position:fixed;top:0;left:0;right:0;z-index:-1}

@media (min-width:768px){
    .navbar.fixed-left{bottom:0;width:232px;flex-flow:column nowrap;align-items:flex-start}
    .navbar.fixed-left .navbar-collapse{flex-grow:0;flex-direction:column;width:100%}
    .navbar.fixed-left .navbar-collapse .navbar-nav{flex-direction:column;width:100%}
    .navbar.fixed-left .navbar-collapse .navbar-nav .nav-item{width:100%}
    .navbar.fixed-left .navbar-collapse .navbar-nav .nav-item .dropdown-menu{top:0}
}

@media (min-width:768px){
    .navbar.fixed-left{right:auto}
    .navbar.fixed-left .navbar-nav .nav-item .dropdown-toggle:after{border-top:.3em solid transparent;border-left:.3em solid;border-bottom:.3em solid transparent;border-right:none;vertical-align:baseline}
    .navbar.fixed-left .navbar-nav .nav-item .dropdown-menu{left:100%}}
</style>