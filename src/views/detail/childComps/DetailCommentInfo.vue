<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length > 0">
    <div class="comment-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多 ></div>
    </div>
    <div class="comment-user m15">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="comment-detail m15">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" alt="" v-for="(item, index) in commentInfo.images" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "common/utils";

export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  components: {},
  filters:{
    showDate(value) {
        let date = new Date(value * 1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
  }
};
</script>

<style scoped >
.m15 {
  margin: 10px 15px;
}
.comment-info {
  border-bottom: 5px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;

}
.comment-header {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
}
.header-title,
.header-more {
  flex: 1;
}
.header-more {
  text-align: right;
}
.comment-user {
}
.comment-user img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  border-radius: 50%;
}
.comment-user span {
  padding-left: 15px;
}
.comment-detail {
}
.comment-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.comment-detail .info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.info-other .date {
  margin-right: 8px;
}
 .info-imgs {
    margin-top: 10px;
  }

  .info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>
