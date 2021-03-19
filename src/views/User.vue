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
        <div class="file-input">
                  <input @change="changeFile" type="file" id="file" class="file">
                  <span v-if="fileData" @click="fileData = ''">
                    Xóa avatar vừa chọn
                  </span>
                  <label v-else for="file">
                    Chọn avatar
                  </label>
                </div>
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
            :disabled="true"
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
      fileData: '',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
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
    };
  },
  methods: {
    changeFile(e) {
      if (e.target.files.length) {
        this.fileData = e.target.files[0];
      }
    },
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
  margin-top: 30px;
  margin-bottom: 30px;
  .user-content {
    width: 400px;
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
      .file-input {
        text-align: center;
        margin-bottom: 15px;
        margin-top: 5px;
        .file {
          opacity: 0;
          width: 0.1px;
          height: 0.1px;
          position: absolute;
        }
        span {
           display: inline-block;
          position: relative;
          width: 200px;
          height: 40px;
          border-radius: 10px;
          line-height: 40px;
          color: grey;
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
          color: rgb(245, 73, 73);
        }
        label {
          display: inline-block;
          position: relative;
          width: 200px;
          height: 40px;
          border-radius: 10px;
          line-height: 40px;
          color: grey;
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
        }
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