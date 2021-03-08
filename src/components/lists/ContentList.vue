<template>
  <div class="content-body">
    <div class="content-tag">
      <Tag />
      <Tag />
      <Tag />
    </div>
    <div class="content-text" type="text" @click="dialogFormVisible = true">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit
        aliquid nemo voluptas odit quia officiis alias. Dolorum non accusamus
        velit rem dolore eaque modi aliquam. Natus delectus facilis corporis?
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
        </el-col>
        <el-col :span="7">
          <div class="menu-detail">
            <p class="title-tag-detail">THÊM VÀO THẺ</p>
            <div class="title-tag-detail-button">
              <el-popover class="labels" placement="bottom" width="400" trigger="click">
              
              <el-button class="button-detail-add-tag" slot="reference">
                <i class="el-icon-price-tag"></i>
                Nhãn
              </el-button>
            </el-popover>
            </div>
            <div class="title-tag-detail-button">
              <el-popover class="labels" placement="bottom" width="400" trigger="click">
              
              <el-button class="button-detail-add-tag" slot="reference">
                <i class="el-icon-document-checked"></i>
                Việc cần làm
              </el-button>
            </el-popover>
            </div>
            <div class="title-tag-detail-button">
              <el-popover class="labels" placement="bottom" width="400" trigger="click">
              
              <el-button class="button-detail-add-tag" slot="reference">
                <i class="el-icon-time"></i>
                Ngày hết hạn
              </el-button>
            </el-popover>
            </div>
            <div class="title-tag-detail-button">
              <el-popover class="labels" placement="bottom" width="400" trigger="click">
              
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
  components: {
    Tag,
  },
  data() {
    return {
      dialogFormVisible: false,
      titleClickCheck: true,
      dataTitle: "sefsfsfs",
    };
  },
  methods: {
    clickTitleNode() {
      this.titleClickCheck = false;
    },
    outTitleNode() {
      this.titleClickCheck = true;
    },
  },
};
</script>

<style scoped lang="scss">
.content-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  .content-tag {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    margin-left: 10px;
    margin-right: 5px;
    padding: 10px;
  }
  .content-text {
    background-color: #fff;
    margin-left: 10px;
    margin-right: 5px;
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
    margin-right: 5px;
    padding: 10px;
    .content-end-detail {
      border-radius: 5px;
      padding: 5px;
      margin-right: 4px;
      margin-bottom: 4px;
      font-size: 14px;
    }
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
</style>