<script>
    export let onClick;
    export let href;
    export let sendEvent = false;
    export let eventType = "link";

    function callback() {
        if (href) {
            if (sendEvent) {
                insights.track({
                        id: "link-clicked",
                        parameters: {
                            type: eventType,
                            url: href
                        }
                    });
            }

            const aElement = document.createElement('a');
            aElement.href = href;
            aElement.target = '_blank';
            aElement.click();
        } else if (onClick) {
            onClick();
        }
    }
</script>

<div class="links" on:click={callback}>
    <p class="link--hover-modifier"><slot></slot></p>
    <p class="link"><slot></slot></p>
</div>

<style lang="scss">
  @import "src/styles/colors";
  @import "src/styles/variables";

    .links {
      $translation: 50%;
      position: relative;
      width: max-content;

      p {
        //cursor: pointer;
        color: $white;
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 400;
        text-transform: capitalize;
        margin: 0;
        transition: $transition-duration $easing-function;
      }

      .link--hover-modifier {
        transform: translateY(-#{$translation});
        opacity: 0;
        position: absolute;
      }

      &:hover {
        .link {
          transform: translateY(#{$translation});
          opacity: 0;
        }

        .link--hover-modifier {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
</style>
