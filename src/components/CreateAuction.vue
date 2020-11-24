<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="background-color: #42b983; margin-top: 35px"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Create new auction
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline">
          Create a new auction
        </v-card-title>

        <v-card-text>
            lorum ipsum
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            style="color: #42b983"
            text
            @click="dialog = false"
          >
            Submit
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Close
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
  computed: {

  },
};
</script>