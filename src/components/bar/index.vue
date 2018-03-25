<template>
  <div>
    <div class="greeting">Hello I'am Bar {{exclamationMarks}}</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import enthusiasm from '../../lib/enthusiasm/index';

export default Vue.component('bar-comp', {
  methods: {
    increment() { enthusiasm.commitIncrement(); },
    decrement() {
      if (enthusiasm.state.count > 1) {
        enthusiasm.commitDecrement();
      }
    },
  },
  computed: {
    exclamationMarks(): string {
      return Array(enthusiasm.state.count + 1).join('!');
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
