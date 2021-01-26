<template>
  <div class="wrap">
    <h2>Đăng ký tài khoản</h2>
    
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      style="width: 100%"
    >
      <el-form-item
        prop="email"
        :rules="[
          {
            required: true,
            message: 'Email không được để trống',
            trigger: 'change',
          },
          {
            type: 'email',
            message: 'Vui lòng nhập đúng định dạng email',
            trigger: ['blur', 'change'],
          },
        ]"
      >
        <el-input
          placeholder="Email"
          v-model="dynamicValidateForm.email"
        ></el-input>
      </el-form-item>
      <el-form-item
        prop="email"
        :rules="[
          {
            required: true,
            message: 'Tên không được để trống',
            trigger: 'change',
          }
        ]"
      >
        <el-input
          placeholder="Họ tên"
          v-model="dynamicValidateForm.name"
        ></el-input>
      </el-form-item>
      <el-form-item
        prop="password"
        :rules="[
          {
            required: true,
            message: 'Mật khẩu không được để trống',
            trigger: 'change',
          },
        ]"
      >
        <el-input
          placeholder="Mật khẩu"
          type="password"
          v-model="dynamicValidateForm.password"
        ></el-input>
      </el-form-item>
      <el-form-item
        prop="password"
        :rules="[
          {
            required: true,
            message: 'Mật khẩu không được để trống',
            trigger: 'change',
          },
        ]"
      >
        <el-input
          placeholder="Xác nhận mật khẩu"
          type="password"
          v-model="dynamicValidateForm.password2"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          style="width: 100%"
          type="primary"
          :plain="true"
          @click="submitForm('dynamicValidateForm')"
          >Đăng ký</el-button
        >
      </el-form-item>
      <el-button
        type="text"
        @click="login()"
        style="margin-left: 120px; margin-bottom: 25px"
        ><i class="el-icon-back"></i>Trở về trang đăng nhập</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: true,
      dynamicValidateForm: {
        email: "",
        name: "",
        password: "",
        password2: ""
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({ path: "home" });
        } else {
          console.log("Lỗi đăng ký!!");
          return false;
        }
      });
    },
    submitForm2(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            showClose: true,
            message: "Gửi email thành công",
            type: "success",
          });
        } else {
          this.$message({
            showClose: true,
            message: "Gửi không thành công",
            type: "error",
          });
          return false;
        }
      });
    },
    login() {
      this.$router.push({ path: '/'})
    },
  },
};
</script>

<style scoped lang="scss">
.wrap {
  width: 444px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  //justify-content: space-between;
  padding: 24px;
  .logo {
    width: 100%;
    text-align: center;
    margin-bottom: 24px;
    img {
      width: 200px;
      display: inline-block;
    }
  }
  h2 {
    margin-left: 100px;
    margin-bottom: 30px;
  }
  p {
    margin-top: 10px;
    padding-bottom: 5px;
  }
}
</style>
