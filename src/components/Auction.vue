<template>
  <v-card class="mx-auto" max-width="1500" color="#f0f0f0" style="margin-top:35px;">
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="auction in auctions"
          :key="auction.name"
          cols="12"
          md="3"
          sm="3"
          xs="12"
          style="margin-top:-10px;"
        >
        
          <v-card>
            <v-app-bar
              color="#ffffff"
              dense
            >
              <v-icon style="margin-right:10px">mdi-clock</v-icon>
              {{auction.dateEnd}}
              <v-spacer></v-spacer>
              Bid: 5000555555555  

          </v-app-bar>
            <v-img
              :src="'https://www.topgear.com/sites/default/files/images/cars-road-test/2016/12/e1ba2cc73ababb8dcd812ea33400c79d/row_4863.jpg'"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >

            </v-img>

            <v-card-title v-text="auction.name"></v-card-title>

            <v-card-subtitle style="text-align: left;">
             1337 miles
            </v-card-subtitle>

            <v-btn 
              text
              color="#42b983"
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
    // name: 'Auction',

    data: () => ({
      auctions: [
        {
          name: 'BMW', dateEnd: 55,
        },
        {
          name: 'Mercedes', dateEnd: 555,
        },
        {
          name: 'Ferrari', dateEnd: 444,
        },
        {
          name: 'Lamborghini', dateEnd: 333,
        },
        {
          name: 'Porsche', dateEnd: 22,
        },
        {
          name: 'Nissan', dateEnd: 333,
        },
      ],
    }),
  }
</script>

<style scoped>
    .content{
        margin-top: 25px;
    }

    .v-card{
        margin-top: 25px;
    }
</style>