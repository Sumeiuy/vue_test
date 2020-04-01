<template>
  <div class="login">
    <el-form :model="loginForm"
             ref="loginForm"
             class="loginForm"
             label-width="80px"
             :rules="rules">
      <h3 class="title">login</h3>
      <el-form-item label="用户名"
                    prop="name">
        <el-input prefix-icon="el-icon-menu"
                  v-model="loginForm.name">
        </el-input>
      </el-form-item>
      <el-form-item label="验证码"
                    prop="code">
        <el-input prefix-icon="el-icon-menu"
                  v-model="loginForm.code">
        </el-input>
      </el-form-item>
      <el-form-item label="密码"
                    prop="pass">
        <el-input prefix-icon="el-icon-menu"
                  v-model="loginForm.pass">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('loginForm')"
                   type="primary">登陆</el-button>
        <el-button type="primary"
                   @click="resetForm('loginForm')">注册</el-button>
      </el-form-item>
    </el-form>
    <div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      // 表单数据绑定对象
      loginForm: {
        name: '',
        pass: '',
        code: ''
      },
      // 表单数据校验
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        code: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  watch: {
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('login', this.loginForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.login {
  width: 400px;
  height: 360px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fafafa;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 2px 2px 9px #aa6577;
}
.login .title {
  height: 40px;
  line-height: 40px;
  background: #a67;
  margin-bottom: 30px;
  color: #fff;
  font-size: 18px;
}
.login .loginForm {
  padding: 20px;
  box-sizing: border-box;
}
</style>
