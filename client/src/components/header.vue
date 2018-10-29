<template>

    <nav class="navbar is-transparent">
        <div class="container">
            <div class="navbar-brand">
                <router-link to='/home' class="navbar-item">
                    <img src="@/assets/smallogo.png" />
                    <h1>
                        <b>Unethical Lyfe Advisor</b>
                    </h1>
                </router-link>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-end">
                    <router-link to='/Quiz' class="navbar-item">
                        Quiz
                    </router-link>
                    <router-link to='/Overview' class="navbar-item">
                        Overview
                    </router-link>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" href="#">
                            About
                        </a>
                        <div class="navbar-dropdown is-boxed">
                            <a class="navbar-item" href="#">
                                What iz dis
                            </a>
                            <a class="navbar-item" href="#">
                                Donation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import router from "../router";
export default {
  name: "Header",
  methods: {
    navigate() {
      router.push({ name: "Quiz" });
      router.push({ name: "HelloWorld" });
      router.push({ name: "Overview" });
    }
  }
};
</script>

<style scoped>
.navbar {
  opacity: 0.8;
  margin-bottom: 3rem;
}
</style>
