<script>
export default {
  created{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {

  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style lang="scss">
@import '@/style/main.scss';
</style>

