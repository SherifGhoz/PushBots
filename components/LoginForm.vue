<template>
  <v-row>
    <v-form ref="form" v-model="valid" method="post" @submit.prevent="login">
      <v-text-field
        v-model="user.email"
        type="email"
        prepend-inner-icon="mail_outline"
        :rules="rules.emailRules"
        label="Your e-mail address"
        required
        autofocus
        validate-on-blur
        background-color="#e6f2f1"
      ></v-text-field>

      <v-text-field
        v-model="user.password"
        type="password"
        prepend-inner-icon="lock_outline"
        :rules="rules.passwordRules"
        label="Password"
        required
        background-color="#e6f2f1"
      ></v-text-field>
      <div class="help-login">
        <a href="#">Forgot your password?</a><br />
        <a href="#">Don't have an account?</a>
      </div>
      <v-btn
        type="submit"
        block
        :disabled="!valid || loading"
        :loading="loading"
        color="primary"
      >
        LOGIN
      </v-btn>
      <div class="ext-logins">
        <v-btn dark tile color="#db2a2f" class="col-12 col-md-6">
          <v-icon small left>mdi-google</v-icon>
          Google
        </v-btn>
        <v-btn dark tile color="black" class="col-12 col-md-6">
          <v-icon small left>mdi-github-circle</v-icon>
          Github
        </v-btn>
      </div>
    </v-form>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    user: {
      email: '',
      password: ''
    },
    rules: {
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [(v) => !!v || 'Password is required']
    },
    valid: false
  }),
  computed: {
    loading() {
      return this.$store.getters['login/isLoading']
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login/login', this.user)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-form {
  margin: auto;
  width: 100%;
  max-width: 375px;
}

.help-login {
  margin: 10px auto 20px;
}

.help-login a {
  font-size: 12px;
  font-weight: 500;
}

.ext-logins {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
</style>
