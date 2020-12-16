<template>
  <v-dialog v-model="getEditAuctionDialog" persistent max-width="600px">

    <v-card>
      <v-card-title>
        <span class="headline" style="color: #42b983;">
          Edit auction
        </span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>

            <v-col cols="12" sm="6" md="6">
              <v-text-field 
                label="Seller name*" 
                v-model="getAuctionDetails.seller"
                required>
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Brand*"
                v-model="getAuctionDetails.car.brand"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Model*"
                v-model="getAuctionDetails.car.model"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Body style*"
                v-model="getAuctionDetails.car.bodyStyle"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Color**"
                v-model="getAuctionDetails.car.color"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Engine*"
                v-model="getAuctionDetails.car.engine"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Mileage*"
                v-model="getAuctionDetails.car.mileage"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Producion year*"
                v-model="getAuctionDetails.car.productionYear"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Description*"
                v-model="getAuctionDetails.description"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Image*"
                v-model="getAuctionDetails.image"
                required
              ></v-text-field>
            </v-col>
            
            <v-card-subtitle>
              Pick an end date*
            </v-card-subtitle>

            <v-col cols="12">
              <v-date-picker 
                v-model="getAuctionDetails.endDate" 
                :min="getNowDate">
              </v-date-picker>
            </v-col>

          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn style="color: #42b983;" text @click="edit">
          Submit
        </v-btn>
        <v-btn color="blue darken-1" text @click="closeDialog"> 
          close 
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
export default {
  
  data: () => ({
    dialog: false,
  }),
  mounted() {

  },
  methods: {
    edit: function () {
        this.$store.dispatch('editAuction', this.getAuctionDetails)
        this.$store.commit('updateAuctionDetails', this.getAuctionDetails)
    },
    closeDialog: function () {
        this.$store.commit('updateEditAuctionDialog', false)
    },
  },
  computed: {
    getNowDate: function(){
      var nowDate = new Date();
      return nowDate.toISOString().slice(0, 10);
    },
    getAuctionDetails: function () {
      return this.$store.getters.auctionDetails
    },
    getEditAuctionDialog: {
      get(){
        return this.$store.getters.editAuctionDialog
      },
      set(bool){
        return bool
      }
    },
  },
};
</script>