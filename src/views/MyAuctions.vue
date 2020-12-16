<template>
  <div data-app>
    <CreateAuction/>
    <MyAuctions/>
    <ViewAuction />
    <EditAuction />
  </div>
</template>

<script>
import CreateAuction from '@/components/CreateAuction.vue'
import MyAuctions from '@/components/MyAuctions.vue'
import ViewAuction from "@/components/ViewAuction.vue";
import EditAuction from "@/components/EditAuction.vue";

export default {
  name: "Home",
  components: {
    CreateAuction,
    MyAuctions,
    ViewAuction,
    EditAuction,
  },
  data: () => ({

  }),
  mounted() {

  },
};
</script>