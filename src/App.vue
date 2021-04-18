<template>
  <div id="app">
    <div class="container-xl mt-2 mb-5">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-collapse id="nav-collapse" is-nav>

          <!-- Home -->
          <b-navbar-nav>
            <b-nav-item href="#">
              <router-link to="/">Home</router-link>
            </b-nav-item>
          </b-navbar-nav>
          <!-- Blog -->

          <b-navbar-nav>
            <b-nav-item href="#">
              <router-link to="/blog">Blog</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- About -->
          <b-navbar-nav>
            <b-nav-item href="#">
              <router-link to="/about">About</router-link>
            </b-nav-item>
          </b-navbar-nav>

        </b-collapse>

        <!-- cart icon -->
        <b-navbar-brand href="#" class="cart-icon d-flex justify-content-end position-relative">
          <div>1</div>
          <img src="./assets/media/cart.png" alt="cart" class="w-75">
        </b-navbar-brand>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
  a {
    color: #fff;
    text-decoration: none;
    width: 60px;
    transition: 0.1s;

    &:hover {
      color: #000;
      text-decoration: none;
    }
  }
  .cart-icon {
    div {
      width: 15px;
      height: 15px;
      background: aliceblue;
      position: absolute;
      top: 0;
      right: 0;
      color: black;
      border-radius: 100px;
      font-size: 13px;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .navbar-brand {
    margin-right: 0;
  }
</style>
