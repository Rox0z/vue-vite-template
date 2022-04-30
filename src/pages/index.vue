<template>
  <div class="container">
    <img alt="Vue logo" class="m-auto" src="../assets/images/logo.png" />
    <HelloWorld :msg="$t('hello.vue')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "../components/HelloWorld.vue";

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
