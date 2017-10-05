<template>
    <nav class="main-menu">
        <ul class="nav-bar">
            <li class="nav-bar-item"><router-link to="/">Home</router-link></li>
            <li class="nav-bar-item right"><router-link to="dan">Dan</router-link></li>
            <li class="nav-bar-item right"><router-link to="jon">Jon</router-link></li>
            <li class="nav-bar-item right"><router-link to="sean">Sean</router-link></li>
            <li class="nav-bar-item right"><router-link to="pho">Pho</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            message: ''
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main-menu{
    font-size: 24px;
    padding-bottom: 20px;
}

.nav-bar { 
    list-style:none; 
    margin-top: 30px; 
}

.nav-bar-item {
    display:inline; 
    padding:0 20px; 
}

.nav-bar-item a {
    text-decoration: none;
    text-transform: uppercase;
    color: #333;
    text-shadow: 1px 1px 1px #ccc;
}

.right {
    float: right;
}

</style>
