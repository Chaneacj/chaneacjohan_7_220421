<template>
  <div>
    <Nav />
    <div class="container-md">
     <createPost />
      <Post />
       <Comment />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import createPost from "@/components/createPost.vue";
import Post from "@/components/Post.vue";
import Comment from "@/components/Comment.vue";


export default {
  name: "Feed",
  components: {
    Nav,
    createPost,
    Post,
    Comment,

  },
};
</script>

<style scoped lang="scss">
body {
  margin: 10%;
}
</style>
