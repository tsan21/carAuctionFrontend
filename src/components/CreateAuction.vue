<template>
  <v-dialog v-model="dialog" persistent max-width="600px">

    <template v-slot:activator="{ on, attrs }">
      <v-btn 
        style="background-color: #42b983; margin-top: 35px;" 
        dark  
        v-bind="attrs" 
        v-on="on"> 
        Create new auction
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="headline" style="color: #42b983;">
          Create a new auction
        </span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>

            <v-col cols="12" sm="6" md="6">
              <v-text-field 
                label="Seller name*" 
                v-model="form.seller"
                required>
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Brand*"
                v-model="form.car.brand"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Model*"
                v-model="form.car.model"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Body style*"
                v-model="form.car.bodyStyle"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Color**"
                v-model="form.car.color"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Engine*"
                v-model="form.car.engine"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Mileage*"
                v-model="form.car.mileage"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Producion year*"
                v-model="form.car.productionYear"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Description*"
                v-model="form.description"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Image*"
                v-model="form.image"
                required
              ></v-text-field>
            </v-col>
            
            <v-card-subtitle>
              Pick an end date*
            </v-card-subtitle>

            <v-col cols="12">
              <v-date-picker 
                v-model="form.endDate" 
                :min="getNowDate">
              </v-date-picker>
            </v-col>

          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn style="color: #42b983;" text @click="create">
          Submit
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false"> 
          close 
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
export default {
  
  data: () => ({
    form: {  // <-- form start
      seller: "",
      description: "",
      image: "",
      startDate: "",
      endDate: "",
      car: {
        brand: "",
        model: "",
        bodyStyle: "",
        color: "",
        engine: "",
        mileage: 0 ,
        productionYear: 0,
      },
      userId: 0,
    },       // <-- form end
    dialog: false,
  }),
  mounted() {

  },
  methods: {
    create: function(){
      this.form.startDate = this.getNowDate
      this.form.userId = this.$store.getters.user.userId
      this.$store.dispatch('createAuction', this.form)
      this.dialog = false
    }
  },
  computed: {
    getNowDate: function(){
      var nowDate = new Date();
      return nowDate.toISOString().slice(0, 10);
    }
  },
};
</script>