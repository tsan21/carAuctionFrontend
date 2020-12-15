<template>
  <div data-app>
    <CreateAuction/>
    <MyAuctions/>
    <ViewAuction />
  </div>
</template>

<script>
import CreateAuction from '@/components/CreateAuction.vue'
import MyAuctions from '@/components/MyAuctions.vue'
import ViewAuction from "@/components/ViewAuction.vue";

export default {
  name: "Home",
  components: {
    CreateAuction,
    MyAuctions,
    ViewAuction,
  },
  data: () => ({

  }),
  mounted() {

  },
};
</script>