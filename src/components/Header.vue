<template>
  <header>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="flex-end" vs-align="center" vs-w="6">
        <router-link to="/">
          <h3 class="head_title text-capitalize text-center mb-0">
            store
            <span class="d-block text-uppercase">shop anywhere</span>
          </h3>
        </router-link>
      </vs-col>

      <vs-col vs-type="flex" vs-justify="flex-end" vs-align="center" vs-w="6">
        <router-link to="/cart" style="background:transparent; border: 0; text-align: right; cursor: pointer; position: relative">
          <span style="position: absolute; bottom: 77%; left: 86%; font-size: 0.7rem;font-weight: bold;">{{counter}}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#ef7600"
            width="10%"
            height="100%"
            style="margin-right: 8%"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
            />
          </svg>
        </router-link>
      </vs-col>
    </vs-row>
  </header>
</template>

<script>
export default {
  computed:{
        counter(){
            return this.$store.state.counter == 0 ? this.$store.state.counter  : localStorage.getItem('counter');
        }
    },
  // data: () => ({
  //   counter: localStorage.getItem('counter'),
  // })
};
</script>

