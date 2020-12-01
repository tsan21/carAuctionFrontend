<template>
  <v-card
    class="mx-auto"
    max-width="1500"
    color="#f0f0f0"
    style="margin-top: 35px"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="auction in getMyAuctions"
          :key="auction.auctionId"
          cols="12"
          md="3"
          sm="3"
          xs="12"
          style="margin-top: 10px"
        >
          <v-card>
            <v-app-bar color="#ffffff" dense>
              <v-icon style="margin-right: 10px">mdi-clock</v-icon>
                {{ auction.endDate }}
              <v-spacer></v-spacer>
                Highest bid: {{ auction.highestBid }}
            </v-app-bar>

            <v-img
              :src="returnImg(auction.image)"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            </v-img>

            <v-card-title 
              v-text="auction.car.brand + ' ' + auction.car.model"
              >
            </v-card-title>

            <v-card-subtitle style="text-align: left">
              {{ auction.car.mileage }} miles
            </v-card-subtitle>

            <v-btn 
              text color="#42b983"
              @click="openAuctionDialog(auction)"
              > 
              View auction 
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    userId: 0,
  }),
  mounted() {
    this.userId = this.$store.getters.user.userId
    this.$store.dispatch("loadMyAuctions", this.userId)
  },
  methods: {
    returnImg(imageString){
      return imageString
    },
    openAuctionDialog: function (auction) {
      this.$store.commit("updateAuctionDetails", auction)
      this.$store.commit("updateAuctionDialog", true)
    }
  },
  computed: {
    getMyAuctions: function () {
      return this.$store.getters.myAuctions;
    },
  },
};
</script>