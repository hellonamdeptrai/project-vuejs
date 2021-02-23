<template>
  <div class="user">
    <div class="user-content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <div class="avatar">
          <div>
            <el-avatar :size="100" :src="circleUrl"></el-avatar>
            <div class="sub-title">Lò Tuấn Nam</div>
          </div>
        </div>
        <el-upload
          class="upload-avatar"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="fileList"
        >
          <el-button size="small" type="primary"
            >Tải ảnh đại diện lên</el-button
          >
          <div slot="tip" class="el-upload__tip">
            Định dạng file jpg/png và kích thước nhỏ hơn 500kb
          </div>
        </el-upload>
        <el-form-item prop="name" label="Họ tên">
          <el-input
            type="text"
            placeholder="Họ tên"
            v-model="ruleForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item prop="email" label="Email">
          <el-input
            type="email"
            placeholder="Email"
            v-model="ruleForm.email"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" round @click="submitForm('ruleForm')"
            >Lưu</el-button
          >
          <el-button round @click="ChangePass()">Đổi mật khẩu</el-button>
        </el-form-item>
        <div class="login">
          <el-button type="text" @click="back()"
            ><i class="el-icon-back"></i> Quay lại trang chủ</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    //
  },
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      fileList: [
        //   {
        //   name: 'food.jpeg',
        //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        // }, {
        //   name: 'food2.jpeg',
        //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        // }
      ],
      ruleForm: {
        name: "Lò Tuấn Nam",
        email: "nam@gmail.com",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Họ tên không được để trống",
            trigger: "change",
          },
          {
            min: 2,
            message: "Họ tên phải lớn hơn 2 ký tự",
            trigger: "change",
          },
        ],
        email: [
          {
            required: true,
            message: "Email không được để trống",
            trigger: "change",
          },
          {
            type: "email",
            message: "Vui lòng nhập đúng định dạng email",
            trigger: ["blur", "change"],
          },
        ],
      },
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: "Sửa thành công",
            type: "success",
          });
          this.$router.push({ path: "/home" });
        } else {
          this.$message.error("Lỗi, vui lòng kiểm tra lại");
          return false;
        }
      });
    },
    ChangePass() {
      this.$router.push({ path: "changepassword" });
    },
    back() {
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .user-content {
    width: 50%;
    padding: 30px;
    border-radius: 30px;
    background-color: #fff;
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    .el-form {
      .avatar {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .upload-avatar {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
  .user-content::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  .user-content::-webkit-scrollbar-track {
    background: #dadbe2;
    border-radius: 30px;
    margin: 35px;
  }
  .user-content::-webkit-scrollbar-thumb {
    background: #bfc4ce;
    border-radius: 30px;
  }
  .user-content::-webkit-scrollbar-thumb:hover {
    background: #979da7;
  }
}
</style>