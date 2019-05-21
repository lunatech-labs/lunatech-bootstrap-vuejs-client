<template>
  <div>
    <div class="border-div">
      <h1>Backend status</h1>
      <div>
        <button v-on:click="getStatus">get status</button>
      </div>
      <div>
        <h1>{{status}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      status: "no data"
    };
  },
  methods: {
    getStatus: function() {
      this.$http
        .get(BACKEND_URL + "/healthcheck")
        .then(result => (this.status = result.data));
    }
  }
};
</script>

<style scoped>
.border-div {
  border: 1px dashed black;
}
</style>

