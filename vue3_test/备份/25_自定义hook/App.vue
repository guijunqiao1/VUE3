<template>
  <Person/>
</template>

<script lang="ts" setup name="Person">
  import Person from "./Person6.vue"
  import { reactive } from 'vue';
  let x= reactive(["规矩切奶哦"]);
  console.log(x);
</script>
