<template>
  <el-container>
      <!-- 头部导航 -->
    <el-aside width="200px"> Aside</el-aside>
     <el-header>
        <div class="youbian">
          <el-input placeholder="请输入搜索的文章"></el-input>
          <span>消息</span>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <img :src="photo" alt="" width="40" height="40"/>
              {{name}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>git地址</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="zuobian">
          <span>江苏传智播客教育科技股份有限公司</span>
        </div>
      </el-header>
      <!-- 头部导航完 -->
    <el-container>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  computed: {
    name () {
      return window.sessionStorage.getItem('name')
    },
    photo () {
      return window.sessionStorage.getItem('photo')
    }
  }
}
</script>

<style lang="less" scoped>
.el-container {
  height:100%;
  .el-aside {
    background-color: #323745;
  }
  .el-header{
    background-color: gray;
  }
  .el-main{
    background-color: #eee;
  }
   .el-header {
    background-color: #fff;
    .zuobian{
      width:400px;
      height:60px;
      line-height:60px;
      float: right;
    }
    .youbian{
      width:500px;
      height:60px;
      float:right;
      display:flex;
      justify-content: center;
      align-items: center;
      span{
        width:100px;
        margin:0 10px;
      }
      .el-dropdown{
        width:240px;
      }
    }
  }
}
</style>
