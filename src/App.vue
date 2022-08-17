<script setup>
import TopHeader from "./components/header/index.vue";
import Message from "./components/Message.vue";

</script>

<template>
  <main>
    <n-message-provider>
      <message />
    </n-message-provider>

    <top-header />

    <router-view />
  </main>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
  methods: {
    show() {},
  },
});
</script>

<style scoped>
/* https://images.weserv.nl/?url= */
</style>
