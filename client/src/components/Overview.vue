<template>
  <div class="container">
    <div class="columns">
      <div class="columns is-multiline">
        <div class="column is-4">
          <line-plot/>
        </div>
        <div class="column is-4">
          <box-plot/>
        </div>
        <div class="column is-4">
          <histogram/>
        </div>
        <div class="column is-6">
          <bar-plot/>
        </div>
        <div class="column is-6">
          <scatter-plot/>
        </div>
      </div>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
import scatterPlot from "./charts/carPriceChart";
import linePlot from "./charts/incomeByAge2";
import histogram from "./charts/histogram";
import barPlot from "./charts/householdExpenditure";
import boxPlot from "./charts/boxPlot";
export default {
  name: "Overview",

  components: {
    scatterPlot,
    linePlot,
    histogram,
    barPlot,
    boxPlot
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.overview {
  padding-top: 5%;
  display: inline;
}
line-plot {
  width: 30%;
  height: 30%;
}
</style>
