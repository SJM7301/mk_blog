import { createApp } from 'vue';
import App from './App.vue'; // 메인 컴포넌트 임포트
import router from './router'; // Vue Router 임포트
import './assets/styles/main.css'; // 전역 스타일 임포트

// Vue 애플리케이션 생성 및 마운트
createApp(App)
  .use(router) // 라우터 사용
  .mount('#app'); // #app에 Vue 앱 마운트

/*
설명:
    main.js는 Vue.js 애플리케이션의 진입점입니다.
    App.vue를 사용해 Vue 애플리케이션을 생성하고, router를 연결하여 #app ID를 가진 요소에 애플리케이션을 마운트합니다.
*/