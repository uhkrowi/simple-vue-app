<template>
  <div>
    <strong>List of game ({{ label }})</strong>
    <hr>
    <div>
      <div v-for="(game, index) in games" :key="index">
        {{ game.title }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    category: {
      type: String,
      default: 'shooter'
    },
    label: {
      type: String
    }
  },
  data() {
    return {
      games: []
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const data = await axios
      .get(`https://www.freetogame.com/api/games?category=${this.category}`)
      this.games = data.data.slice(0, 9)
    }
  }
}
</script>