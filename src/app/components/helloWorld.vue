<template>
  <div>
    Hello World
    <div>
      <div>
        <p></p>
        <h3>ENV = {{environment}}</h3>
      </div>
      <div>
        <button v-on:click="go">Come In!</button>
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
      this.$router.push((path = "welcome"));
    }
  }
};
</script>

