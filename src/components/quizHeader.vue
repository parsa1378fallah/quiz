<script setup>
const {curentQuestion} = defineProps(['curentQuestion'])
</script>
<template>
    <header class="header">
        <h4>سوال {{curentQuestion}}/3</h4>
        <div class="bar">
            <div class="completion" :style="{'width' : `${(curentQuestion)*100/3}%`}"></div>
        </div>
    </header>    
</template>
<style scoped>
.header{margin: 20px 0 0 0;}
.header h4{font-size: 20px;}
.bar
{
    width : 300px;
    height : 50px;
    border : 3px solid bisque;
}
.completion
{
   height : 100%;
   background-color: aqua;
}
</style>