<template>
  <v-container>
    <v-row>

      <v-col cols="12" sm="6" md="3">
        <v-card
            style="overflow-y: auto"
            class="mx-auto"
            max-height="600px"
            min-height="600px"
        >
            <v-app-bar
                color="#42b983" 
                dense
                >
                <v-card-title style="color: white; margin-left: 75px;">
                  My chats
                </v-card-title>
            </v-app-bar>

        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="9">
        <v-card
          style="overflow-y: auto"
          class="mx-auto"
          max-height="600px"
          min-height="600px"
        >
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>