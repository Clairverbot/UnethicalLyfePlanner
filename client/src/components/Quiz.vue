<template>
  <div class="container">
    <div class="has-text-left">
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <form v-if="!formSubmitted">
            <b-field :message="namemessage" :type="nametype" label="Name">
              <b-input v-model="name" placeholder="eg: Monika"></b-input>
            </b-field>
            <b-field :message="agemessage" :type="agetype" label="Age">
              <b-input v-model="age" placeholder="eg: 20" type="number" min="5" max="120">
              </b-input>
            </b-field>
            <br>

            <div class="field">
              <b>Are You a Student?</b> No
              <b-switch v-model="isStudent" type="is-primary">
              </b-switch>
              Yes
            </div>
            <b-field v-if="!isStudent" :message="occupationmessage" :type="occupationtype" label="Occupation">
              <b-autocomplete v-model="occupation" :data="filteredDataArray" placeholder="Choose one that fits your job most..." icon="magnify" @select="option => occupation = option">
                <template slot="empty">No results found</template>
              </b-autocomplete>
            </b-field>
            <b-field v-if="!isStudent" :message="salarymessage" :type="salarytype" label="Current Salary">
              <b-input v-model="salary" icon="currency-usd" placeholder="eg: 4000" type="number">
              </b-input>
            </b-field>

            <b-field v-if="isStudent" label="Course of Study" :message="COSmessage" :type="COStype">
              <b-autocomplete v-model="courseOfStudy" :data="dropdown2" placeholder="Choose one that fits your course type most..." icon="magnify" @select="option => courseOfStudy = option">
                <template slot="empty">No results found</template>
              </b-autocomplete>
            </b-field>

            <br>
            <br>
            <b-field label="How much do you spend on Apparels? (per month, estimated)" :message="apparelsmessage" :type="apparelstype">
              <b-input v-model="apparels" icon="currency-usd" placeholder="eg: 40" type="number">
              </b-input>
            </b-field>
            <b-field label="How much do you spend on Wifi &amp; Mobile Data Plans? (per month, estimated)" :message="commmessage" :type="commtype">
              <b-input v-model="comm" icon="currency-usd" placeholder="eg: 40" type="number">
              </b-input>
            </b-field>
            <b-field label="How much do you spend on Food? (per day, estimated)" :message="foodmessage" :type="foodtype">
              <b-input v-model="food" icon="currency-usd" placeholder="eg: 20" type="number">
              </b-input>
            </b-field>
            <b-field :message="utilmessage" :type="utiltype" label="Estimated Household Utilities Cost per Month (eg: Electricity, Water)">
              <b-input v-model="util" icon="currency-usd" placeholder="eg: 40" type="number">
              </b-input>
            </b-field>
            <b-field label="How much do you spend on Transport? (per month, estimated)" :message="transmessage" :type="transtype">
              <b-input v-model="trans" icon="currency-usd" placeholder="eg: 20" type="number">
              </b-input>
            </b-field>
            <b-field label="Do you want to buy any of these car? ( ͡° ͜ʖ ͡°)">
              <b-autocomplete v-model="car" :data="dropdown4" placeholder=" ( ͡° ͜ʖ ͡°)" icon="magnify" @select="option => car = option">
                <template slot="empty">No results found</template>
              </b-autocomplete>
            </b-field>
            <button class="button is-fullwidth is-primary" @click.prevent="formSubmit">Submit</button>
            <br>
            <br>
          </form>
        </div>
      </div>
      <b-loading :is-full-page="true" :active.sync="isLoading"></b-loading>
    </div>
    <div v-if="formSubmitted" class="section">
      <h1 class="title">Hi {{name}}, here's our analysis for you</h1>

      <div class="card">
        <div class="card-header">
          <div class="card-header-title">Distribution of your spendings</div>
        </div>
        <div class="card-content">
          <doughnut :chart-data="dataCollection" :options="options" />
        </div>
      </div>
      <br>
      <div class="card">
        <div class="card-header">
          <div class="card-header-title">How much are you earning comparing with other {{occupation}}</div>
        </div>
        <div class="card-content">
          <h3 class="You">You: {{salary}}</h3>
          <h3 class="NotYou">Highest in our dataset: {{maxpay}}</h3>
          <progress class="progress is-primary is-large" :value="salary" :max="maxpay">{{salary/maxpay}}</progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import Service from "@/services/Service";
