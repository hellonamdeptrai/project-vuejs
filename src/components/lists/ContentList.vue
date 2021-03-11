<template>
  <div @click="dialogFormVisible = true">
    <div class="content-tag">
      <Tag />
      <Tag />
      <Tag />
    </div>
    <div class="content-text" type="text">
      <p>
        {{ card.title }}
      </p>
    </div>
    <div class="content-end">
      <div
        class="content-end-detail"
        style="background-color: pink; color: white"
      >
        <i class="el-icon-time"></i>20 tháng 2
      </div>
      <div class="content-end-detail"><i class="el-icon-tickets"></i></div>
      <div class="content-end-detail"><i class="el-icon-files"></i>1</div>
      <div class="content-end-detail">
        <i class="el-icon-document-checked"></i>2/5
      </div>
    </div>

    <!-- edit detail -->
    <el-dialog :append-to-body="true" :visible.sync="dialogFormVisible">
      <el-row>
        <el-col :span="1">
          <div class="left-title">
            <i class="el-icon-bank-card"></i>
          </div>
        </el-col>
        <el-col :span="23">
          <div class="right-title">
            <p v-if="titleClickCheck" @click="clickTitleNode()">
              kejfhskrf skfsrf skrfhsd
            </p>
            <el-input
              v-else
              type="textarea"
              @focusout.native="outTitleNode()"
              autosize
              autofocus
              v-model="dataTitle"
            ></el-input>
            <span>Trong danh sách <a href="#">Đang làm</a></span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="15" class="dialog-container">
        <el-col :span="17">
          <el-row>
            <el-col :span="2" style="font-size: 1px"> . </el-col>
            <el-col :span="22">
              <div class="tag-detail">
                <p class="title-tag-detail">NHÃN</p>
                <div class="tag-detail-tag">
                  <div style="background-color: red">sdsdf</div>
                  <div style="background-color: blue">Hihi</div>
                  <div style="background-color: pink">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores eligendi sed quisquam consequuntur sint rerum.
                    Adipisci sequi id tempora eos sunt beatae, omnis vitae
                    mollitia aperiam rem quo nesciunt ab.
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row class="magin-mission">
            <el-col :span="2" style="font-size: 1px"> . </el-col>
            <el-col :span="22">
              <div class="tag-detail">
                <p class="title-tag-detail">NGÀY HẾT HẠN</p>
                <div class="radio-date">
                  <el-radio v-model="radioDate" label="1">Quá hạn</el-radio>
                  <el-radio v-model="radioDate" label="2">Hoàn tất</el-radio>
                  <span>10/1/2021</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row class="magin-mission">
            <el-col :span="2" style="font-size: 24px"
              ><i class="el-icon-document"></i
            ></el-col>
            <el-col :span="22">
              <div class="note-card">
                <p class="title-tag-detail">MÔ TẢ</p>
                <p v-if="titleClickCard" @click="clickTitleCard">hihi haha</p>
                <el-input
                  v-else
                  type="textarea"
                  @focusout.native="outTitleCard"
                  autosize
                  autofocus
                  v-model="dataTitleCard"
                ></el-input>
              </div>
            </el-col>
          </el-row>
          <el-row class="magin-mission">
            <el-col :span="2" style="font-size: 24px"
              ><i class="el-icon-files"></i
            ></el-col>
            <el-col :span="22">
              <div class="note-card">
                <p class="title-tag-detail">TẬP TIN ĐÍNH KÈM</p>
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
                    <el-button type="text" @click="deleteFile"
              >Loại bỏ</el-button>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row class="magin-mission">
            <el-col :span="2" style="font-size: 24px"
              ><i class="el-icon-document-checked"></i
            ></el-col>
            <el-col :span="22">
              <div class="note-card">
                <p class="title-tag-detail">VIỆC CẦN LÀM</p>
                <div>
                  <el-progress class="margin-checklist" :percentage="50"></el-progress>
                  <el-checkbox class="margin-checklist" v-model="checkList">
                    <del v-if="checkList">hihi</del>
                    <span v-else>hihi</span>
                  </el-checkbox>
                </div>
                <div>
                  <el-button v-if="checkNoteCard" size="medium" plain @click="clickNoteCard">Thêm một mục</el-button>
                  <div v-else>
                    <el-input
                    type="textarea"
                    @focusout.native="outNoteCard"
                    autosize
                    autofocus
                    v-model="dataNoteCard"
                  ></el-input>
                  <div style="margin-top: 10px;">
                    <el-button size="medium" type="success" @click="addNoteCard">Thêm</el-button>
                    <el-button size="medium" type="text" @click="outNoteCard"><i class="el-icon-close"></i></el-button>
                  </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="7">
          <div class="menu-detail">
            <p class="title-tag-detail">THÊM VÀO THẺ</p>
            <div class="title-tag-detail-button">
              <el-popover
                class="labels"
                placement="bottom"
                width="400"
                trigger="click"
              >
                <el-button class="button-detail-add-tag" slot="reference">
                  <i class="el-icon-price-tag"></i>
                  Nhãn
                </el-button>
              </el-popover>
            </div>
            <div class="title-tag-detail-button">
              <el-popover
                class="labels"
                placement="bottom"
                width="400"
                trigger="click"
              >
                <el-button class="button-detail-add-tag" slot="reference">
                  <i class="el-icon-document-checked"></i>
                  Việc cần làm
                </el-button>
              </el-popover>
            </div>
            <div class="title-tag-detail-button">
              <el-popover
                class="labels"
                placement="bottom"
                width="400"
                trigger="click"
              >
                <el-button class="button-detail-add-tag" slot="reference">
                  <i class="el-icon-time"></i>
                  Ngày hết hạn
                </el-button>
              </el-popover>
            </div>
            <div class="title-tag-detail-button">
              <el-popover
                class="labels"
                placement="bottom"
                width="400"
                trigger="click"
              >
                <el-button class="button-detail-add-tag" slot="reference">
                  <i class="el-icon-files"></i>
                  Đính kèm
                </el-button>
              </el-popover>
            </div>
          </div>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-tooltip
          class="item"
          effect="dark"
          content="Xóa thẻ"
          placement="left"
        >
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            @click="dialogFormVisible = false"
          ></el-button>
        </el-tooltip>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Tag from "../lists/Tag";

