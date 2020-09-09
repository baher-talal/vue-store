<template>
  <div class="mt-5">
    <div class="container">
      <div class="mb-5">
        <h3 class="text-capitalize">
          Your shopping cart contains:
          <span>3 Products</span>
        </h3>
      </div>
      <vs-table stripe :data="users">
        <template slot="thead">
          <vs-th>No</vs-th>
          <vs-th>Product</vs-th>
          <vs-th>Quantity</vs-th>
          <vs-th>Price</vs-th>
          <vs-th>Remove</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].id">{{data[indextr].id}}</vs-td>
            <vs-td :data="data[indextr].product">{{data[indextr].product}}</vs-td>

            <vs-td :data="data[indextr].quantity">
              <div class="centerx">
                <vs-input-number
                  class="float-left"
                  v-model="number[indextr]"
                  icon-dec="-"
                  icon-inc="+"
                />
              </div>
            </vs-td>

            <vs-td :data="data[indextr].price">{{data[indextr].price}}</vs-td>

            <vs-td :data="data[indextr].remove">
              <vs-button class="pl-3" color="danger" @click="removeItem(indextr)" type="gradient">{{data[indextr].remove}}</vs-button>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>

      <div class="checkout-basket mt-5">
        <h4>Continue to basket</h4>

        <ul class="list-unstyled">
          <li>
            Product1
            <i>-</i>
            <span class="float-right">EGP 1000</span>
          </li>

          <li>
            Product2
            <i>-</i>
            <span class="float-right">EGP 2000</span>
          </li>

          <li>
            Product3
            <i>-</i>
            <span class="float-right">EGP 3000</span>
          </li>

          <li>
            Total Service Charges
            <i>-</i>
            <span class="float-right">EGP 50</span>
          </li>

          <li>
            Total
            <i>-</i>
            <span class="float-right">EGP 6050</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    number: [1,1,1,1,1,1,1,1],
    users: [
      {
        id: 1,
        product: "Lorem ipsum 1",
        quantity: "",
        price: "1000 LE",
        remove: "X"
      },
      {
        id: 2,
        product: "Lorem ipsum 2",
        quantity: "",
        price: "2000 LE",
        remove: "X"
      },
      {
        id: 3,
        product: "Lorem ipsum 3",
        quantity: "",
        price: "3000 LE",
        remove: "X"
      }
    ]
  }),

  methods: {
    removeItem(index){
      // console.log(index,this.users);
      this.users.splice(index, 1)
    }
  }
};
</script>

<style>
.vs-table--header {
  display: none;
}

.checkout-basket {
  width: 25%;
}

.checkout-basket h4 {
  padding: 1em;
  background: #ef7600;
  font-size: 1.1em;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 1em;
}

.checkout-basket ul li {
  margin-bottom: 1em;
  font-size: 14px;
  color: #999;
}

.checkout-basket ul li:nth-child(5) {
      font-size: 1em;
    color: #212121;
    font-weight: 600;
    padding: 1em 0;
    border-top: 1px solid #DDD;
    border-bottom: 1px solid #DDD;
    margin: 2em 0 0;
}
</style>