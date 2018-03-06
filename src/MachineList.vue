<template>
    <h1>liste des machines</h1>
    
</template>

<script>
    export default {
        name: "machine-list.vue",
        data() {
            return {


            }
        },
        methods: {
            onMachinesListClick: function(){
                window.alert('vous êts bien sur la listes des machines!!')
            },
            onMapClick: function () {
                window.alert('vous êts bien sur la carte des machines!!')

            }
        }
    }
</script>

<style scoped>

</style>