import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // 홈 페이지 컴포넌트
import About from '../views/About.vue'; // 소개 페이지 컴포넌트
import Contact from '../views/Contact.vue'; // 연락처 페이지 컴포넌트

// 라우팅 설정
const routes = [
  { path: '/', component: Home },    // 홈 페이지 경로
  { path: '/about', component: About },  // 소개 페이지 경로
  { path: '/contact', component: Contact } // 연락처 페이지 경로
];

// Vue Router 설정
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router; // router 객체 내보내기

/*
설명:
    index.js는 Vue Router를 설정하는 파일입니다.
    각각의 경로에 해당하는 컴포넌트를 매핑하여 라우팅을 처리합니다.
*/