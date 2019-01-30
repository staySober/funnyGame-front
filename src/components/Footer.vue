<template>
    <div id="Footer">
        <p>
            {{headerMsg}}
        </p>
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
    height: 10%;
    background: #fbedfb; 
}

</style>