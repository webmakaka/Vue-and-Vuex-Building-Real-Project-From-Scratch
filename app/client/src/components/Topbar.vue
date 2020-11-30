<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        MediumClone
      </router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'home' }"
            active-class="active"
            exact
            >Home
          </router-link>
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'createArticle' }"
              active-class="active"
              ><i class="ion-compose"></i> &nbsp; New Article
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'settings' }"
              active-class="active"
              ><i class="ion-gear-a"></i> &nbsp; Settings
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{
                name: 'userProfile',
                params: { slug: currentUser.username },
              }"
              active-class="active"
              ><img class="user-pic" :src="currentUser.image" /> &nbsp;
              {{ currentUser.username }}
            </router-link>
          </li>
        </template>
        <template v-if="!isLoggedIn">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'login' }"
              active-class="active"
              >Sign in
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'register' }"
              active-class="active"
              >Sign up
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>


<script>
import { mapState } from 'vuex';

export default {
  name: 'McvTopbar',
  computed: {
    ...mapState({
      currentUser: (state) => state.auth.currentUser,
      isLoggedIn: (state) => state.auth.isLoggedIn,
    }),
  },
};
</script>

