<template>
  <div class="sidebar-button" @click="showSidebar">
    <i class="el-icon-menu"></i>
    <el-popover
      placement="bottomRight"
      trigger="click"
      v-model="popover_visible"
      popper-class="reset-popover"
    >
      <div slot="content">
        <NavLinks />
      </div>
    </el-popover>
  </div>
</template>

<script>
import NavLinks from '@theme/components/NavLinks.vue';

export default {
  components: { NavLinks },
  data() {
    return {
      popover_visible: false
    };
  },
  methods: {
    showSidebar() {
      this.$store.state.navStyle = 'inline';
      this.popover_visible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/palette.scss';

.sidebar-button {
  cursor: pointer;
  display: none;
  position: absolute;
  padding: 0 0.6rem;
  right: .8rem;
  // line-height: @navbarHeight;
  top: .1875rem;
  z-index: 3;
  font-size: 1.375rem;
  color: #828282;

  .reset-sidebar {
    transform: translateX(0) !important;
  }
}

.reset-popover {
  width: 16rem;

  .el-popover-inner-content {
    padding: 0;
  }
}

@media (max-width: $MQMobile) {
  .sidebar-button {
    display: block;
  }
}
</style>
