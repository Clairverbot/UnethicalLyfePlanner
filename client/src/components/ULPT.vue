<template>
  <footer class="ulpt">
    <p>
      {{ ulpt }}
    </p>
    <!-- <p v-for="(str,this.index) in ulpt.slice(0,1)" :key="this.index">{{str.ulpt}}</p> -->
  </footer>
</template>

<script>
import Service from "@/services/Service";
export default {
  name: "ULPT",
  data() {
    return {
      ulpt: "Loading ULPT....",
      ulpts: [],
      index: 0
    };
  },
  mounted() {
    this.getULPTs();
  },
  methods: {
    async getULPTs() {
      const response = await Service.fetchPosts("ulpt");
      this.ulpts = response.data.ulpt;
      this.setUlpt();
      setInterval(this.setUlpt, 8888);
    },
    setUlpt() {
      //set
      this.ulpt = this.ulpts[this.index].ulpt;
      // increment
      this.index++;
      if (this.index === this.ulpts.length) {
        this.index = 0;
      }
    }
  }
};
</script>
<style>
.ulpt {
  text-align: center;
  font-size: 64sp;
}
</style>
