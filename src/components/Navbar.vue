<template>
  <div class="navbar">
    <button class="navbar__button" @click="navigateToHome">
      Home stranica
    </button>
    <button class="navbar__button" @click="navigateToSkripta">
      Nauči uz skripte!
    </button>
    <button class="navbar__button" @click="navigateToVideo">
      Nauči uz video sadržaj!
    </button>
  </div>
  <div class="navbar__title">
    <h1>Unity Tutorial!</h1>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push("/");
    },
    navigateToSkripta() {
      this.$router.push("/skripta");
    },
    navigateToVideo() {
      this.$router.push("/video");
    },
  },
};
</script>

<style>
.navbar {
  background-color: rgb(27, 177, 195);
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.navbar__button {
  background-color: rgb(220, 215, 84);
  color: rgb(4, 4, 4);
  padding: 10px 20px;
  border-radius: 25px;
  border: none;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.navbar__button:hover {
  background-color: #62f34c;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  transform: translateY(0.2px);
}

.navbar__title {
  font-size: 40px;
  margin: 200px;
}
</style>
