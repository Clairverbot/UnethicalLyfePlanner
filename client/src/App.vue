<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import headerVue from "./components/header.vue";
import footerVue from "./components/ULPT.vue";

export default {
  name: "App",
  components: {
    Header: headerVue,
    Footer: footerVue
  }
};
</script>

<style>
#app {
  font-family: "Gaegu", cursive;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.bg {
  min-height: 100vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: auto;
  /* position: absolute; */
  background: linear-gradient(
    124deg,
    #b4d3e2,
    #b9d7e4,
    #dfbde7,
    #e2c2e9,
    #ecd2c6,
    #eed6cb,
    #d6f0d0,
    #dbf2d5
  );
  background-size: 1800% 1800%;

  -webkit-animation: rainbow 18s ease infinite;
  -z-animation: rainbow 18s ease infinite;
  -o-animation: rainbow 18s ease infinite;
  animation: rainbow 18s ease infinite;
}

@-webkit-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@-moz-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@-o-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
</style>
