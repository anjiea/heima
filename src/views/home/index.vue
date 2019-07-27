<template>
  <el-container>
        <el-aside :width="menuCollapse?'65px':'200px'">
      <el-menu
        background-color="#353B4E"
        text-color="#fff"
        active-text-color="#409EFC"
        :collapse= "menuCollapse"
        :collapse-transition="false"
      >
        <el-menu-item index="1" :style="{width:menuCollapse?'65px':'200px'}">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2" :style="{width:menuCollapse?'65px':'200px'}">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>内容管理</span>
          </template>

          <el-menu-item index="2-1">发布文章</el-menu-item>
          <el-menu-item index="2-2">文章列表</el-menu-item>
          <el-menu-item index="2-3">评论列表</el-menu-item>
          <el-menu-item index="2-4">素材管理</el-menu-item>

        </el-submenu>
        <el-menu-item index="3" :style="{width:menuCollapse?'65px':'200px'}">
          <i class="el-icon-menu"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="4" :style="{width:menuCollapse?'65px':'200px'}">
          <i class="el-icon-setting"></i>
          <span slot="title">账户信息</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div class="youbian">
          <el-input placeholder="请输入搜索的文章"></el-input>
          <span>消息</span>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <img :src="photo" alt width="40" height="35" />
              {{name}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>git地址</el-dropdown-item>
              <!-- <el-button @click="logout()">退出</el-button>  退出事件ok -->
              <el-dropdown-item @click.native="logout()">退出</el-dropdown-item>
              <!-- 退出事件不ok -->
              <!-- 在根元素上设置事件监听原生事件，这时候可以选择使用on-native修饰符 -->
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="zuobian">
          <i
          :class="menuCollapse?'el-icon-s-unfold':'el-icon-s-fold'"
          style="font-size:25px;cursor:pointer;" @click="menuCollapse=!menuCollapse">
        </i>
          <span>江苏传智播客教育科技股份有限公司</span>
        </div>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return { menuCollapse: false
    }
  },
  methods: {
    // 退出系统
    logout () {
      this.$confirm('确认要退出系统么?', '退出', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 清除sessionStorage信息
          window.sessionStorage.clear()
          // 跳转到登录页面
          this.$router.push({ name: 'login' })
        })
        .catch(() => {})
    }
  },
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
  height: 100%;
  .el-aside {
    background-color: #323745;
  }
  .el-header {
    background-color: gray;
  }
  .el-main {
    background-color: #eee;
  }
  .el-header {
    background-color: #fff;
    .zuobian {
      width: 400px;
      height: 60px;
      line-height: 60px;
      float: left;
    }
    .youbian {
      width: 500px;
      height: 60px;
      float: right;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        width: 100px;
        margin: 0 10px;
        .el-dropdown {
          width: 100px;
        }
      }
    }
  }
}
</style>
