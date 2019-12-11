<template>
  <div>
    <v-toolbar dark color="primary">
      <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
      <svg
        height="40"
        viewBox="0 0 88.75 103.22"
        width="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g>
            <rect height="10.96" width="19.27" x="20.13" y="92.26"></rect>
            <rect height="25.94" width="10.96" y="40.77"></rect>
            <rect height="10.96" width="19.27" x="47.66" y="92.26"></rect>
            <path
              d="M1.84,79.5A9.11,9.11,0,0,0,11,88.61V70.38A9.11,9.11,0,0,0,1.84,79.5Z"
            ></path>
            <rect height="25.94" width="10.96" x="77.79" y="40.77"></rect>
            <path d="M77.79,70.38V88.61a9.11,9.11,0,1,0,0-18.23Z"></path>
            <path
              d="M34.74,37.1H54V32.5h16.8V5.33H54.43a12.25,12.25,0,0,0-20.22,0H17.93V32.5h16.8ZM56.26,11.42a7.49,7.49,0,1,1-7.49,7.49A7.49,7.49,0,0,1,56.26,11.42Zm-23.78,15A7.49,7.49,0,1,1,40,18.91,7.49,7.49,0,0,1,32.49,26.41Z"
            ></path>
            <circle cx="32.49" cy="18.91" r="3.82"></circle>
            <circle cx="56.26" cy="18.91" r="3.82"></circle>
            <polygon
              points="14.63 43.37 14.63 85.92 35.91 64.64 14.63 43.37"
            ></polygon>
            <polygon
              points="71.53 40.77 17.23 40.77 44.38 67.92 71.53 40.77"
            ></polygon>
            <polygon
              points="44.38 73.12 44.37 73.08 44.36 73.1 38.5 67.24 17.14 88.61 71.62 88.61 50.25 67.24 44.38 73.12"
            ></polygon>
            <polygon
              points="74.12 85.91 74.12 43.38 52.85 64.64 74.12 85.91"
            ></polygon>
          </g>
        </g>
      </svg>
      <v-text-field
        solo
        flat
        background-color="#29A79B"
        dense
        placeholder="Search your apps"
        hide-details
        single-line
      >
        <v-icon slot="prepend-inner" color="white">mdi-magnify</v-icon>
      </v-text-field>

      <v-spacer></v-spacer>
      <v-btn text class="ma-1">
        <v-icon class="ma-1" large background-color="primary"
          >mdi-account-group</v-icon
        >
        {{ $auth.user.totalDevices }}
      </v-btn>

      <v-btn text class="ma-1">
        <v-icon class="ma-1" large background-color="primary">mdi-apps</v-icon>
        {{ $auth.user.totalApps }}
      </v-btn>

      <div class="member d-none d-md-flex">
        <span class="font-weight-medium">{{ $auth.user.name }}</span>
        <v-chip small background-color="black">
          <v-icon class="ml-1" small color="white">mdi-crown</v-icon>
          <span class="caption text-right">{{
            $auth.user.plan | capitalize
          }}</span>
        </v-chip>
      </div>

      <v-avatar class="d-none d-md-block">
        <img :src="$auth.user.avatar" :alt="$auth.user.name" />
      </v-avatar>

      <v-btn icon>
        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn dark icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="logout">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: ['English', 'Francias', ' اللغة العربية']
    }
  },
  methods: {
    logout() {
      this.$auth.logout()
      this.$router.push('/login')
    }
  },
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style scoped>
svg rect,
svg path,
svg polygon,
svg circle {
  fill: white;
}

.member {
  display: flex;
  flex-direction: column;
  margin: 0 12px;
}
</style>