import doughnut from "./charts/doughnutplot.js";
export default {
  name: "Quiz",
  components: {
    doughnut
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animationEasing: "easeOutBounce",
        pieceLabel: {
          mode: "percentage",
          precision: 1
        }
      },
      dataCollection: {
        labels: [
          "Remaining Salary",
          "Apparels",
          "Wifi & Data",
          "Food",
          "Utilities",
          "Transport"
        ],
        datasets: [
          {
            backgroundColor: [
              "#957D95",
              "#ECB8A5",
              "#AEADF0",
              "#E49AB0",
              "#565676",
              "#CDDDDD"
            ],
            data: [3000, 2, 3, 4, 5, 6]
          }
        ]
      },

      name: "",
      namemessage: "",
      nametype: "",

      age: "",
      agemessage: "",
      agetype: "",

      isStudent: false,

      occupation: "",
      occupationmessage: "",
      occupationtype: "",
      dropdown1: [],

      salary: "",
      salarymessage: "",
      salarytype: "",

      courseOfStudy: "",
      COSmessage: "",
      COStype: "",
      dropdown2: [],

      apparels: "",
      apparelsmessage: "",
      apparelstype: "",

      comm: "",
      commmessage: "",
      commtype: "",

      food: "",
      foodmessage: "",
      foodtype: "",

      util: "",
      utilmessage: "",
      utiltype: "",

      trans: "",
      transmessage: "",
      transtype: "",

      car: "Nope",
      dropdown4: ["Nope", "Car", "Car"],

      formSubmitted: false,
      isLoading: false,

      maxpay: 0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let response = await Service.fetchPosts("payByIndustry");
      let res = response.data.pbi;
      for (let i = 0; i < res.length; i++) {
        this.dropdown1.push(res[i].index);
      }
      let response1 = await Service.fetchPosts("startingPay");
      let res1 = response1.data.startingPay;
      for (let i = 0; i < res1.length; i++) {
        this.dropdown2.push(res1[i]["Course Cluster"]);
      }
      this.dropdown2 = this.dropdown2.filter(this.onlyUnique);
    },
    async getMaxPay() {
      let response = await Service.fetchPosts("payByIndustry");
      let res = response.data.pbi;
      for (let i = 0; i < res.length; i++) {
        if (res[i].index === this.occupation) {
          this.maxpay = Math.max(
            res[i]["25  -  29  Years Basic Wage ($)"],
            res[i]["30  -  39  Years Basic Wage ($)"],
            res[i]["40  -  49  Years  Basic Wage ($)"],
            res[i]["50  -  59  Years Basic Wage ($)"],
            res[i]["75th Percentile ($)"]
          );
        }
      }
    },
    onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    },
    formSubmit() {
      this.isLoading = true;
      if (!this.checkInputs()) {
        this.isLoading = false;
        return;
      }
      //call load graph stuff here
      setTimeout(() => {
        this.formSubmitted = true;
        this.drawDoughnut();

        this.getMaxPay();
        this.isLoading = false;
      }, 1000);
    },
    async drawDoughnut() {
      this.dataCollection.datasets[0].data = [
        this.salary -
          this.apparels -
          this.comm -
          this.food * 30 -
          this.util -
          this.trans,
        this.apparels * 1,
        this.comm * 1,
        this.food * 30,
        this.util * 1,
        this.trans * 1
      ];
    },
    checkInputs() {
      this.clearError();
      let noError = true;
      if (this.name === "") {
        this.namemessage = "Name cannot be empty!";
        this.nametype = "is-danger";
        noError = false;
      }
      if (this.age === "") {
        this.agemessage = "Age cannot be empty!";
        this.agetype = "is-danger";
        noError = false;
      }
      if (!this.isStudent && this.occupation === "") {
        this.occupationmessage = "Occupation cannot be empty!";
        this.occupationtype = "is-danger";
        noError = false;
      }
      if (!this.isStudent && this.salary === "") {
        this.salarymessage = "Salary cannot be empty!";
        this.salarytype = "is-danger";
        noError = false;
      }
      if (this.isStudent && this.courseOfStudy === "") {
        this.COSmessage = "Course of Study cannot be empty!";
        this.COStype = "is-danger";
        noError = false;
      }
      if (this.apparels === "") {
        this.apparelsmessage = "This cannot be empty!";
        this.apparelstype = "is-danger";
        noError = false;
      }
      if (this.comm === "") {
        this.commmessage = "This cannot be empty!";
        this.commtype = "is-danger";
        noError = false;
      }
      if (this.food === "") {
        this.foodmessage = "This cannot be empty!";
        this.foodtype = "is-danger";
        noError = false;
      }
      if (this.util === "") {
        this.utilmessage = "This cannot be empty!";
        this.utiltype = "is-danger";
        noError = false;
      }
      if (this.trans === "") {
        this.transmessage = "This cannot be empty!";
        this.transtype = "is-danger";
        noError = false;
      }
      return noError;
    },
    clearError() {
      this.namemessage = "";
      this.nametype = "";
    }
  },
  computed: {
    filteredDataArray() {
      return this.dropdown1.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.occupation.toLowerCase()) >= 0
        );
      });
    }
  }
};
</script>

<style scoped>
.You {
  display: flex;
  align-content: left;
}
.NotYou {
  display: flex;
  width: 100%;
  align-content: right;
}
</style>
