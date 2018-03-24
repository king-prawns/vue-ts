<template>
  <div>
    <div class="greeting">Hello I'am Bar {{exclamationMarks}}</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { sum, sub } from '../../lib/maths';

export default Vue.component('bar-comp', {
  data() {
    return {
      enthusiasm: 1,
    };
  },
  methods: {
    increment() { this.enthusiasm = sum(this.enthusiasm, 1); },
    decrement() {
      if (this.enthusiasm > 1) {
        this.enthusiasm = sub(this.enthusiasm, 1);
      }
    },
  },
  computed: {
    exclamationMarks(): string {
      return Array(sum(this.enthusiasm, 1)).join('!');
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
div {
  .greeting {
    font-size: 50px;
  }
}
</style>
