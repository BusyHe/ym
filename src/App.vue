<template>
    <a-layout class="main">
        <a-layout-sider class="main-sider">
            <div class="logo">
                <!--<img src="./assets/images/logo.png">-->
            </div>
            <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
                <a-menu-item key="1">
                    <a-icon type="user"/>
                    <span class="nav-text">nav 1</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout :style="{ marginLeft: '200px' }">
            <router-view/>
        </a-layout>
    </a-layout>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
    name: 'app',
    data () {
        return {
            zh_CN
        }
    },
    components: {}
}
</script>

<style lang="stylus">
    .main
        &-sider
            height: 100vh
            position: fixed
            top 0
            left: 0
            overflow: auto

        .logo
            width 100%
            text-align center
            margin 80px 0 40px 0

</style>
