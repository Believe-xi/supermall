import { debounce } from "./utils";
import BackTop from "components/content/backtop/BackTop.vue";
import { POP, NEW, SELL } from "./const";

export const itemListenerMixin = {
  data() {
    return {
      itemListener: null,
      refresh: null
    }
  },
  mounted() {
    setTimeout(() => {
      this.refresh = debounce(this.$refs.scroll.refresh);
      this.itemListener = () => {
        this.refresh();
      }
      this.$bus.$on("itemImageLoad", this.itemListener);
    }, 50);
  },

}
export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    topClick() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    TopBack(position) {
      this.isShowBackTop = -position.y > 1000;
    }
  }
}
export const tabControlMixin = {
  data: function() {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
    }
  }
}