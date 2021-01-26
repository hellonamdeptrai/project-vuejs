<template>
  
  <div class="wrap">
    <router-view/>
    <div class="logo">
      <img
        src="http://dev-fms.zentsoft.com/static/media/logo-login.2d516aef.png"
        alt=""
      />
    </div>

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
      <el-button
        type="text"
        @click="register()"
        style="margin-left: 289px; margin-bottom: 25px"
        >Đăng ký</el-button
      >
      <el-form-item>
        <el-button
          style="width: 100%"
          type="primary"
          @click="submitForm('dynamicValidateForm')"
          >ĐĂNG NHẬP</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        password: "",
        email: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({ path: "home" });
        } else {
          console.log("Lỗi đăng nhập!!");
          return false;
        }
      });
    },
    register() {
      this.$router.push({ path: '/register'})
    }
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
