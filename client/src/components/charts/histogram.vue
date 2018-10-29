<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">
        Histogram of pay range by age
      </div>
    </div>
    <div class="card-content">
      <section>
        <div class="block">
          Age:
          <b-radio class="is-small" v-model="radio" native-value="All">
            Average
          </b-radio>
          <b-radio class="is-small" v-model="radio" native-value="25  -  29  Years Basic Wage ($)">
            25-29
          </b-radio>
          <b-radio class="is-small" v-model="radio" native-value="30  -  39  Years Basic Wage ($)">
            30-39
          </b-radio>
          <b-radio class="is-small" v-model="radio" native-value="40  -  49  Years  Basic Wage ($)">
            40-49
          </b-radio>
          <b-radio class="is-small" v-model="radio" native-value="50  -  59  Years Basic Wage ($)">
            50-59
          </b-radio>
        </div>
      </section>
      <g-chart type="Histogram" :data="chartData" :options="chartOptions" />
    </div>
     <footer class="card-footer">
       <p>An average Singaporean’s pay is around 2k to 6k. Also, the graph became more left skewed as the age increases. This shows that singaporeans generally gets richer and richer. </p>
  </footer>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import Service from "@/services/Service";
export default {
  components: {
    GChart
  },
  data() {
    return {
      radio: "25  -  29  Years Basic Wage ($)",
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [["Occupation", "Basic Wages"]],
      chartOptions: {
        width: 400,
        height: 375,
        legend: { position: "none" },
        hAxis: {
          title: "Basic Wages",
          slantedText: true,
          slantedTextAngle: 60, // here you can even use 180
          format: "currency",
          textStyle: {
            fontSize: 10
          },
          ticks: [0, 2000, 4000, 6000, 8000,10000,12000,14000,16000,18000,20000]

        },
        vAxis: {
          title: "Number of Occurence",
          format: "0"
        },
        colors: ["#C7B8EA"]
      },
      response: null
    };
  },
  created() {
    this.getData();
  },
  watch: {
    radio: function() {
      this.getData();
    }
  },
  methods: {
    async getData() {
      this.chartData = [];
      if (this.response === null) {
        this.response = await Service.fetchPosts("payByIndustry");
      }
      let res = this.response.data.pbi;
      this.chartData = this.parseData(res);
    },
    parseData(res) {
      let data = [["Occupation", "Basic Wages"]];
      for (let i = 0; i < res.length; i++) {
        if (this.radio == "All") {
          data.push([
            res[i]["index"],
            (res[i]["25  -  29  Years Basic Wage ($)"] +
              res[i]["30  -  39  Years Basic Wage ($)"] +
              res[i]["40  -  49  Years  Basic Wage ($)"] +
              res[i]["50  -  59  Years Basic Wage ($)"]) /
              4
          ]);
        } else {
          data.push([res[i]["index"], res[i][this.radio]]);
        }
      }
      return data;
    }
  }
};
</script>

<style>
</style>
