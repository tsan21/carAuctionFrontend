<template>
  <v-card class="mx-auto" max-width="400" style="margin-top: 50px">
    <v-app-bar dark color="#42b983" dense>
      <v-toolbar-title>Register</v-toolbar-title>
    </v-app-bar>

    <v-card-subtitle style="height: 70px; font-size: 20px">
      Already have an account?
      <v-btn color="#42b983" 
        text 
        @click="showLoginHideRegister"
        id="btnSignIn"
        >
        sign in here
      </v-btn>
    </v-card-subtitle>

    <v-text-field
      v-model="registerModel.name"
      :error-messages="nameErrors"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
      prepend-icon="mdi-account"
    />

    <v-text-field
      v-model="registerModel.password"
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

    <v-text-field
      v-model="confirmPassword"
      :type="showPassword ? 'text' : 'password'"
      :error-messages="confirmPasswordErrors"
      label="Confirm password"
      required
      @input="$v.confirmPassword.$touch()"
      @blur="$v.confirmPassword.$touch()"
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
      @click="register"
    >
      Register
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
    registerModel: {
      name: "",
      password: "",
    },
    email: "",
    confirmPassword: "",
    status: null,
    showPassword: false,
    alertSucces: false,
    alertError: false,
  }),

  methods: {
    showLoginHideRegister: function () {
      this.$parent.showLoginHideRegister()
    },
    register: function () {
      this.$store
        .dispatch("register", this.registerModel)
        .catch((err) => console.log(err))
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
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.sameAsPassword &&
        errors.push("Passwords must match");
      return errors;
    },
  },
};
</script>