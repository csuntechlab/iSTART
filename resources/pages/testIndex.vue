<template>
    <div>
        <p>{{ note }}</p>
        <router-link to="/">Index</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            note: "Here's a note"
        }
    }
}
</script>
