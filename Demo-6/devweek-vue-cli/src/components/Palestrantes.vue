<template>
    <div>
        <ul>
            <li v-for="p in palestrantes">{{ p }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Palestrantes',
  data () {
    return {
      palestrantes: [
        'André Baltieri',
        'André Dias',
        'André Secco',
        'Angelo Belchior',
        'Dani Monteiro',
        'Douglas Romão',
        'Giovanni Bassi',
        'Jhonathan Souza',
        'Joel Rodrigues',
        'Leandro Domingues',
        'Luis Felipe',
        'Luiz Carlos Faria',
        'Mateus Rodrigues',
        'Renato Groffe',
        'Ricardo Serradas'
      ]
    }
  }
}
</script>

<style>
ul {
    list-style: none;
}
li {
    width: 300px;
    text-align: left;
    border-width: 1px 1px 1px 2px;
    border-style: solid;
    height: 30px;
    line-height: 30px;
    padding: 5px;
    margin-bottom: 5px;
}
</style>