<template>
  <div class="card">
    <div class="card-header">
      <h1 class="card-header-title">Basic Wages by Age</h1>
      <div class="card-header-icon">
        <b-dropdown position="is-bottom-left">
          <button class="button is-small" slot="trigger">
            <span>{{category[selectedCategory]}}</span>
            <b-icon icon="menu-down"></b-icon>
          </button>
          <b-dropdown-item class="has-text-left" :key="index" v-for="(c, index) in category" :value=c @click="selectedCategory = index">
            {{c}}
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div class="card-content">
      <line-plot :chart-data="data" :options="options" />
    </div>
    <footer class="card-footer">
      <p>Some job's salary increases by age (gained experiences), but some job's salary decreases by age (due to decrease of physical energy).</p>
    </footer>
  </div>

</template>

<script>
import LinePlot from "./lineplot.js";
import Service from "@/services/Service";
export default {
  components: {
    LinePlot
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Basic Wage ($)"
              }
            }
          ],
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Age"
              }
            }
          ]
        }
      },
      data: null,
      category: [
        "PROFESSIONALS",
        "CLERICAL SUPPORT WORKERS",
        "ASSOCIATE PROFESSIONALS AND TECHNICIANS",
        "MANAGERS",
        "CLEANERS, LABOURERS AND RELATED WORKERS",
        "CRAFTSMEN AND RELATED TRADES WORKERS",
        "SERVICE AND SALES WORKERS",
        "PLANT AND MACHINE OPERATORS AND ASSEMBLERS"
      ],
      selectedCategory: 0,
      response: null,
      color: [
        "rgba(219, 177, 188, 0.5)",
        "rgba(211, 196, 227,0.5)",
        "rgba(143, 149, 211,0.5)",
        "rgba(137, 218, 255,0.5)",
        "rgba(180, 237, 210,0.5)"
      ]
    };
  },
  created() {
    this.getData();
  },
  watch: {
    selectedCategory: function() {
      this.getData();
    }
  },
  methods: {
    async getData() {
      if (this.response === null) {
        this.response = await Service.fetchPosts("payByIndustry");
      }
      let res = this.response.data.pbi;
      this.data = this.parseData(res);
    },
    parseData(res) {
      let data = {
        labels: ["25-29", "30-39", "40-49", "50-59"],
        datasets: []
      };
      for (let i = 0; i < res.length; i++) {
        if (
          res[i].Category.toUpperCase() == this.category[this.selectedCategory]
        ) {
          if (data.datasets.length <= 5) {
            data.datasets.push({
              label: res[i].index,
              backgroundColor: this.color[data.datasets.length],
              data: [
                res[i]["25  -  29  Years Basic Wage ($)"],
                res[i]["30  -  39  Years Basic Wage ($)"],
                res[i]["40  -  49  Years  Basic Wage ($)"],
                res[i]["50  -  59  Years Basic Wage ($)"]
              ]
            });
          }
        }
      }
      return data;
    }
  }
};
</script>

<style>
.button {
  font-family: "Gaegu", cursive;
}
</style>
