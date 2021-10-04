<template>
  <div class="card mb-3" style="max-width: 540px">
    <div class="card-body">
      <div class="container">
        <div class="row card-info">
          <p class="col-3 card-text">
            <small class="text-muted"
              ><i class="far fa-calendar"></i
              >{{ dateFormat(post.createdAt) }}</small
            >
          </p>
          <p class="col-5 card-text">
            <small class="text-muted"
              ><i class="far fa-user"></i>{{ post.firstName }}</small
            >
          </p>
          <p class="col-2 card-text">
            <small >
              modifier
              >
            </small>
          </p>
          <p class="col-2 card-text">
            <small v-on:click="deletePost(post.id)">Supprimer</small>
          </p>
        </div>
      </div>
       <form>
        <label>Modifier votre message</label>
        <textarea
          v-model="contentmodifyPost"
          :placeholder="post.content"
          type="text"
          id="content"
          required
          aria-label="Entrez votre Message"
        >
        Entrez votre Message
        </textarea>

        <label class="custom-file-label" for="image">Choisir une image</label>
        <input
              @change="getFile"
              name="image"
              type="file"
              ref="fileUpload"
              accept="image"
              aria-label="Sélectionner un fichier"
              id="file"
            />
        <input v-on:click="modifyPost(post.id)" type="submit" id="submit" value="Modifier" />
      </form> 
      <h5 class="card-title">{{ post.title }}</h5>
      <div class="card-img" v-if="post.imagePost">
        <img :src="post.imagePost" class="rounded img-fluid" alt="..." />
      </div>
      <p class="card-text">
        {{ post.content }}
      </p>
      <hr class="solid" />
      <div>
        <form>
          <!--          <textarea
            class="form-control"
            v-model="commentTitle"
            type="text"
            placeholder="Commenter le message"
            id="commentTitle"
            required
            aria-label="Entrez le titre de votre article"
          /> -->
          <input type="submit" id="submit" value="Publier" />
        </form>
      </div>
      <hr class="solid" />
      <div
        class="displayComment"
        v-for="comment in comments"
        :key="comment.commentId"
      >
        <div
          v-bind:showComment="showComment"
          v-if="showComment && post.id == comment.postId"
        >
          <div class="row">
            <div class="col-md-2">
              <img class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-10">
              <div class="card-body">
                <div class="row card-info">
                  <p class="col-9 card-text">
                    <small class="text-muted">{{
                      dateFormat(comment.createdAt)
                    }}</small>
                  </p>
                  <p class="col-3 card-text">
                    <small class="text-muted">Supprimer</small>
                  </p>
                  <h6 class="card-title">Name</h6>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="card-text">
              {{ comment.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import moment from "moment";

export default {
  name: "post",
  components: {},

  data: () => {
    return {
      contentmodifyPost: "",
      comment: {
        content: "",
      },
      comments: [],
    };
  },
  props: ["post"],
  methods: {
    dateFormat(date) {
      if (date) {
        return moment(String(date)).format("DD/MM/YYYY");
      }
    },

    getFile() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },

    // Permet d'afficher le champ pour modifier un message
    displayModifyPost(id) {
      const postId = id;
      let contentPost = document.querySelector('p[contentPostId="' + id + '"]');
      let contentPostId = contentPost.getAttribute("contentPostId");
      if (
        postId == contentPostId &&
        this.showInputModify == false
      ) {
        contentPost.style.display = "none";
        this.showInputModify = !this.showInputModify;
        let imgPost = document.querySelector('img[imgPostId="' + id + '"]');
        let imgPostId = imgPost.getAttribute("imgPostId");
        if (postId == imgPostId) {
          imgPost.style.display = "none";
        }
      } else if (this.showInputModify == true) {
        contentPost.style.display = "block";
        let imgPost = document.querySelector('img[imgPostId="' + id + '"]');
        imgPost.style.display = "block";
        this.showInputModify = !this.showInputModify;
      }
    },
    // Permet de modifier un message
    modifyPost(id) {
      const postId = id;
      const formData = new FormData();
      formData.append("content", this.contentmodifyPost);
      formData.append("image", this.imagePost);

      axios
        .put("http://localhost:3000/api/post/update/" + postId, formData, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          //window.location.reload();
        })
        .catch((error) => {
          const msgerror = error.response.data;
          this.notyf.error(msgerror.error);
        });
    },


    

    deletePost(id) {
      const postId = id;
      axios
        .delete("http://localhost:3000/api/post/" + postId, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          this.displayPost();
        })
        .catch((error) => {
          const msgerror = error.response.data;
          this.notyf.error(msgerror.error);
        });
    },
  },
  

  // Permet de créer un nouveau commentaire
  createComment(id) {
    const postId = id;
    axios
      .post(
        "http://localhost:3000/api/comment/" + postId,
        {
          content: this.contentComment,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        const msgerror = error.response.data;
        this.notyf.error(msgerror.error);
      });
  },

  // Permet d'afficher les commentaires d'un message
  displayComment(id) {
    this.showComment = !this.showComment;
    const postId = id;

    axios
      .get("http://localhost:3000/api/comment/" + postId, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        this.comments = response.data;
      })
      .catch((error) => {
        const msgerror = error.response.data;
        this.notyf.error(msgerror.error);
      });
  },
};
</script>

<style scoped lang="scss">
.card {
  margin: auto;

  .card-title {
    margin-bottom: 11px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 34px;
    color: #1a1a1a;
  }

  .card-text {
    margin-bottom: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.3125px;
    color: #595959;
  }

  .card-info {
    .card-text {
      color: #595959;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      letter-spacing: 0.583333px;
    }
  }

  form {
    h1 {
      margin-bottom: 11px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 48px;
      letter-spacing: 1.33333px;
      color: #1a1a1a;
    }

    h2 {
      margin-bottom: 4px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.583333px;
      text-transform: uppercase;
      color: #595959;
    }

    p {
      margin-bottom: 20px;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.3125px;
      color: #595959;
    }

    label {
      color: #595959;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      letter-spacing: 0.583333px;
    }

    input {
      font-size: 14px;
      letter-spacing: 0.25px;
      padding: 0.4em 1em;
      width: -moz-available;
      width: -webkit-fill-available;
      width: fill-available;
      margin: 2px auto 10px;
      color: #ededed;
      line-height: 20px;
      border-radius: 8px;
      border: 2px solid #ededed;
      background: #ffffff;
      &:focus {
        border: 4px solid #0764e3;
      }
    }

    #content {
      font-size: 10px;
      letter-spacing: 0.18px;
      padding: 0.2em 0.8em;
      width: -moz-available;
      width: -webkit-fill-available;
      width: fill-available;
      margin: 1px auto 7px;
      color: #0764e3;
      line-height: 20px;
      border-radius: 6px;
      border: 2px solid #0764e3;
      background: #ffffff;
    }

    #submit {
      max-width: 200px;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      background: #ffffff;
      color: #0764e3;
      border: none;
      border: 2px solid #0764e3;
      letter-spacing: 0.2px;
      margin-top: 8px;
    }
  }
}
</style>