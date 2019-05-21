<template>
  <div>
    <div class="border-div">
      <div>
        <p></p>
        <h3>ENV = {{environment}}</h3>
      </div>
      <div>
        <button v-on:click="go">go to status Page</button>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      environment: BACKEND_URL
    };
  },
  methods: {
    go: function() {
      this.$router.push((path = "status"));
    }
  }
};
</script>
<style scoped>
.border-div {
  border: 1px dashed black;
}
</style>


