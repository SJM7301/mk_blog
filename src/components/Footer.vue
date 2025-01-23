<template>
  <footer>
    <p>© 2025 Note Box. All rights reserved.</p> <!-- 저작권 정보 -->
  </footer>
</template>

<script>
export default {
  name: "Footer" // 컴포넌트 이름
};
</script>

<style scoped>
footer {
  background-color: #333; /* 푸터 배경색 */
  color: white; /* 푸터 텍스트 색상 */
  padding: 1em; /* 패딩 추가 */
  position: fixed; /* 고정된 푸터 */
  bottom: 0; /* 화면 하단에 고정 */
  width: 100%; /* 화면 너비 100% */
}
</style>

<!--
  설명:
      Footer.vue는 푸터 부분을 담당하는 컴포넌트입니다.
      화면 하단에 고정된 푸터로, 저작권 정보를 표시합니다.
-->