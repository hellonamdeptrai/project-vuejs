<template>
  <div class="content-body">
    <div class="content-tag">
      <Tag/>
      <Tag/>
      <Tag/>
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

    <el-dialog :append-to-body="true" title="Shipping address" :visible.sync="dialogFormVisible">
  <!-- <el-form :model="form">
    <el-form-item label="Promotion name" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Zones" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="Please select a zone">
        <el-option label="Zone No.1" value="shanghai"></el-option>
        <el-option label="Zone No.2" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form> -->
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import Tag from "../lists/Tag";

export default {
  name: "Home",
  components: {
    Tag
  },
  data() {
    return {
      dialogFormVisible: false
    }
  }
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