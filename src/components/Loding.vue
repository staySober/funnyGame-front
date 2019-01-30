<template>
  <div class="text-xs-center" v-if= 'isShow'>
    <v-progress-circular
      :rotate="180"
      :size="100"
      :width="15"
      :value="value"
      color="pink"
    >
      {{ value }}
    </v-progress-circular>
  </div>
</template>

<script>
   export default {
    props: ['isStart'],
    data () {
      return {
        interval: {},
        value: 0,
        isShow:true,
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
            console.log(this.isStart);
            if (this.isStart) {
                if (this.value === 100) {
                    this.isShow = false;
                    clearInterval(this.interval);
                    return
                }
                this.value += 20
            }
      }, 300)
    }
  }
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>