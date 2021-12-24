<script>
    export let underline = false;
</script>

<p class="custom-text" style={underline ? 'text-decoration: underline' : ''}><slot></slot></p>

<style lang="scss">
  @import "src/styles/colors";

    .custom-text {
      font-size: 1.1rem;
      font-weight: 400;
      margin: 0 0 1.1rem;
      color: $white;
    }
</style>
