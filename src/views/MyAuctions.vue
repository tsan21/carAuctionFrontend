<template>
  <div data-app>
    <CreateAuction/>
    <MyAuctions/>
  </div>
</template>

<script>
import CreateAuction from '@/components/CreateAuction.vue'
import MyAuctions from '@/components/MyAuctions.vue'

export default {
  name: "Home",
  components: {
    CreateAuction,
    MyAuctions,
  },
  data: () => ({

  }),
};
</script>