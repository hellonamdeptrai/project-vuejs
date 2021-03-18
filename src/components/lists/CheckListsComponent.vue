<template>
  <el-row>
    <el-col :span="2" style="font-size: 24px"
      ><i class="el-icon-document-checked"></i
    ></el-col>
    <el-col :span="22">
      <div class="note-card">
        <div v-if="checkLEdit == checkL.id">
          <el-input
            type="textarea"
            placeholder="Nhập công việc"
            v-model="editCheckL"
            @keydown.enter.native="saveCheckLEidt(checkL.id)"
            @focusout.native="saveCheckLEidt(checkL.id)"
          >
          </el-input>
          <el-button
            @click="saveCheckLEidt(checkL.id)"
            type="success"
            size="mini"
            >Lưu</el-button
          >
          <el-button type="text" @click="(checkLEdit = ''), (editCheckL = '')"
            ><i class="el-icon-close"></i
          ></el-button>
        </div>
        <div v-else class="delete-check-list">
          <p
            @click="(checkLEdit = checkL.id), (editCheckL = checkL.title)"
            class="title-tag-detail"
          >
            {{ checkL.title }}
          </p>
          <el-popconfirm
            title="Danh sách công việc sẽ bị xoá vĩnh viễn và không bao giờ lấy lại được."
            confirm-button-text="Xóa"
            @confirm="deleteCheckLEidt(checkL.id)"
            cancel-button-text="Thoát"
            icon="el-icon-info"
            icon-color="red"
          >
            <el-button size="mini" type="info" plain slot="reference"
              >Xóa</el-button
            >
          </el-popconfirm>
        </div>
        <el-progress class="margin-checklist" :percentage="progressData" />
        <div
          v-for="checkListChild in checkL.check_list_childs"
          :key="checkListChild.id"
        >
          <div v-if="checkListShowEdit == checkListChild.id">
            <el-input
              type="textarea"
              placeholder="Nhập công việc con"
              v-model="editCheckLEidtChildData"
              @keydown.enter.native="saveCheckLEidtChild(checkListChild.id)"
              @focusout.native="saveCheckLEidtChild(checkListChild.id)"
            >
            </el-input>
            <el-button
              @click="saveCheckLEidtChild(checkListChild.id)"
              type="success"
              size="mini"
              >Lưu</el-button
            >
            <el-button
              type="text"
              @click="(checkListShowEdit = ''), (editCheckLEidtChildData = '')"
              ><i class="el-icon-close"></i
            ></el-button>
          </div>
          <div v-else class="flex-checklist">
            <div class="margin-checklist check-box-check-list-chid">
              <input
                v-if="checkListChild.status === 1"
                @click="statusCheckLEidtChild(checkListChild)"
                checked
                type="checkbox"
              />
              <input
                v-else
                @click="statusCheckLEidtChild(checkListChild)"
                type="checkbox"
              />
              <del
                v-if="checkListChild.status === 1"
                @click="
                  (checkListShowEdit = checkListChild.id),
                    (editCheckLEidtChildData = checkListChild.title)
                "
                >{{ checkListChild.title }}</del
              >
              <span
                v-else
                @click="
                  (checkListShowEdit = checkListChild.id),
                    (editCheckLEidtChildData = checkListChild.title)
                "
                >{{ checkListChild.title }}</span
              >
            </div>
            <el-button
              @click="deleteCheckLEidtChild(checkListChild.id)"
              style="margin-bottom: 10px"
              size="mini"
              type="text"
              icon="el-icon-close"
            ></el-button>
          </div>
        </div>
        <div>
          <div v-if="checkNoteCard === checkL.id">
            <el-input
              type="textarea"
              @keyup.enter.native="addNoteCard(checkL.id)"
              v-model="dataNoteCard"
            ></el-input>
            <div style="margin-top: 10px">
              <el-button
                size="mini"
                type="success"
                @click="addNoteCard(checkL.id)"
                >Thêm</el-button
              >
              <el-button size="mini" type="text" @click="checkNoteCard = ''"
                ><i class="el-icon-close"></i
              ></el-button>
            </div>
          </div>
          <el-button v-else size="mini" plain @click="checkNoteCard = checkL.id"
            >Thêm một mục</el-button
          >
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import axios from "axios";
export default {
  props: ["index", "card", "checkL", "getCards", "getdirectories"],
  data() {
    return {
      checkLEdit: "",
      editCheckL: "",
      progressData: 0,
      checkListShowEdit: "",
      editCheckLEidtChildData: "",
      checkNoteCard: "",
      dataNoteCard: "",
    };
  },
  methods: {
    saveCheckLEidt(id) {
      axios({
        method: "put",
        url: "http://vuecourse.zent.edu.vn/api/check-lists/" + id,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: {
          title: this.editCheckL,
        },
      })
        .then(() => {
          this.editCheckL = "";
          this.getCards();
          this.getdirectories();
        })
        .catch((error) => {
          console.log(error);
        });
      this.checkLEdit = "";
    },
    addNoteCard(id) {
      axios({
        method: "post",
        url: "http://vuecourse.zent.edu.vn/api/check-list-childs",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: {
          title: this.dataNoteCard,
          check_list_id: id,
        },
      })
        .then(() => {
          this.dataNoteCard = "";
          this.getManaData();
          this.getCards();
          this.getdirectories();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteCheckLEidt(id) {
      axios({
        method: "delete",
        url: "http://vuecourse.zent.edu.vn/api/check-lists/" + id,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then(() => {
          this.getCards();
          this.getdirectories();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    saveCheckLEidtChild(id) {
      axios({
        method: "put",
        url: "http://vuecourse.zent.edu.vn/api/check-list-childs/" + id,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: {
          title: this.editCheckLEidtChildData,
        },
      })
        .then(() => {
          this.editCheckLEidtChildData = "";
          this.getCards();
          this.getdirectories();
        })
        .catch((error) => {
          console.log(error);
        });
      this.checkListShowEdit = "";
    },
    deleteCheckLEidtChild(id) {
      axios({
        method: "delete",
        url: "http://vuecourse.zent.edu.vn/api/check-list-childs/" + id,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then(() => {
          this.getManaData();
          this.getCards();
          this.getdirectories();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    statusCheckLEidtChild(checkListChild) {
      let stt = 0;
      if (checkListChild.status) {
        stt = 0;
      } else {
        stt = 1;
      }
      axios({
        method: "put",
        url:
          "http://vuecourse.zent.edu.vn/api/check-list-childs/" +
          checkListChild.id +
          "/change-status",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: {
          status: stt,
        },
      })
        .then(() => {
          this.getManaData();
          this.getCards();
          this.getdirectories();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getManaData() {
      let st = 0;
      let lt = 0;
      axios({
        method: "get",
        url: "http://vuecourse.zent.edu.vn/api/cards/" + this.card.id,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((response) => {
          response.data.data.check_lists[this.index].check_list_childs.forEach(
            (li) => {
              if (li.status == 1) {
                st += 1;
              }
              lt += 1;
              this.progressData = Math.ceil((st / lt) * 100);
            }
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getdirectories();
    this.getCards();
    this.getManaData();
  },
};
</script>

<style scoped>
.margin-checklist {
  margin-bottom: 10px;
  width: 100%;
}

.flex-checklist {
  display: flex;
  justify-content: space-between;
}

.check-box-check-list-chid {
  display: flex;
  align-items: center;
}

.check-box-check-list-chid input {
  margin-right: 10px;
}

.title-tag-detail {
  margin-top: 5px;
  margin-bottom: 5px;
  color: gray;
  font-weight: bold;
}

.delete-check-list {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.delete-check-list p {
  cursor: pointer;
}
</style>