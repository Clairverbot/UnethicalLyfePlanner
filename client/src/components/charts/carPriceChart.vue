<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">
        Car Price by Engine Capacity
      </div>
    </div>
    <div class="card-content">
      <scatter-plot :chart-data="data" :options="options"></scatter-plot>
    </div>
    <footer class="card-footer">
      <p>Cars with 2000cc has the widest range of price. One of the reason being most cars are at 2000 cc because it is more stable and still not too costly when it comes to petrol. Some branded 2000cc car can be more expensive than 2500cc cars as the quality might be betetr</p>
    </footer>
  </div>

</template>

<script>
import ScatterPlot from "./scatterplot.js";
import Service from "@/services/Service";
export default {
  components: {
    ScatterPlot
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Engine Capacity (cc)"
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Basic Cost with COE ($)"
              }
            }
          ]
        }
      },
      data: null
    };
  },
  created() {
    this.getCarData();
  },
  methods: {
    async getCarData() {
      const response = await Service.fetchPosts("carPrice");
      let res = response.data.carPrice;
      this.data = this.parseData(res);
    },
    parseData(res) {
      //   this.data = {};
      //   this.data.labels = ["All"];
      //   this.data.datasets = [{ label: "All", data: [] }];
      let data = {
        labels: ["Data"],
        datasets: [
          {
            label: "Volvo",
            backgroundColor: "rgba(219, 177, 188, 0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "Volkswagen",
            backgroundColor: "rgba(211, 196, 227,0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#4ab5c7",
            data: []
          },
          {
            label: "Toyota",
            backgroundColor: "rgba(143, 149, 211,0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "Subaru",
            backgroundColor: "rgba(137, 218, 255,0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "Renault",
            backgroundColor: "rgba(180, 237, 210,0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "Porsche",
            backgroundColor: "rgba(180, 145, 154, 0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "Peugeot",
            backgroundColor: "rgba(173, 161, 186, 0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "Nissan",
            backgroundColor: "rgba(118, 122, 173, 0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "Mitsubishi",
            backgroundColor: "rgba(113, 179, 209, 0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "Mini",
            backgroundColor: "rgba(148, 194, 172, 0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "Mercedes Benz",
            backgroundColor: "rgba(254, 147, 140, 0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "Mazda",
            backgroundColor: "rgba(237, 175, 151, 0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "Land Rover",
            backgroundColor: "rgba(196, 151, 146, 0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "Kia",
            backgroundColor: "rgba(173, 145, 163, 0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "Jaguar",
            backgroundColor: "rgba(157, 145, 163, 0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "Hyundai",
            backgroundColor: "rgba(247, 238, 127, 0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "Honda",
            backgroundColor: "rgba(241, 166, 106, 0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "B.M.W",
            backgroundColor: "rgba(88, 38, 48, 0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          },
          {
            label: "Audi",
            backgroundColor: "rgba(165, 70, 87, 0.5)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: []
          }
        ]
      };

      for (let i = 0; i < res.length; i++) {
        for (let x = 0; x < data.datasets.length; x++) {
          if (
            res[i].Brand.toUpperCase() == data.datasets[x].label.toUpperCase()
          ) {
            data.datasets[x].data.push({
              x: res[i]["Engine Capacity (cc)"],
              y: res[i]["Basic Cost with COE"]
            });
          }
        }
        // data.datasets[0].data.push({
        //   x: res[i]["Engine Capacity (cc)"],
        //   y: res[i]["Basic Cost with COE"]
        //   });
      }
      return data;
    }
  }
};
</script>
<style scoped>
scatter-plot {
  padding-top: 25%;
  background-color: white;
}
</style>
