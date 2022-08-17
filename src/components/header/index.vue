<script setup>
defineProps({});
</script>

<template>
  <div class="db-header flex w-full">
    <div class="flex w-2/3">
      <!-- image use demo... -->
      <!-- https://tailwind-elements.com/docs/standard/components/images/ -->
      <img
        class="logo-img max-w-full rounded-full transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
        src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
      />
    </div>

    <div class="flex text-center w-1/3 align-middle items-center">
      <span>hi, treasure u. </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "HelloWorld",
    };
  },
};
</script>

<style>
@media (min-width: 390px) {
  .logo-img {
    height: 30px;
    margin-left: 20px;
    top: 5px;
  }
  .db-header {
    height: 45px;
  }
}

@media (min-width: 1024px) {
  .logo-img {
    height: 45px;
    margin-left: 100px;
    top: 10px;
  }

  .db-header {
    height: 60px;
  }
}

.db-header {
  background-color: #fff;
}
</style>