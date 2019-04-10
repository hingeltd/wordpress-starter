import $ from 'jquery'
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import axios from 'axios';
import FormComponent from './components/FormComponent'
Vue.use(Vuelidate);

$(function () {
  new Vue({
    el: '#app',
    components: {
      FormComponent
    },
    data() {
      return {}
    },
    watch: {},
    methods: {},
    mounted: function () {
      console.log("Hello Vue!");
    }
  });
});
