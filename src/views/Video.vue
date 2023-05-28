<template>
  <div>
    <Navbar />
    <h1>Video poveznice</h1>
    <ul class="nav">
      <li class="nav__links">
        <button class="nav__button" @click="scrollTo('article1')">
          1. Instalacija alata "Unity"
        </button>
        <button class="nav__button" @click="scrollTo('article2')">
          2. Kako kreirati novi projekt?
        </button>
      </li>
    </ul>
    <main class="article">
      <section id="article1" class="article__text">
        <h1 class="article__title">1.Instalacija alata "Unity"</h1>
        <div class="article__video">
          <video controls width="960" height="100%">
            <source src="../assets/Instalacija_Unity.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p>
          Link za "Youtube":
          <a href="https://youtu.be/0ZgXiA_FVdE">Video01 - Instalacija Unity</a>
        </p>
        <p>
          Pošto je već instaliran "Unity" je prekinuta instalacija u videu.
          Instalacija "Unity Hub-a" pristupa se putem službene stranice
          "Unity-a":
          <a href="https://unity.com/download">UnityInstalacija</a>.
        </p>
      </section>
      <section id="article2" class="article__text">
        <h1 class="article__title">2. Kako kreirati novi projekt?</h1>
        <div class="article__video">
          <video controls width="960" height="100%">
            <source src="../assets/Kreiranje_projekta.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p>
          Link za "Youtube":
          <a href="https://youtu.be/On_9HU0uJRk"
            >Video02 - Kreiranje novog projekta</a
          >
        </p>
        <p>
          Nakon što se klikne potvrda za novi kreirani projekt, neko vrijeme će
          potrajati kompajliranje.
        </p>
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  methods: {
    scrollTo(articleId) {
      const article = document.getElementById(articleId);
      article.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.article__video {
  border: 2px black solid;
  width: 960px;
  height: 100%;
}
</style>
