<template>
  <div class="home">
    <Auction/>
  </div>
</template>

<script>
// load auction component here.
import Auction from '@/components/Auction.vue'

export default {
  name: 'Home',
  components: {
    Auction
  }
}
</script>
