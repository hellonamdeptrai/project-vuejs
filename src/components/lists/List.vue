<template>
  <div>
    <div class="list-content" data-simplebar-auto-hide="false">
      <div class="title">
        <div class="title-col">
          <div class="title-text">
            <p v-if="titleClick" @click="clickTitleNode()">
              {{ list.title }}
            </p>
            <el-input
              v-else
              type="textarea"
              @focusout.native="addOutTitleNode()"
              @keyup.enter.native="addOutTitleNode()"
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
      <draggable class="content" group="people">
        <div class="content-body" v-for="(card, index) in cards" :key="index">
          <ContentList :card="card"/>
        </div>
        <div class="add-new-list">
          <el-input
            id="inputaddlist"
            v-if="addNewListCheck"
            type="textarea"
            autosize
            autofocus
            placeholder="Nhập tiêu đề cho thẻ này"
            v-model="addListContent"
            @keyup.enter.native="addNewListCompalete"
          ></el-input>
        </div>
      </draggable>
      <div v-if="!addNewListCheck" class="add-note">
        <el-button type="text" @click="addNewList"
          ><i class="el-icon-plus"></i> Thêm thẻ khác</el-button
        >
      </div>
      <div v-else class="add-note-text-button">
        <el-button @click="addNewListCompalete" type="success" size="small"
          >Thêm thẻ</el-button
        >
        <i @click="closeAddNote" class="el-icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
import ContentList from "../lists/ContentList";
import { mapState, mapMutations } from "vuex";
import axios from "axios";
import draggable from 'vuedraggable'

export default {
  name: "Home",
  props: ["list"],
  components: {
    ContentList,
    draggable
  },
  data() {
    return {
      cards: [],
      titleClick: true,
      textarea1: this.list.title,
      addListContent: "",
      addNewListCheck: false,
    };
  },
  computed: {
    ...mapState("home", [""]),
  },
  methods: {
    ...mapMutations("home", ["setLists"]),
    clickTitleNode() {
      this.titleClick = false;
    },
    addOutTitleNode() {
      this.titleClick = true;
      let title = this.list.title;
      if (this.textarea1) {
        title = this.textarea1;
      }
      axios({
        method: "put",
        url: "http://vuecourse.zent.edu.vn/api/directories/" + this.list.id,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: {
          title: title,
        },
      })
        .then(() => {
          title = "";
          this.getdirectories();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addNewList() {
      this.addNewListCheck = true;
      let container = this.$el.querySelector(".content");
      container.scrollTop = container.scrollHeight;
    },
    addNewListCompalete() {
      axios({
        method: "post",
        url: "http://vuecourse.zent.edu.vn/api/cards",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: {
          title: this.addListContent,
          index: this.cards.length+1,
          directory_id: this.list.id
        },
      })
        .then(() => {
          this.addListContent = "";
          this.getdirectories();
          this.addNewListCheck = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    closeAddNote() {
      this.addNewListCheck = false;
    },
    deleteList() {
      this.$confirm("Bạn có chắc chắn muốn xóa?", "Thông báo", {
        confirmButtonText: "OK",
        cancelButtonText: "Hủy",
        type: "warning",
        center: true,
      })
        .then(() => {
          axios({
            method: "delete",
            url: "http://vuecourse.zent.edu.vn/api/directories/" + this.list.id,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          })
            .then(() => {
              this.getdirectories();
            })
            .catch((error) => {
              console.log(error);
            });
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
    getdirectories() {
      axios({
        method: "get",
        url: "http://vuecourse.zent.edu.vn/api/directories",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((response) => {
          // console.log(response)
          this.setLists(response.data.data);
          this.cards = this.list.cards
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getdirectories();
  },
};
</script>

<style scoped lang="scss">
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
    .content-body {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .add-new-list {
      padding: 0 10px 0 10px;
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
</style>