<template>
  <v-dialog v-model="getAuctionDialog" persistent max-width="1000px">
    <v-card>

      <v-app-bar color="#42b983" dense>
        <v-icon style="margin-right: 10px">mdi-car-sports</v-icon>
            {{ getAuctionDetails.car.productionYear }}

            {{ getAuctionDetails.car.brand }}

            {{ getAuctionDetails.car.model }}
        <v-spacer></v-spacer>
        <v-icon style="margin-right: 10px">mdi-clock</v-icon>
            End of auction: 
            {{ getAuctionDetails.endDate }}
      </v-app-bar>

      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-img
              class="white--text align-end"
              height="250px"
              width="450px"
              :src="returnImg(getAuctionDetails.image)"
            >
            </v-img>
          </v-col>

          <v-col cols="12" sm="6" md="6">
              <v-app-bar 
                color="#42b983" 
                dense
                >
                <v-icon style="margin-right: 10px">mdi-offer</v-icon>
                Bids:
              <v-spacer></v-spacer>

              <v-btn 
                @click="closeDialog"
                > 
                Place Bid 
              </v-btn>

            </v-app-bar>

            <v-card 
              style="overflow-y: scroll" 
              class="mx-auto" 
              max-height="200px" 
              min-height="200px">

              <v-list>
                <v-list-item
                  v-for="bid in bidders"
                  :key="bid.id"
                >
                <v-icon style="margin-right: 10px">mdi-account-circle</v-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="bid.name + ': ' + bid.amount"> 
                  </v-list-item-title>
                </v-list-item-content>
      
                </v-list-item>
              </v-list>

            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="6">
                <p style="font-weight: bold;">
                    Body style
                </p>
                {{ getAuctionDetails.car.bodyStyle }}
          </v-col>

          <v-col cols="12" sm="6" md="6">
                <p style="font-weight: bold;">
                    Color
                </p>
                {{ getAuctionDetails.car.color }}
          </v-col>

          <v-col cols="12" sm="6" md="6">
                <p style="font-weight: bold;">
                    Engine
                </p>
                {{ getAuctionDetails.car.engine }}
          </v-col>

          <v-col cols="12" sm="6" md="6">
                 <p style="font-weight: bold;">
                    Mileage
                </p>
                {{ getAuctionDetails.car.mileage }} miles
          </v-col>

          <v-col cols="12">
                <p style="font-weight: bold;">
                    Description
                </p>
                {{ getAuctionDetails.description }}
          </v-col>

          <v-btn 
            text 
            @click="closeDialog"
            > 
            Close 
          </v-btn>

          <v-btn 
            style="color: #42b983;"
            v-if="$route.path=='/'" 
            text> Place bid 
          </v-btn>
        </v-row>

      </v-container>

    </v-card>
    
  </v-dialog>
</template>



<script>
export default {
  data: () => ({
    dialog: true,
    bidders: [
      { "id": 1, "name": "Alice", "amount": 5000 },
      { "id": 2, "name": "Bob", "amount": 3500 },
      { "id": 3, "name": "Charlie", "amount": 7500 },
      { "id": 4, "name": "Charlie", "amount": 7500 },
      { "id": 5, "name": "Charlie", "amount": 7500 },
      { "id": 6, "name": "Charlie", "amount": 7500 },
      { "id": 7, "name": "Charlie", "amount": 7500 },
      { "id": 8, "name": "Charlie", "amount": 7500 },
      { "id": 9, "name": "Charlie", "amount": 7500 },
    ],
  }),
  mounted() {},
  methods: {
      closeDialog: function () {
        this.$store.commit('updateAuctionDialog', false)
      },
      returnImg: function (image) {
          return image
      },
  },
  computed: {
    getAuctionDialog: {
      get(){
        return this.$store.getters.auctionDialog
      },
      set(bool){
        return bool
      }
    },
    getAuctionDetails: function () {
        return this.$store.getters.auctionDetails
    }
  },
};
</script>