<template>
    <div class="login-container">
      <div class="login-box">
        <div class="box-trans">
          <!--图片logo-->
          <img src="./logo_index.png" alt="" />
          <!--组件中的 属性绑定 和 v-model 必须要有对应的data成员支持配合-->
          <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
            <el-form-item prop="mobile">
              <el-input v-model="loginForm.mobile" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input v-model="loginForm.code" placeholder="请输入验证码"></el-input>
            </el-form-item>
            <el-form-item prop="xieyi">
              <el-checkbox v-model="loginForm.xieyi"></el-checkbox>
              <span>我已阅读并同意用户协议和隐私条款</span>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width:100%;" @click="login()">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
</template>

<script>
export default {

  methods: {
    a () { return 'abc' },
    // 管理员登录系统
    login () {
      console.log(this)
      console.log(this.loginForm)
      console.log(this.a())
      // this:VueComponent对象，本身有继承Vue对象
      // this可以访问本身组件的成员(data/methods)
      // 对当前el-form表单进行校验
      this.$refs.loginFormRef.validate(valid => {
        // valid：true  校验成功
        // valid: false 校验失败
        if (valid) {
          // 路由编程导航
          this.$router.push({ name: 'home' })
        }
      })
    }
  },
  data () {
    var checkMobile = function (rule, value, callback) {
      // value:被校验的数据
      // callback：回调函数，无论校验成功与否，该函数都需要调用
      // 通过正则校验手机号码
      // 数字、11位、1开头、第2位是3/5/6/7/8/9
      var reg = /^1[356789]\d{9}$/
      // 校验
      if (!reg.test(value)) {
        // 失败
        return callback(new Error('手机号码格式不正确！'))
      }
      callback()
    }
    var checkXieyi = function (rule, value, callback) {
      if (Number(value) === 0) {
        // 没有勾选协议，就报错
        return callback(new Error('请遵守协议！'))
      }
      callback()
    }
    return {
      // 表单数据对象
      loginForm: {
        mobile: '',
        code: '',
        xieyi: false
      },
      loginFormRules: {
        // 校验名称(来自表单对象的成员名字)
        mobile: [
          // 具体校验规则
          // { required: true必填, message: 校验错误提示, trigger: 校验触发机制blur / change }
          { required: true, message: '手机号码必填', trigger: 'blur' },
          // 制作第2个校验规则，并且是自定义的
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '校验码必填', trigger: 'blur' }
        ],
        xieyi: [
          // 布尔值 需要通过自定义方式实现校验
          { validator: checkXieyi }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container{
  height:100%;
  background-color: gray;
  display:flex;
  justify-content: center;
  align-items: center;
  .login-box{
    width:410px;
    height:345px;
    background-color: #fff;
    display:flex;
    justify-content: center;
    .el-form{
      width:100%;
    }
    .box-trans{
      width:75%;
      text-align:center;
      img{
        width:60%;
        margin:20px 0;
      }
    }
  }
}
</style>
