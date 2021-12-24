<h2 class="custom-title"><slot></slot></h2>

<style lang="scss">
  @import "src/styles/colors";

    .custom-title {
      font-size: 3.75rem;
      font-weight: bold;
      margin: 0 0 3.75rem;
      text-transform: uppercase;
      color: $white;

      :global(&.is-mobile) {
        font-size: 3rem!important;
        margin-bottom: 3rem!important;
      }
    }
</style>
