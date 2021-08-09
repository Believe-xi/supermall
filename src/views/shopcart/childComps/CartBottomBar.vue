<template>
  <div class="bottom-menu">
    <CheckButton
      id="check-button"
      class="select-all"
      @click.native="checkClick"
      :value="AllChecked"
    ></CheckButton>
    <span @click="checkClick">全选</span>
    <span class="total-price">合计:¥{{ totalPrice }}</span>
    <span class="buy-product" @click="buyClick">付款({{ checkLength }})</span>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      check: true,
    };
  },
  components: {
    CheckButton,
  },
  methods: {
    checkClick() {

      if (this.AllChecked) {
        this.cartList.forEach((item, index, arr) => {
          item.checked = false;
        });
      } else {
        this.cartList.forEach((item, index, arr) => {
          item.checked = true;
        });
      }
    },
    buyClick() {
      if (this.isSelectAll) {
        this.$toast.show("请选择要购买的商品", 1500);
      }
    },
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((oldPrice, item) => {
          return oldPrice + item.price * item.count;
        }, 0);
    },
    checkLength() {
      return this.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    AllChecked() {
      // console.log(!this.cartList.filter(item => !item.checked));
      // return !this.cartList.filter(item => !item.checked).length
      if(this.cartList.length == 0) return false
      return !this.cartList.some((item) => item.checked == false);
    },
  },
};
</script>

<style scoped >
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 49px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}

.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}

.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}

.bottom-menu .buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>
