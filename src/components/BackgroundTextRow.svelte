<script>
    import anime from 'animejs/lib/anime.es.js';

    import measureElement from "../utils/measureElement";
    import randomNumber from "../utils/randomNumber";
    import {onMount} from "svelte";

    export let text;

    let _textMotions = []
    $: textMotions = _textMotions.filter(Boolean)

    onMount(() => {
        document.querySelector('main.app').addEventListener('scrollprogress', (e) => {
            const viewportProgress = e.target.scrollProgress * e.target.offsetHeight / window.innerHeight - 1;

            textMotions.forEach((textMotion) => {
                anime({
                    targets: textMotion,
                    duration: 10,
                    translateX: `${textMotion.getAttribute('data-moving-direction') * textMotion.getAttribute('data-motion-resistance') * viewportProgress * 100}vh`,
                    easing: 'linear'
                });
            })
        });
    });

    const fontSize = '5rem';

    const textStyles = {
        normal: {
            fontFamily: '"Roboto Condensed", sans-serif',
            fontSize,
            fontWeight: "700",
        },
        condensed: {
            fontFamily: '"Roboto", sans-serif',
            fontSize,
            fontWeight: "300",
        },
    };

    onMount(() => {
        document.querySelector('.background').style.setProperty('--font-size', fontSize);
    })

    const condensedP = document.createElement("p");
    condensedP.innerText = text;
    const condensedPSize = measureElement(condensedP, textStyles.condensed);

    const normalP = document.createElement("p");
    normalP.innerText = text;
    const normalPSize = measureElement(normalP, textStyles.normal);

    const pSize = condensedPSize.width > normalPSize.width ? condensedPSize : normalPSize;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const numberOfLines = Math.ceil(screenHeight / pSize.height);
    const numberOfTextInARow = Math.ceil(screenWidth / pSize.width);
</script>

<div class="background">
    {#each Array(numberOfLines * 2) as _, i}
        <div class="background__text-moving"
             bind:this={_textMotions[i]}
             data-moving-direction="{randomNumber(0, 1, 0) === 0 ? -1 : 1}"
             data-motion-resistance="{randomNumber(0.25, 1, 2)}"
             style={`animation-duration: ${randomNumber(60, 120, 0)}s`}>
            <div class="background__text-row" style={`transform: translateX(${randomNumber(0, 1, 0) === 0 ? randomNumber(-25, -1, 1) - 25 : randomNumber(1, 25, 1) + 25}vw)`}>
                {#each Array(numberOfTextInARow * 3) as _, j}
                    <p class="background__text {j % 2 ? 'background__text--condensed' : 'background__text--normal'}">{text}</p>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
  @import "src/styles/colors";

  .background {
    position: absolute;
    z-index: 0;

    //top: 0;
    transform: translateX(-50%);
    width: max-content;

    .background__text-row {
      display: flex;
      column-gap: 1rem;

      .background__text {
        color: $white;
        font-size: var(--font-size, 3rem);
        margin: 0;
        flex-shrink: 0;
        text-transform: uppercase;
        opacity: 20%;

        &--condensed {
          font-weight: 700;
        }

        &--normal {
          font-weight: 300;
        }
      }
    }

    .background__text-moving {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
</style>
