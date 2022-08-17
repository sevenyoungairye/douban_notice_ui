<script setup>
</script>

<template>
  <div>
    <div class="bg-white">
      <div class="sub-bg"></div>
    </div>

    <div class="ml-2 mr-2">
      <div class="text-center mt-3">
        <h3 class="db-color-999">Choose your love service.</h3>
      </div>

      <div class="ml-8 mr-8 mt-6 h-52 db-sub-div">
        <div class="w-1/2 h-full float-left">
          <n-checkbox-group
            class="h-full"
            :value="idList"
            @update:value="handleUpdateValue"
          >
            <div
              :class="`h-1/` + subList.length"
              v-for="(item, index) in subList"
              :key="index"
            >
              <n-checkbox :value="item.id" />
              <n-tag class="ml-5 mt-2" :bordered="false" type="success">
                {{ item.name }}
              </n-tag>
            </div>
          </n-checkbox-group>
        </div>

        <div class="w-1/2 h-full float-left">
          <div class="h-1/2 db-color-999">
            Choose what you want, then submit.
          </div>

          <div class="h-1/2">
            <n-button @click="submit">submit</n-button>
          </div>
        </div>
      </div>

      <div class="self-center text-center">
        <label class="db-color-333">Your truly, sevenyoungairye.</label>
      </div>
    </div>
  </div>
</template>

<script>
import { getSubType, doSub } from "@/api/sub.js";

import { ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const idRef = ref([]);
    return {
      idList: idRef,
      handleUpdateValue(value) {
        idRef.value = value;
      },
    };
  },
  created() {
    this.userKey = this.$route.params.token;
    this.getSubList();
  },
  data() {
    return {
      formData: {
        tokenKey: null,
        subIds: null,
      },
      userKey: null,
      subList: [
        { id: "1", name: "movie sub" },
        { id: "2", name: "tv sub" },
      ],
      disabled: false,
    };
  },
  methods: {
    submit() {
      if (this.disabled) {
        window.$message.warning("your identity was expired.");
        return;
      }
      if (!this.userKey) {
        window.$message.warning("user key invalid!");
        return;
      }
      let subIds = this.idList.map((item) => item);
      if (!subIds || subIds.length <= 0) {
        window.$message.warning("pls choose your wanted subscribe.");
        return;
      }
      this.formData.subIds = subIds;
      this.formData.tokenKey = this.userKey;

      console.debug(`sub data: ${this.formData}`);
      doSub(this.formData)
        .then((r) => {
          window.$message.success(r.msg);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getSubList() {
      getSubType(encodeURIComponent(this.userKey))
        .then((r) => {
          this.subList = r.data;
          // let res = this.subList
          //   .map((item) => {
          //     return item.name;
          //   })
          //   .join("丨");
          // window.$message.info(res);
        })
        .catch((e) => {
          console.warn(e);
          this.disabled = true;
        });
    },
  },
});
</script>

<!-- css middle way: https://segmentfault.com/a/1190000014116655 -->
<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}

.sub-bg {
  margin: 0 auto;
  background: url("https://w.wallhaven.cc/full/k7/wallhaven-k7q9m7.png");
  width: 95%;
  height: 200px;
  background-size: 100% 100%;
}

@media (min-width: 1024px) {
  .sub-bg {
    height: 500px;
  }

  .db-sub-div {
    margin-left: 64px;
    margin-right: 64px;
    margin-top: 36px;
  }
}
</style>