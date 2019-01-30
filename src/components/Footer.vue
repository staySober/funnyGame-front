<template>
    <div id="Footer">
        <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }} {{headerMsg}}</div>
        </v-footer>
    </div>
</template>

<script>
module.exports = {
    data () {
        return {
            headerMsg: 'copyRight @Sober. '
        }
    },
    methods: {
     
    }
}  
</script>

<style scoped>
div p{
    color: black;
    text-align: center;
    margin: 0 auto;
    line-height:100px;
}

#Footer {
    height: 8%;
}

</style>