<template>
  <div>
    <div class="ads">
      <!-- Ads state 1 -->
      <div v-if="data.style === 1" @click="gotoLink" id="ads_1">
        <img :src="data.image" />
        <span :title="data.text">{{ data.text || 'No text' }}</span>
      </div>
      <!-- Ads state 2 -->
      <div v-else-if="data.style === 2" id="ads_2">
        <el-carousel autoplay :interval="data.speed || 3000">
          <div v-for="(item, index) in data.items" :key="index">
            <a :href="item.link" target="_blank" rel="noopener noreferrer">
              <img :src="item.image" :title="item.text" />
            </a>
          </div>
        </el-carousel>
      </div>
      <!-- Ads state 3 -->
      <div v-else id="ads_3">
        <div class="ads_title">{{ data.title || 'Sponsor' }}</div>
        <el-button type="primary" plain @click="popupInfo">{{
          data.btnText || 'Become a Sponsor'
        }}</el-button>
      </div>
    </div>
    <!-- <el-divider v-if="data" dashed id="reset-margin" /> -->
    <div id="reset-margin" v-if="data"></div>
  </div>
</template>

<script>
export default {
  name: 'Ads',
  methods: {
    gotoLink() {
      window.open(this.data.link);
    },
    popupInfo() {
      this.$info({
        title: this.data.msgTitle || 'Message Title',
        content: this.data.msgText || 'Put your text here.',
        okText: this.data.msgOkText || 'Ok',
        maskClosable: true
      });
    }
  },
  computed: {
    data() {
      return this.$themeConfig.ads;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/palette.scss';

.ads {
  padding: 0 1rem 0.6rem;
  font-size: 0.75rem;
  overflow: hidden;

  #ads_1 {
    cursor: pointer;

    img {
      float: left;
      margin-right: 1rem;
      max-width: $AdsStyle1MW;
    }
  }

  #ads_2 {
    img {
      width: 100%;
    }
  }

  #ads_3 {
    padding: 0 1.5rem;
    margin-bottom: 0.8125rem;

    .ads_title {
      color: #777;
      font-weight: 300;
      font-size: 0.9375rem;
      margin-bottom: 0.9375rem;
    }
  }
}

#reset-margin {
  height: 1px;
  background: linear-gradient(to right, #000000, #000000 2px, transparent 2px, transparent);
  background-size: 4px 100%;
  margin: 5px 0;
}

@media (max-width: $MQMobile) {
  .ads {
    display: $MobileShow;
  }
  #reset-margin {
    display: $MobileShow;
  }
}
</style>
