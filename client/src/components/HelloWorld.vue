<template>

  <body>
    <img src="@/assets/logo.png" />
    <h1 class="title">{{msg}}</h1>
    <p class="subtitle">LYFE ADVICE JUST FOR YOU (IF YOU HAVE A LYFE)</p>
    <div class="field is-grouped">
      <router-link to="Quiz" class="button is-Large is-fullwidth">
        Take Quiz
      </router-link>
      <router-link to="Overview" class="button is-Large is-fullwidth">Overview</router-link>
    </div>
    <br>
    <br>
    <br>
    <br>
    <!--please act like you never see 4 brs-->
    <!--see the code for other page instead-->
    <!--and you'll realise all codes are equally bad LOL-->
    <footer-vue/>
  </body>
</template>

<script>
import router from "../router";
import footerVue from "./ULPT.vue";

export default {
  name: "HelloWorld",
  components: {
    footerVue: footerVue
  },
  data() {
    return {
      msg: "Unethical Lyfe Advisor"
    };
  },
  methods: {
    navigate() {
      router.push({ name: "Quiz" });
      router.push({ name: "Overview" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-family: "Gaegu", cursive;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
}
.title {
  margin-top: 2%;
  font-size: 96sp;
  font-weight: bold;
}

div {
  flex: 1;
  width: 40%;
}

.subtitle {
  font-size: 36sp;
}

footerVue {
  bottom: 0;
  padding: 2%;
  position: absolute;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
}
</style>
