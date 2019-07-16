<template>
  <header class="header">
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="container">

        <div class="navbar-brand is-hidden-desktop">
          <a class="navbar-item" href="https://www.dvfu.ru/" target="_blank">
            <img class="header__logo header__logo--mobile" src="@/assets/fefu-logo.svg">
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            @click="toggleMenu"
            :class="{ 'is-active': isMenuOpen }"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          class="navbar-menu"
          :class="{
            'is-active': isMenuOpen
          }"
        >
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">
              Главная
            </router-link>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Работы
              </a>

              <div class="navbar-dropdown is-boxed">
                <router-link to="/lab1" class="navbar-item">Лабораторная работа №1</router-link>
                <router-link to="/lab1" class="navbar-item">Лабораторная работа №2</router-link>
                <router-link to="/lab1" class="navbar-item">Лабораторная работа №3</router-link>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Какой-то пункт
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-brand is-hidden-touch">
            <a class="navbar-item" href="https://www.dvfu.ru/" target="_blank">
              <img src="@/assets/fefu-logo.svg">
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button" target="_blank" href="https://github.com/StepFlow/econometrics">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span>
                      GitHub
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isMenuOpen: false
      }
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen
      }
    }
  }
</script>

<style lang="scss">
  .header {
    &__logo {
      &--mobile {
        /*height: 2.75rem;*/
      }
    }
  }
</style>
