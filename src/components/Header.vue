<template>
    <div id="Header" >
        <p>
            {{headerMsg}}
        </p>
          <v-divider style="margin-top:-4px"></v-divider>
    </div>
</template>

<script>
module.exports = {
    data () {
        return {
            headerMsg: 'Funny Game! Enjoy it. '
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
    line-height:100px;
    margin: 0 auto;
}
#Header {
    height: 10%;
    background:#ef94ba; 
}
</style>