<template>
  <div class="wrap">
    <div class="logo">
      <img src="../assets/images/LogoMakr-2rdE5H.png" alt="" />
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item prop="email">
        <el-input
          type="email"
          placeholder="Email"
          v-model="ruleForm.email"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="Mật khẩu"
          v-model="ruleForm.password"
        ></el-input>
      </el-form-item>
      <el-form-item class="submit-login">
        <el-button type="success" round @click="submitForm('ruleForm')"
          >Đăng nhập</el-button
        >
      </el-form-item>
      <div class="register">
        <el-button type="text" @click="register()">Đăng ký</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";

export default {
  name: 'Login',
  data() {
    return {
      ruleForm: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: "Email không được để trống",
            trigger: 'blur',
          },
          {
            type: "email",
            message: "Vui lòng nhập đúng định dạng email",
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: "Mật khẩu không được để trống",
            trigger: 'blur',
          },
          {
            min: 6,
            message: "Mật khẩu phải lớn hơn 6 ký tự",
            trigger: 'blur',
          },
        ],
      },
    };
  },
  computed: {
    ...mapState("auth", ["isAuthenticated"]),
  },
  methods: {
    ...mapMutations("auth", ["changeLoginStatus"]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios({
            method: "post",
            url: "http://vuecourse.zent.edu.vn/api/auth/login",
            data: {
              email: this.ruleForm.email,
              password: this.ruleForm.password,
            },
          })
            .then((response) => {
              this.$message({
                message: "Đăng nhập thành công!",
                type: "success",
              });
              localStorage.setItem("access_token", response.data.access_token);
              this.changeLoginStatus({ isAuthenticated: true, authUser: {} });
              if (this.$router.currentRoute.name !== "Home") {
                this.$router.push({ name: "Home" });
              }
            })
            .catch(() => {
              this.$message({
                message: "Sai thông tin đăng nhập!",
                type: "error",
              });
            });
        } else {
          this.$message.error("Lỗi, vui lòng kiểm tra lại");
          return false;
        }
      });
    },
    register() {
      this.$router.push({ path: "/register" });
    },
  },
};
</script>

<style scoped lang="scss">
.wrap {
  background: #fff;
  border-radius: 30px;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  box-shadow: 0 0 50px 10px gainsboro;
  .logo {
    width: 100%;
    text-align: center;
    margin-bottom: 24px;
    img {
      width: 200px;
      display: inline-block;
    }
  }
  .el-form {
    width: 100%;
    .submit-login {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
      margin-bottom: 0;
    }
  }
  .register {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
