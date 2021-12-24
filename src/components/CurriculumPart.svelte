<script>
    import {createEventDispatcher, onMount} from 'svelte';
    import convertRemToPixels from "../utils/convertRemToPixels";

    export let active = false;
    export let clickActive = true;

    let bar;
    let barWidth;
    let barHeight;

    const dispatch = createEventDispatcher();

    function changeActive() {
        if (clickActive) {
            active = !active;
            dispatch('changeActive', {active, element: self});
        }
    }

    function getBorderWidth() {
        const stroke = bar ? bar.querySelector('.curriculum-part__stroke') : undefined;
        const borderWidth = stroke ? getComputedStyle(stroke)?.borderWidth?.replace('px', '') : undefined;
        return borderWidth ? parseInt(borderWidth) * 2 : 16;
    }

    onMount(() => {
        const hidden_descriptions = document.querySelectorAll('.curriculum-part__description--hidden');

        hidden_descriptions.forEach(description => {
            description.style.display = 'none';
        });
    });
</script>

<div class="curriculum-part">
    <div class="curriculum-part__bar"
         class:curriculum-part__bar--is-active={active}
         class:curriculum-part__bar--is-inactive={!active}
         on:click={changeActive}
         bind:this={bar}
         bind:offsetHeight={barHeight}
         bind:offsetWidth={barWidth}
    >
        <div class="curriculum-part__circle"></div>
        <div class="curriculum-part__stroke" style={`transform: scaleY(${getBorderWidth() * 2 / barHeight + 1})`}></div>
    </div>
    <div class="curriculum-part__description" class:curriculum-part__description--hidden={!active}>
        <slot></slot>
    </div>
</div>

<style lang="scss">
  @import 'src/styles/variables';
  @import "src/styles/colors";

  .curriculum-part {
    display: flex;
    column-gap: $padding-base;

    &__circle, &__stroke {
      -webkit-transition: border-color $transition-duration $easing-function;
      -moz-transition: border-color $transition-duration $easing-function;
      -o-transition: border-color $transition-duration $easing-function;
      transition: border-color $transition-duration $easing-function;
    }

    &__bar {
      display: flex;
      flex-direction: column;
      align-items: center;

      --border-width: 0.75rem;

      &.curriculum-part__bar--is-inactive:hover {
        //cursor: pointer;
        .curriculum-part {
          &__circle, &__stroke {
            border-color: $white50;
          }
        }
      }

      &.curriculum-part__bar--is-active {
        .curriculum-part {
          &__circle, &__stroke {
            border-color: $white;
          }
        }
      }

      &.curriculum-part__bar--is-inactive {
        .curriculum-part {
          &__circle, &__stroke {
            border-color: $white20;
          }
        }
      }

      .curriculum-part {
        &__circle, &__stroke {
          border: $white var(--border-width, 1rem) solid;
        }

        &__stroke {
          border-width: calc(var(--border-width, 1rem) / 2);
          transform: translateY(calc(-1 * var(--border-width, 1rem)));
          background-color: $white;
          flex-grow: 1;
          min-height: 5rem;

          &:last-of-type {
            border-bottom-left-radius: calc(var(--border-width, 1rem) / 2);
            border-bottom-right-radius: calc(var(--border-width, 1rem) / 2);
          }
        }

        &__circle {
          height: 1.5rem;
          width: 1.5rem;
          aspect-ratio: 1;
          border-radius: 50%;
        }
      }
    }

    &__description {
      &--hidden {
        //display: none;
        //opacity: 0;
      }
    }
  }
</style>
