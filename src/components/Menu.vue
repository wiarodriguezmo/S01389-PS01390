<template>
    <td v-if="menu">
        <a class="tab-link" :href="menu.url">
            <div class="tab-number">
                <div>{{num}}</div>
            </div>
            <div class="title-tab">
                <h3>{{menu.name}}</h3>
            </div>
        </a>
    </td>
</template>

<script>
export default {
  name: 'Menu',
  props: ['menu', 'num']
//   data () {
//     return {
//       msg: ''
//     }
//   }
}
</script>
