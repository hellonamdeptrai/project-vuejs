<template>
  <div class="list">
    <div class="list-content" data-simplebar-auto-hide="false">
      <div class="title">
        <el-row>
          <el-col :span="18">
            <p class="title-text" v-if="titleClick" @click="clickTitleNode()">
              Đang làm
            </p>
            <textarea v-else v-model="textarea1" autofocus @focusout="outTitleNode()"></textarea>
            <!-- <el-input
              v-else
              type="text"
              @focusout="outTitleNode()"
              autosize
              v-model="textarea1"
            ></el-input> -->
          </el-col>
          <el-col :span="1">
            <el-button class="list-delete" type="text" @click="open"
              ><i class="el-icon-delete"></i
            ></el-button>
          </el-col>
        </el-row>
      </div>
      <div class="content">
          <ContentList/>
          <ContentList/>
          <ContentList/>
          <ContentList/>
          <ContentList/>
          <ContentList/>
      </div>
      <div class="add-note">
        <el-button type="text"
          ><i class="el-icon-plus"></i> Thêm thẻ khác</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import ContentList from "../lists/ContentList";

export default {
  name: "Home",
  components: {
    ContentList,
  },
  data() {
    return {
      titleClick: true,
      textarea1: 'Đang làm',
    };
  },
  methods: {
    clickTitleNode() {
      this.titleClick = false;
    },
    outTitleNode() {
      this.titleClick = true;
    },
    open() {
      this.$confirm("Bạn có chắc chắn muốn xóa?", "Thông báo", {
        confirmButtonText: "OK",
        cancelButtonText: "Hủy",
        type: "warning",
        center: true,
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "Xóa thành công",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Hủy xóa",
          });
        });
    },
  },
};
</script>

<style scoped lang="scss">
.list {
  width: 272px;
  margin: 0 8px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  position: relative;
  .list-content {
    white-space: normal;
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    .title {
      background-color: #ebecf0;
      width: 100%;
      border-radius: 10px 10px 0 0;
      .el-col {
        margin: 10px 0 10px 10px;
        .title-text {
          padding: 5px 0 0 5px;
          font-weight: bold;
          font-size: 14px;
        }
        .list-delete {
          margin-left: 3px;
          padding: 5px 0 0 5px;
        }
      }
    }
    .content {
      width: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #ebecf0;
    }
    .content::-webkit-scrollbar {
      width: 8px;
    }
    .content::-webkit-scrollbar-track {
      background: #dadbe2;
      border-radius: 30px;
    }
    .content::-webkit-scrollbar-thumb {
      background: #bfc4ce;
      border-radius: 30px;
    }
    .content::-webkit-scrollbar-thumb:hover {
      background: #979da7;
    }
    .add-note {
      background-color: #ebecf0;
      border-radius: 0 0 10px 10px;
      .el-button {
        margin-left: 10px;
      }
    }
  }
}
</style>