<template>
  <v-card class="mx-auto" max-width="400" style="margin-top: 50px">
    <v-app-bar dark color="#42b983" dense>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-app-bar>

    <v-text-field
      v-model="loginModel.name"
      :error-messages="nameErrors"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
      prepend-icon="mdi-account"
    />

    <v-text-field
      v-model="loginModel.password"
      :type="showPassword ? 'text' : 'password'"
      :error-messages="passwordErrors"
      label="Password"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
      prepend-icon="mdi-lock"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
    />

    <v-btn
      style="background-color: #42b983;
        margin-bottom: 20px
        width: 100px;"
      depressed
      color="primary"
      @click="login"
    >
      Login
    </v-btn>
  </v-card>
</template>



<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, minLength: minLength(4) },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPassword: { sameAsPassword: sameAs("password") },
  },
  data: () => ({
    loginModel: {
      name: "",
      password: "",
    },
    email: "",
    status: null,
    showPassword: false,
  }),
  methods: {
    login: function () {
      this.$store.dispatch("login", this.loginModel)
       .then(() => {
         this.$router.push('/')
          console.log("user: "+this.$store.getters.user.userId+" logged in.")
         })
       .catch(err => console.log(err))
    },
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength &&
        errors.push("Name must be at least 4 characters long.");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at least 6 characters long");
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
    getCurrentUserId() {
      return this.$store.getters.userId;
    },
  },
};
</script>