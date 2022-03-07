<script>
    export let download = false;
    export let href = '';
    export let style = '';

    export let onClick = () => {
        const aElement = document.createElement('a');
        aElement.setAttribute('href', href);
        aElement.setAttribute('target', '_blank');

        if (download) {
            aElement.setAttribute('download', '');
        }

        aElement.click();
    };
</script>

<div class="button" class:button--download={download} on:click={onClick} style={style}>
    <p><slot></slot></p>
    <div class="button__arrows">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right button__arrow--hover-modifier"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right button__arrow"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </div>
</div>

<style lang="scss">
  @import "src/styles/colors";
  @import "src/styles/variables";

    .button {
      color: $blue;
      //cursor: pointer;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      column-gap: 1rem;
      width: max-content;
      max-width: 100%;
      transition: $transition-duration $easing-function;

      :global(&.is-mobile) {
        margin-top: 1rem;
      }

      * {
        transition: $transition-duration $easing-function;
      }

      p {
        margin: 0!important;
      }

      &:hover {
        filter: brightness(125%);
      }

      .button__arrows {
        display: flex;
      }

      $translation: 50%;

      .button__arrow--hover-modifier {
        transform: translateX(-#{$translation});
        opacity: 0;
        position: absolute;
      }

      &:hover {
        .button__arrow {
          transform: translateX(#{$translation});
          opacity: 0;
        }

        .button__arrow--hover-modifier {
          transform: translateX(0);
          opacity: 1;
        }
      }

      //&--download {
      //  svg {
      //    transform: rotate(0);
      //  }
      //
      //  &:hover {
      //    svg {
      //      transform: rotate(90deg);
      //    }
      //  }
      //}
    }
</style>
