<template>
    <div>
        <NavbarHead></NavbarHead>
        <NavbarSide></NavbarSide>
        <div><br><br><br><br><br></div>
        <div class="text-center p-4 m-4">
           <h2>Welcome to armazon the amazon of "arme à feu" (use the english accent pls)</h2> 
           <h3>But the best shotgun you've ever seen by clicking on the button on the left</h3>
        </div>
    </div>
</template>
<script>
  import NavbarHead from '../components/NavbarHead'
  import NavbarSide from '../components/NavbarSide'

  export default {
    name: "ArmaHome",
    components: { 
        NavbarHead,
        NavbarSide
    },
  }
</script>