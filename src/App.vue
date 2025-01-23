<template>
  <div id="app">
    <!-- Vue Router가 지정한 페이지 컴포넌트를 여기 렌더링 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App' // 메인 앱 컴포넌트 이름
};
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif; /* 앱 전체 폰트 설정 */
  background-color: #f9f9f9; /* 배경색 설정 */
}
</style>

<!--
설명:
    App.vue는 애플리케이션의 루트 컴포넌트입니다.
    router-view를 사용하여 라우터에서 지정된 컴포넌트를 표시합니다.
-->