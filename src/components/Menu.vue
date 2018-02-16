<template>
    <td v-if="menu" :class="getActive(menu.url)">
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
  methods: {
      getActive: function(url){
        if(url==location.href)
            return "active"
        else return ""
      }
  },
  props: ['menu', 'num']
}
</script>
