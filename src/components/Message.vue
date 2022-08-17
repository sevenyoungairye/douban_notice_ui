<template>
  <div></div>
</template>

<script>
import { defineComponent } from "vue";
import { useMessage } from "naive-ui";
``;

export default defineComponent({
  setup() {
    const message = useMessage();
    // 挂载消息对象到window.
    window.$message = message;
    return {
      info() {
        message.info("info", {
          keepAliveOnHover: true,
        });
      },
    };
  },
});
</script>