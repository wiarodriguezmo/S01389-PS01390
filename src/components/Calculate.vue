<template>
    <button v-on:click="calculate" type="button">
        Calcular módulos
    </button>
</template>


<script>
    import Firebase from 'firebase'
    export default {
        name: 'Calculate',
        methods: {
            calculate: function () {
                var modules = [];
                var BreakException = {};
                try {
                    document.querySelectorAll("ul#courseMenuPalette_contents > li")
                        .forEach(function (element) {
                            if (element.className.search("subhead") != -1)
                                throw BreakException;
                            if (element.className.search("invisible") == -1 && element.className.search("divider") == -1) {
                                let tmp = {
                                    name: element.childNodes[1].childNodes[0].title,
                                    url: element.childNodes[1].href,
                                    creationDate: Firebase.database.ServerValue.TIMESTAMP
                                }
                                console.log(tmp);
                                modules.push(tmp);
                            }
                        });
                } catch (e) {
                    if (e !== BreakException) throw e;
                }
                var database = Firebase.database();
                database.ref('epide-geografia/itemManager/').set(modules);
            }
        }
    }
</script>
