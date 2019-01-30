<template>
    <div id="Header" >
        <p>
            {{headerMsg}}
        </p>
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
    background: #BBE8F2; 
}
</style>