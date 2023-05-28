<template>
  <div class="home">
    <Navbar />
  </div>
  <div class="background">
    <div class="container">
      <div class="row">
        <div class="article">
          <div class="card">
            <div class="home__body">
              <h5 class="home__title">Zašto koristiti Unity?</h5>
              <p class="home__text">
                Unity je alat koji omogućuje izvršavanje različitih vrsta
                zadataka povezanih s procesom proizvodnje igre.<br />
                Unity pruža 2D i 3D besplatnu platformu za izradu videoigara.<br />
              </p>
              <img
                src="../assets/home_image1.jpg"
                class="home__image"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div class="article">
          <div class="card">
            <div class="home__body">
              <h5 class="home__title">Što pokriva ovaj Unity tutorial?</h5>
              <ul class="home__text">
                U ovom Unity tutorialu bavit ćemo se kreiranjem jednostavne 2D
                platformer igre,a to pokriva:
                <li>Instalaciju "Unity" alata</li>
                <li>Kreiranje novog projekta</li>
                <li>"Import-anje Asset-a"</li>
                <li>Funkcionalnosti glavnog igrača i ostalih "gameObject-a"</li>
                <li>"Camera movement"</li>
                <li>"Scene loading"</li>
                <li>"Respawn Player"</li>
                <li>"Pause Menu"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <p>&copy; 2023,UNIPU,Student: Niko Novak</p>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.background {
  background-image: url("../assets/background_image.jpg");
  background-size: 100%;
  background-position: center;
  margin: 0px;
  padding: 0px;
}

.article {
  color: black;
  font-weight: bold;
}

.home__image {
  padding-bottom: 30px;
}

.home__title {
  font-size: 28px;
  padding: 6px;
}

.home__text {
  font-size: 22px;
  text-align: center;
  padding-bottom: 30px;
  list-style: none;
}

.html {
  background-color: beige;
  padding: 0px;
  margin: 0px;
}
</style>
