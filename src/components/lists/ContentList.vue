<template>
  <div class="content-body">
    <div class="content-tag">
      <Tag/>
      <Tag/>
      <Tag/>
    </div>
    <div class="content-text" type="text" @click="dialogTableVisible = true">
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
  </div>
</template>

<script>
import Tag from "../lists/Tag";

export default {
  name: "Home",
  components: {
    Tag
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