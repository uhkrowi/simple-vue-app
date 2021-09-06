<template>
  <div>
    <p>Game List</p>

    <div class="container">
      <div>
        <GameContainer :category="'action'" :label="'Action'" />
      </div>
      <div>
        <GameContainer :category="'shooter'" :label="'Shooter'" />
      </div>
      <div>
        <GameContainer :category="'fantasy'" :label="'Fantasy'" />
      </div>
      <div>
        <GameContainer :category="'mmorpg'" :label="'MMORPG'" />
      </div>
    </div>
  </div>
</template>

<script>
import GameContainer from '@/components/ListOfGame.vue'

export default {
  components: {
    GameContainer
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.container > div {
  border: 1px black solid;
  padding: 10px;
  margin: 0px 10px;
}
</style>