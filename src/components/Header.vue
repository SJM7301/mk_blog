<template>
  <header>
    <h1>Note Box</h1>
    <!-- 네비게이션 바 -->
    <nav>
      <ul>
        <li><router-link to="/">홈</router-link></li> <!-- 홈으로 이동 -->
        <li><router-link to="/about">소개</router-link></li> <!-- 소개 페이지로 이동 -->
        <li><router-link to="/contact">연락처</router-link></li> <!-- 연락처 페이지로 이동 -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header" // 컴포넌트 이름
};
</script>

<style scoped>
header {
  background-color: #333; /* 헤더 배경색 */
  color: white; /* 헤더 텍스트 색상 */
  padding: 1em; /* 패딩 추가 */
}

nav ul {
  list-style: none; /* 리스트 스타일 제거 */
  display: flex; /* 가로로 나열 */
  gap: 1em; /* 항목 간 간격 설정 */
}

nav ul li a {
  color: white; /* 링크 색상 */
}
</style>

<!--
  설명:
      Header.vue는 헤더 부분을 담당하는 컴포넌트입니다.
      네비게이션 링크를 클릭하면 Vue Router를 통해 다른 페이지로 이동합니다.
-->