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
    this.isEmpty
  },
  methods: {
    isEmpty: function () {
      if(Object.keys(this.$store.getters.auctionDetails).length===0){
        console.log("auctionDetails empty")
      }
      console.log(this.$store.getters.auctionDetails)
    }
  }
};
</script>