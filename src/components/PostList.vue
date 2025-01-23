<template>
  <div>
    <h2>Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  data() {
    return {
      posts: [
        { id: 1, title: 'First Post', content: 'This is the first post.' },
        { id: 2, title: 'Second Post', content: 'This is the second post.' }
      ]
    };
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
  color: #333;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #f1f1f1;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
}
h3 {
  margin: 0;
  color: #333;
}
</style>
