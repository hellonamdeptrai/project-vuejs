<template>
  <div class="home" data-simplebar-auto-hide="false">
    <List />
    <List />
    <List />
    <List />
    <List />
    <List />
    <div class="add-new-list">
      <el-button type="text"
        ><i class="el-icon-plus"></i> Thêm danh sách khác</el-button
      >
    </div>
  </div>
</template>

<script>
import List from "../components/lists/List";

export default {
  name: "Home",
  components: {
    List,
  },
};
</script>

<style scoped lang="scss">
.home {
  user-select: none;
  white-space: nowrap;
  margin: 0 8px;
  margin-top: 15px;
  margin-bottom: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 10px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
/* width */
.home::-webkit-scrollbar {
  height: 10px;
}

/* Track */
.home::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  margin: 20px;
}

/* Handle */
.home::-webkit-scrollbar-thumb {
  background: #ffffff7a;
  border-radius: 30px;
}

/* Handle on hover */
.home::-webkit-scrollbar-thumb:hover {
  background: #ffffffa8;
}
.add-new-list {
  width: 272px;
  margin: 0 8px;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  position: relative;
  background-color: #ffffff94;
  border-radius: 10px;
  .el-button {
    margin-left: 10px;
  }
}
</style>