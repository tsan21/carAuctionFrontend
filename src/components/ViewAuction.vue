<template>
  <v-dialog v-model="getAuctionDialog" persistent max-width="1000px">
    <v-card>

      <v-app-bar color="#DCDCDC" dense>
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
        
        <v-col cols="12" sm="6" md="6">
          Seller:
          {{ getAuctionDetails.seller }}
        </v-col>

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
                color="#DCDCDC" 
                dense
                v-if="$route.path=='/'"
                >
                <v-icon style="margin-right: 10px">mdi-offer</v-icon>
                Bids
              <v-spacer></v-spacer>
              
              <v-col md="4" style="margin-top: 15px">
                <v-text-field 
                  label="bid amount" 
                  required
                  v-model="bidPlaceModel.amount"
                  >
                </v-text-field>
              </v-col>

              <v-btn 
                style="background-color: #42b983"
                dark
                @click="placeBid"
                > 
                Place bid
              </v-btn>

            </v-app-bar>

            <v-card 
              style="overflow-y: auto" 
              class="mx-auto" 
              max-height="200px" 
              min-height="200px">

              <v-list>
                <v-list-item
                  v-for="bid in getFilteredBids"
                  :key="bid.bidId"
                >
                <v-icon style="margin-right: 10px">mdi-account-circle</v-icon>
                  <v-list-item-title

                    v-text="bid.bidder + ': $' + bid.amount"> 

                  </v-list-item-title>
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
              v-if="$route.path=='/myAuctions'"
              text
              @click="editAuction"
              > 
              Edit 
            </v-btn>

            <v-btn
              style="color: #F44336;"
              v-if="$route.path=='/myAuctions'"
              text
              @click="deleteAuction"
              > 
              Delete 
            </v-btn>

            <v-btn 
              style="color: #42b983;"
              text
              v-if="$route.path=='/'"
              @click="messageSeller"
              > 
              Message seller 
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn 
              text 
              @click="closeDialog"
              > 
              Close 
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
    auctionId: 0,
    bidPlaceModel: {
      bidder: '',
      amount: '',
      auctionId: 0,
    },
    chatCreateModel:{
      userId: 0,
      auctionId: 0,
    },
  }),
  mounted() {

  },
  methods: {
    closeDialog: function () {
      this.$store.commit('updateAuctionDialog', false)
    },
    editAuction: function () {
      this.$store.commit('updateEditAuctionDialog', true)
    },
    returnImg: function (image) {
      return image
    },
    placeBid: function () {
      if (this.$store.getters.isLoggedIn)
        {
          this.bidPlaceModel.bidder = this.getUser.name
          this.bidPlaceModel.auctionId = this.getAuctionDetails.auctionId
          this.$store.dispatch('placeBid', this.bidPlaceModel)
          var clearData = {}
          this.bidPlaceModel = clearData
        }
      else 
        {
          console.log('Must be logged in to place bids.')
        }
    },
    deleteAuction: function (){
      this.$store.dispatch('deleteAuction', this.getAuctionDetails.auctionId)
      this.$store.commit('updateAuctionDialog', false)
    },
    messageSeller: function () {
      if (this.$store.getters.isLoggedIn)
      {
        this.chatCreateModel.userId = this.getUser.userId
        this.chatCreateModel.auctionId = this.getAuctionDetails.auctionId
        this.$store.dispatch('createChat', this.chatCreateModel)
        this.$router.push("/chats");
      }
      else 
      {
        console.log('Must be logged in.')
      }
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
    },
    getFilteredBids: function () {
      return this.$store.getters.auctionDetails.bids.slice().sort((a,b)=> (a.amount < b.amount ? 1 : -1))
    },
    getUser: function () {
      return this.$store.getters.user
    }
  },
};
</script>