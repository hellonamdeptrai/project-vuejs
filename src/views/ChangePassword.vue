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
            ><i class="el-icon-back"></i> Quay lại cài đặt</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
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
  computed: {
    ...mapState("user", ["users"]),
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios({
            method: "post",
            url: "http://vuecourse.zent.edu.vn/api/auth/login",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
            data: {
              email: this.users.email,
              password: this.ruleForm.oldpassword,
            },
          })
            .then(() => {
              axios({
                method: "put",
                url: "http://vuecourse.zent.edu.vn/api/users/password",
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
                data: {
                  password: this.ruleForm.password,
                  password_confirmation: this.ruleForm.confirmPassword,
                },
              })
                .then(() => {
                  this.$message({
                    message: "Cập nhật mật khẩu mới thành công!",
                    type: "success",
                  });
                  this.$router.push({ path: "/home" });
                })
                .catch(() => {
                  this.$message({
                    message: "Xác nhận mật khẩu không khớp!",
                    type: "error",
                  });
                });
            })
            .catch(() => {
              this.$message({
                message: "Mật khẩu cũ không đúng!",
                type: "error",
              });
            });
        } else {
          this.$message.error("Lỗi, vui lòng kiểm tra lại");
          return false;
        }
      });
    },
    back() {
      this.$router.push({ path: "user" });
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
  margin-top: 30px;
  margin-bottom: 30px;
  .pass-content {
    width: 400px;
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