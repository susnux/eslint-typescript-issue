<template>
  <img src="./logo.png" />
  <h1>Hello Vue 3!!!!</h1>
<Fo />
</template>

<script lang="ts">
import { defineComponent  } from "vue";
import Fo from './Fo.vue';

export default defineComponent({
  components: /*undefined, //*/{Fo},
  props: {
    text: {
      type: String,
      required: true
    },
  },
  setup(props) {
    props.text;
  },
});
</script>
