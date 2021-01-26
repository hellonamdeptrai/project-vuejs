<template>
  <el-container>
    <el-header style="height: auto">
      <el-row>
        <el-col :span="12"> Logo</el-col>
        <el-col :span="12" class="user">
          <div style="margin-left: auto">
            <el-dropdown trigger="click">
              <el-avatar icon="el-icon-user-solid"></el-avatar>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click="user()" icon="el-icon-setting">
                  <el-button @click="user()" type="text">Cài đặt</el-button>
                </el-dropdown-item>
                <el-dropdown-item divided icon="el-icon-close">
                  <el-button @click="logout()" type="text">Đăng xuất</el-button>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  methods: {
    user() {
      this.$router.push({ path: "/home/user" });
    },
    logout() {
      this.$router.push({ path: "/" });
    }
  },
};
</script>

<style scoped lang="scss">
.el-container {
  background-image: url("../assets/images/pexels-irina-iriser-2781760.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  .el-header {
    background-color: rgba(0, 0, 0, 0.32);
    padding: 5px;
    .user {
      display: flex;
    }
  }
}
</style>
