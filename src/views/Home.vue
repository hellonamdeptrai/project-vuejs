<template>
  <draggable  class="home">
    <div class="divList" v-for="(list, index) in lists" :key="index">
      <List :list="list"/>
    </div>
    <div slot="footer" v-if="checkClickAdd" class="add-new-list">
      <el-button type="text" @click="clickAdd"
        ><i class="el-icon-plus"></i> Thêm danh sách khác</el-button
      >
    </div>
    <div slot="footer" v-else class="add-new-list-text">
      <div class="add-new-list-text-input">
        <el-input @keyup.enter.native="addNewList" @focusout.native="clickAddOut" placeholder="Nhập tiêu đề danh sách..." v-model="addList"></el-input>
      </div>
      <div class="add-new-list-text-button">
        <el-button @click="addNewList" type="success" size="small">Thêm danh sách</el-button>
        <i @click="clickAddOut" class="el-icon-close"></i>
      </div>
    </div>
  </draggable>
</template>

<script>
import List from "../components/lists/List";
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import draggable from 'vuedraggable'

export default {
  name: "Home",
  components: {
    List,
    draggable
  },
  data () {
    return {
      addList: '',
    }
  },
  computed: {
    ...mapState("home", ['lists','checkClickAdd']),
  },
  methods: {
    ...mapMutations("home", ["setCheckClickAdd",'setLists']),
    clickAdd() {
      this.setCheckClickAdd(false)
    },
    addNewList() {
      this.setCheckClickAdd(true);
      axios({
        method: "post",
        url: "http://vuecourse.zent.edu.vn/api/directories",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        },
        data: {
          title: this.addList,
          index: this.lists.length+1
        }
      })
        .then(() => {
          this.addList = '';
          this.getdirectories();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clickAddOut() {
      this.setCheckClickAdd(true);
    },
    getdirectories() {
      axios({
        method: "get",
        url: "http://vuecourse.zent.edu.vn/api/directories",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })
        .then((response) => {
          // console.log(response)
          this.setLists(response.data.data);
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
  .divList{
    width: 272px;
    margin: 0 8px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    position: relative;
  }
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

.add-new-list-text {
  width: 272px;
  margin: 0 8px;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: normal;
  position: relative;
  background-color: #ebecf0;
  border-radius: 10px;
  padding: 10px;
  .add-new-list-text-input {
    padding-bottom: 10px;
  }
  .add-new-list-text-button {
    display: flex;
    align-items: center;
    i {
    margin-left: 10px;
    font-size: 24px;
    cursor: pointer;
  }
  }
}
</style>