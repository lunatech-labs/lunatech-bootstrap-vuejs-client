<template>
  <div>
    <div>
      <h1>Backend status</h1>
      <div>
        <button v-on:click="getStatus">get status</button>
      </div>
      <div>
        <p>{{status}}</p>
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

