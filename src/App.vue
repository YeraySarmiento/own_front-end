<template>
  <OwnHeader
    v-if="!$route.path.includes(`/${currentBoard?.name.toLowerCase()}`)"
  />
  <BoardHeader v-else />
  <div class="container">
    <router-view />
  </div>
  <div class="footer">
    <p v-if="['/home'].includes($route.path)">- You make own -</p>
  </div>
  <Spinner v-if="isLoading" />
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import OwnHeader from "./components/OwnHeader/OwnHeader.vue";
import BoardHeader from "./components/BoardHeader/BoardHeader.vue";
import Spinner from "./components/Spinner/Spinner.vue";

export default defineComponent({
  name: "app",
  computed: {
    ...mapState(["currentBoard", "isLoading"]),
  },
  methods: {
    ...mapActions(["getTokenAction"]),
  },
  components: {
    OwnHeader,
    BoardHeader,
    Spinner,
  },
  mounted() {
    if (localStorage.getItem("user")) {
      this.getTokenAction();
    }
  },

  updated() {
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  },
});
</script>

<style lang="scss">
@import "./assets/styles/_variables.scss";
@import "./assets/styles/_mixins.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: $main-color;
}

a {
  text-decoration: none;
  color: inherit;

  &:focus {
    color: inherit;
  }

  &:link {
    color: inherit;
  }

  &:active {
    color: inherit;
  }

  &:visited {
    color: inherit;
  }
}

.container {
  position: absolute;
  height: 100vh;
  width: 100vw;
}

.footer {
  @include lora-text;
  @include flex-center;

  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;

  & p {
    @include flex-center;
    border-top: 1px solid black;
    width: 200px;
    padding: 15px 0 30px 0;
  }
}
</style>
