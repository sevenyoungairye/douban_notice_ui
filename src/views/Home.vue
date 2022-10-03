<script setup>
</script>

<template>
  <div>
    <div>
      <hr />
    </div>

    <div class="middle-banner object-contain"></div>

    <div class="w-full middle-content mt-5 block">
      <div class="text-center align-middle items-center mt-2 h-20 block">
        <h2>Subscribe douban episodes.</h2>
        <h2>Every monday you will get email notice.</h2>
      </div>

      <div
        class="mt-2 text-center align-middle items-center h-10 block"
        style="font: #999"
      >
        <span>Subscribe episodes released in the last week.</span>
      </div>

      <div class="text-center align-middle items-center mt-1 block">
        <n-input
          placeholder="pls input your email"
          autosize
          style="min-width: 50%"
          v-model:value="loginVo.email"
        />
        <br />

        <label>Get your douban notice series. </label>

        <br />

        <button
          @click="doLogin"
          class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          submit email
        </button>

        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { tryLogin } from "@/api/login.js";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      loginVo: {
        email: null,
        from: 1,
      },
    };
  },
  methods: {
    doLogin() {
      let e = this.loginVo.email;
      if (!e || e === undefined) {
        window.$message.warning("Please input your emial!");
        return;
      }
      tryLogin(e).then((r) => {
        window.$message.success(r.msg);
      });
    },
    show() {},
  },
});
</script>

<style scoped>
.middle-banner {
  height: 260px;
  background-position: center 0;
  background-repeat: no-repeat;
  background-image: url("https://deo.shopeemobile.com/shopee/shopee-shopeecom-live-sg/static/img/banner.3f03e75d.png");
}

@media (min-width: 390px) {
  .middle-content {
    height: 60px;
  }
}

@media (min-width: 1024px) {
  header {
    color: pink;
  }

  .middle-content {
    height: 300px;
  }
}
</style>