<template>
  <div id="index" ref="appRef">
    <div class="canvas">
      <iframe
        src="xuehua/index.html"
        style="width: 100%; height: 100%"
        frameborder="0"
      ></iframe>
    </div>
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="decorationColor" />
            <div class="title">
              <span class="title-text">"两客一危一货"可视化管理平台</span>
              <dv-decoration-6
                class="dv-dec-6"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              class="dv-dec-8"
              :reverse="true"
              :color="decorationColor"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>
        <!-- 第二行 -->
        <div class="flex-sbc jc-between px-2">
          <div class="menu-main aside-width">
            <div class="menus menu-right" @click="goRouter(0)">首页</div>
            <div class="menus menu-right" @click="goRouter(1)">
              车辆行驶行为监管
            </div>
            <div class="menus menu-right" @click="goRouter(2)">
              车辆实时轨迹
            </div>
          </div>
          <div class="menu-main aside-width flex-end">
            <div class="menus menu-left" @click="goRouter(3)">
              车辆、个人基础数据
            </div>
            <div class="menus menu-left" @click="goRouter(4)">网络货运</div>
            <div class="menus menu-left" @click="goRouter(5)">
              货车司机安全学习
            </div>
            <!-- <div class="react-left ml-4 react-l-s  bg-color-blue">
              <span class="react-left"></span>
              <span class="text">数据分析1</span>
            </div> -->
          </div>
          <!-- <div class="d-flex aside-width">
            
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text"
                >{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span
              >
            </div> 
          </div>-->
        </div>

        <div class="body-box">
          <router-view :key="key" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawMixin from "@/utils/drawMixin";
import { formatTime } from "@/utils/index.js";

export default {
  mixins: [drawMixin],
  data() {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      decorationColor: ["#568aea", "#000000"],
    };
  },
  components: {},
  computed: {
    key() {
      return this.$route.path;
    },
  },
  mounted() {
    this.timeFn();
    this.cancelLoading();
  },
  beforeDestroy() {
    clearInterval(this.timing);
  },
  methods: {
    goRouter(index) {
      switch (index) {
        case 0:
           this.$router.push("/");
          break;
        case 1:
           this.$router.push("/menu_1");
          break;
        case 2:
          this.$router.push("/menu_2");
          break;
      case 3:
          this.$router.push("/menu_3");
          break;
        case 4:
          this.$router.push("/menu_4");
          break;
        case 5:
           this.$router.push("/menu_5");
          break;
      }
     
    },
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), "HH: mm: ss");
        this.dateYear = formatTime(new Date(), "yyyy-MM-dd");
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.menu-main {
  display: flex;

  .menus {
    width: 28%;
    line-height: 34px;
    height: 34px;
    cursor: pointer;
    background: transparent;
    border: 1px solid #1cd1de;
    color: #1cd1de;
    text-align: center;
    outline: none;
    font-weight: 600;
    font-size: 16px;
    border-radius: 4px;
    &:hover {
      color: #ff9900;
    }
  }
  .menu-right {
    margin-right: 3%;
  }
  .menu-left {
    margin-left: 3%;
  }
}
.flex-end {
  justify-content: end;
}
</style>
