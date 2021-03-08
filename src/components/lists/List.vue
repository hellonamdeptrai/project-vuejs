<template>
  <div class="list">
    <div class="list-content" data-simplebar-auto-hide="false">
      <div class="title">
        <div class="title-col">
          <div class="title-text">
            <p v-if="titleClick" @click="clickTitleNode()">
              Đang làm
            </p>
            <el-input
              v-else
              type="textarea"
              @focusout.native="outTitleNode()"
              autosize
              autofocus
              v-model="textarea1"
            ></el-input>
          </div>
          <div class="list-delete">
            <el-button type="text" @click="deleteList"
              ><i class="el-icon-delete"></i
            ></el-button>
          </div>
        </div>
      </div>
      <div class="content">
          <ContentList/>
          <ContentList/>
          <ContentList/>
          <ContentList/>
          <ContentList/>
          <ContentList/>
          <div class="add-new-list">
            <el-input
              id="inputaddlist"
              v-if="addNewListCheck"
              type="textarea"
              autosize
              autofocus
              placeholder="Nhập tiêu đề cho thẻ này"
              v-model="addList"
              @keyup.enter.native="addNewListCompalete"
              @focusout.native="addNewListCompalete"
            ></el-input>
          </div>
      </div>
      <div v-if="!addNewListCheck" class="add-note">
        <el-button type="text" @click="addNewList"
          ><i class="el-icon-plus"></i> Thêm thẻ khác</el-button
        >
      </div>
      <div v-else class="add-note-text-button">
        <el-button @click="addNewListCompalete" type="success" size="small">Thêm thẻ</el-button>
        <i @click="closeAddNote" class="el-icon-close"></i>
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
      addList: '',
      addNewListCheck: false,
    };
  },
  methods: {
    clickTitleNode() {
      this.titleClick = false;
    },
    outTitleNode() {
      this.titleClick = true;
    },
    addNewList() {
      this.addNewListCheck = true;
      let container = this.$el.querySelector(".content");
      container.scrollTop = container.scrollHeight;
    },
    addNewListCompalete() {
      this.addNewListCheck = false
    },
    closeAddNote() {
      this.addNewListCheck = false
    },
    deleteList() {
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
      .title-col {
        margin: 10px;
        display: flex;
        justify-content: space-between;
        .title-text {
          width: 100%;
          padding: 5px 10px 0 5px;
          font-weight: bold;
          font-size: 14px;
        }
        .list-delete {
          .el-button {
            padding: 5px 5px 0 0;
          }
        }
      }
    }
    .content {
      width: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #ebecf0;
      .add-new-list {
        padding: 0 5px 0 10px;
      }
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
    .add-note-text-button {
      display: flex;
    align-items: center;
    background-color: #ebecf0;
      border-radius: 0 0 10px 10px;
      padding: 10px;
    i {
    margin-left: 10px;
    font-size: 24px;
    cursor: pointer;
  }
    }
  }
}
</style>