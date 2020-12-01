<template>
  <div data-app>
    <Auction />
    <ViewAuction />
  </div>

</template>

<script>
import Auction from "@/components/Auction.vue";
import ViewAuction from "@/components/ViewAuction.vue";

export default {
  name: "Home",
  components: {
    Auction,
    ViewAuction
  },
};
</script>
