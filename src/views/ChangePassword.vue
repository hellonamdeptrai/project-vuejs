<template>
  <div class="pass">
    <div class="pass-content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="oldpassword" label="Nhập mật khẩu cũ">
          <el-input
            type="password"
            placeholder="Mật khẩu cũ"
            v-model="ruleForm.oldpassword"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" label="Nhập mật khẩu mới">
          <el-input
            type="password"
            placeholder="Mật khẩu mới"
            v-model="ruleForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword" label="Nhập xác nhận mật khẩu">
          <el-input
            type="password"
            placeholder="Xác nhận mật khẩu"
            v-model="ruleForm.confirmPassword"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" round @click="submitForm('ruleForm')"
            >Lưu</el-button
          >
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
      ruleForm: {
        oldpassword: "",
        password: "",
        confirmPassword: "",
      },
      rules: {
        oldpassword: [
          {
            required: true,
            message: "Mật khẩu cũ không được để trống",
            trigger: "change",
          },
          {
            min: 6,
            message: "Mật khẩu cũ phải lớn hơn 6 ký tự",
            trigger: "change",
          },
        ],
        password: [
          {
            required: true,
            message: "Mật khẩu mới không được để trống",
            trigger: "change",
          },
          {
            min: 6,
            message: "Mật khẩu mới phải lớn hơn 6 ký tự",
            trigger: "change",
          },
        ],
        confirmPassword: [
          {
            required: true,
            message: "Xác nhận mật khẩu không được để trống",
            trigger: "change",
          },
          {
            min: 6,
            message: "Xác nhận mật khẩu phải lớn hơn 6 ký tự",
            trigger: "change",
          },
        ],
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
    back() {
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.pass {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .pass-content {
    width: 50%;
    padding: 30px;
    border-radius: 30px;
    background-color: #fff;
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .pass-content::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  .pass-content::-webkit-scrollbar-track {
    background: #dadbe2;
    border-radius: 30px;
    margin: 35px;
  }
  .pass-content::-webkit-scrollbar-thumb {
    background: #bfc4ce;
    border-radius: 30px;
  }
  .pass-content::-webkit-scrollbar-thumb:hover {
    background: #979da7;
  }
}
</style>