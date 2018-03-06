<template>
    <div id="app">
        <img src="http://vuejs.org/images/logo.png">
        <div>
        <button @click="onMachinesListClick">affiche moi ce putain de message d'alerte connard, merci</button>
        </div>
        <div>
            <button @click="onMapClick">affiche moi cette putain de carte  connard, merci</button>

            <div v-if="img.show">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwu0xIO9bn5T1ItgbobQH-0QkKuszmNJSfBxfkyv08YrsDohknQ" alt="carte">
            </div>
        </div>
        <h1>{{ msg }}</h1>
        <div>
            <h4>
                Cacher les machines éteintes
                <toggle-button :value="hideOffPercolateurs" @change="hideOffPercolateurs = !hideOffPercolateurs"/>
            </h4>
        </div>
        <hr>
        <ul>
            <!-- V-if peut contenir une règle avec un opérateur logique ou de comparaison -->
            <!-- https://www.w3schools.com/js/js_comparisons.asp -->
            <Perco v-for="perco in percolateurs"
                     :key="perco.id"
                     v-bind:percolprops="perco"
                     v-if="!hideOffPercolateurs || perco.isOn">
            </Perco>
        </ul>

        <!-- Formulaire d'ajout de machine -->
        <form @submit.prevent="addPerco" class="form">
            <input type="text" placeholder="Nom du percolateur" v-model="buffer.name">
            <select name="status" v-model="buffer.isOn">
                <option v-bind:value="true">ON</option>
                <option v-bind:value="false">OFF</option>
            </select>
            <input type="submit" value="Ajouter">
        </form>
    </div>

</template>

<script>
    export default {
        name: 'app',
        data() {


            return {
                img: {
                    show: true
                },
                hideOffPercolateurs: false,
                msg: 'Liste des Percos',
                // Cet objet nous sert de tampon avant d'ajouter un nouvel objet à "percolateurs"
                buffer: {
                    id: 3, name: 'Next perco name', isOn: true
                },
                percolateurs: [
                    {id: 1, name: 'Percolateur 1', isOn: true},
                    {id: 2, name: 'Percolateur 2', isOn: false},
                    {id: 3, name: 'Percolateur 3', isOn: true}
                ]
            }
        },

        methods: {

            onMachinesListClick: function(){
                window.alert('vous êts bien sur la listes des machines!!')
            },
            onMapClick: function () {
                this.img.show = !this.img.show;

            },

            // Pousse un nouvel objet dans la collection machines
            addPerco: function (e) {
                this.buffer.id += 1;
                this.percolateurs.push({
                    id: this.buffer.id,
                    name: this.buffer.name,
                    isOn: this.buffer.isOn
                });
            }
        }
    }
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    img {
        width: 200px;
        height: 200px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