export default {
  name: "Home",
  props: ["card"],
  components: {
    Tag,
  },
  data() {
    return {
      dialogFormVisible: false,
      titleClickCheck: true,
      dataTitle: "sefsfsfs",
      radioDate: "2",
      titleClickCard: true,
      dataTitleCard: "hihi haha",
      checkList: false,
      dataNoteCard: '',
      checkNoteCard: true
    };
  },
  methods: {
    clickTitleNode() {
      this.titleClickCheck = false;
    },
    outTitleNode() {
      this.titleClickCheck = true;
    },
    clickTitleCard() {
      this.titleClickCard = false;
    },
    outTitleCard() {
      this.titleClickCard = true;
    },
    deleteFile() {
      this.$confirm("Bạn có chắc chắn muốn xóa?", "Thông báo", {
        confirmButtonText: "OK",
        cancelButtonText: "Hủy",
        type: "warning",
        center: true,
      })
        .then(() => {
          // axios({
          //   method: "delete",
          //   url: "http://vuecourse.zent.edu.vn/api/directories/" + this.list.id,
          //   headers: {
          //     Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          //   },
          // })
          //   .then(() => {
          //     this.getdirectories();
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //   });
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
    clickNoteCard() {
      this.checkNoteCard = false;
    },
    outNoteCard() {
      this.checkNoteCard = true;
    },
    addNoteCard() {
      //
    },
  },
};
</script>

<style scoped lang="scss">
.content-tag {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
}
.content-text {
  background-color: #fff;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
}
.content-end {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  .content-end-detail {
    border-radius: 5px;
    padding: 5px;
    margin-right: 4px;
    margin-bottom: 4px;
    font-size: 14px;
  }
}
</style>

// style dialog
<style scoped>
.left-title {
  font-size: 24px;
}

.right-title {
  margin-left: 13px;
}

.right-title > p {
  font-size: 24px;
}

.right-title > span {
  font-size: 14px;
  margin-top: 5px;
}

.dialog-container {
  margin-top: 20px;
}

.tag-detail-tag {
  display: flex;
  flex-wrap: wrap;
}

.tag-detail-tag div {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: white;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  cursor: pointer;
  transition: 0.5s;
}

.title-tag-detail {
  margin-top: 5px;
  margin-bottom: 5px;
  color: gray;
  font-weight: bold;
}

.button-detail-add-tag {
  width: 100%;
  text-align: left;
}

.title-tag-detail-button {
  margin-bottom: 5px;
}

.magin-mission {
  margin-bottom: 10px;
}

.margin-checklist {
  margin-bottom: 10px;
  width: 100%;
}
</style>