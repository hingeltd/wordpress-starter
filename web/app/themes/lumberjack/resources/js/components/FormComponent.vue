<template>
  <div class="form">
    <input v-model="$v.text.$model" :class="status($v.text)">

    <pre>{{ $v }}</pre>
  </div>
</template>

<script>
  import {required, minLength} from "vuelidate/lib/validators";
  import store from './../vuex/store';

  export default {
    name: "FormComponent",
    data() {
      return {
        text: '',
        store
      }
    },
    validations: {
      text: {
        required,
        minLength: minLength(5)
      }
    },
    methods: {
      status(validation) {
        return {
          error: validation.$error,
          dirty: validation.$dirty
        }
      }
    },
    mounted: function () {
      store.commit('increment');
      console.log(store.state.count);
    }
  };
</script>

<style scoped>
  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #FDD;
  }

  .error:focus {
    outline-color: #F99;
  }

</style>
