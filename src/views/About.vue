<template>
  <div>
    <Header /> <!-- 헤더 컴포넌트 삽입 -->
    <main>
      <h2>About Us</h2>
      <p>This is a blog platform created with Vue.js.</p>
    </main>
    <Footer /> <!-- 푸터 컴포넌트 삽입 -->
  </div>
</template>

<script>
import Header from '../components/Header.vue'; // Header 컴포넌트 임포트
import Footer from '../components/Footer.vue'; // Footer 컴포넌트 임포트

export default {
  name: 'About',
  components: {
    Header, // Header 컴포넌트 등록
    Footer  // Footer 컴포넌트 등록
  }
};
</script>

<style scoped>
main {
  text-align: center; /* 중앙 정렬 */
  padding: 2em; /* 패딩 추가 */
}
</style>

<!--
설명:
    About.vue는 소개 페이지를 담당하는 컴포넌트입니다.
    Header와 Footer 컴포넌트를 포함하며, 간단한 소개 텍스트를 표시합니다.
-->