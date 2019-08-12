<template>
    <el-card class="box-card2">
        <div slot="header" class="cleaefix">
            <span>账户信息</span>
        </div>
        <el-row :gutter="20">
            <el-col :span="8">
                    <!--  -->
                    <el-form ref="editFromRef" :v-model="editForm">
                    <el-form-item label="用户名">
                        <el-input v-model="editForm.name"></el-input>
                    </el-form-item>
                    <!--  -->
                    <el-form-item label="手机号码">
                        <el-input v-model="editForm.moblie" disabled=""></el-input>
                    </el-form-item>
                    <!--  -->
                    <el-form-item label="简介">
                        <el-input v-model="editForm.intro" type="textarea"></el-input>
                    </el-form-item>
                    <!--  -->
                    <el-form-item label="邮箱">
                        <el-input v-model="editForm.email"></el-input>
                    </el-form-item>
                    <!--  -->
                <el-form-item>
                        <el-button type="primary">更新账户</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="4">
                <img src="../../assets/logo.png" alt="没有图像"  width="220" height="220"/>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
  created () {
    this.getAccountInfo()
  },
  methods: {
    getAccountInfo () {
      var pro = this.$http.get('/user/profile')
      pro
        .then(result => {
        // 把获得好的账户信息赋予给editForm
          this.editForm = result.data.data
        })
        .catch(err => {
          return this.$message.error('获取账户错误信息' + err)
        })
    }
  },
  data () {
    return {
      editForm: {
        name: '',
        intro: '',
        email: ''
      }
    }
  }
}
</script>

<style>

</style>
