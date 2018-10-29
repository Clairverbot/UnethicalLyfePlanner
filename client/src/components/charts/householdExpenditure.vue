<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">Household Expenditure by Expenditure Type</div>
    </div>
    <div class="card-content">
      <bar-plot :chart-data="dataCollection" :options="options" />
    </div>
    <footer class="card-footer">
      <p>People in the 81th to 100 expenditure quantile spend a lot more on apparels and communications. However,the other expenses are only slightly higher than other groups.

      </p>
      <br>
    </footer>
  </div>
</template>

<script>
import BarPlot from "./barplot.js";
import Service from "@/services/Service";
export default {
  components: {
    BarPlot
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              ticks: {
                fontSize: 10,
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0
              }
            }
          ]
        }
      },
      dataCollection: null,
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
  methods: {
    async getData() {
      this.response = await Service.fetchPosts("householdExpenditure");
      let res = this.response.data.householdExpenditure;
      this.dataCollection = this.parseData(res);
    },
    parseData(res) {
      let data = {
        labels: [
          "Apparels",
          "Communication",
          "Food and Beverages",
          "Health",
          "Housing and Utilities",
          "Transport"
        ],
        datasets: []
      };
      let x = 0;
      let z = 0;
      for (let i = 0; i < res.length; i += 6) {
        let d = [];
        for (let y = 0; y < 6; y++) {
          d.push(res[i + y].Value);
        }
        data.datasets.push({
          label: res[i]["Expenditure Quintile"],
          backgroundColor: this.color[x],
          data: d
        });
        x++;
      }
      console.log(data);
      return data;
    }
  }
};
</script>

<style>
</style>
