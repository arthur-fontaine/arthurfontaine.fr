<script>
  import gsap from "gsap"

  let cursor

  document.body.addEventListener("mousemove", onMouseMove)

  function onMouseMove(e) {
    gsap.to(cursor, {
      duration: 0.1,
      x: e.pageX - 5,
      y: e.pageY - 7
    })
  }
</script>

<div class="cursor" bind:this={cursor}>
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" viewBox="0 0 12 17" fill="none">
    <path d="M0.306871 16.5408L0.306912 1.53363L10.6219 12.434L0.306871 16.5408Z" />
  </svg>
</div>

<style lang="scss">
  @import "src/styles/colors";

  :global(*) {
    cursor: none !important;
  }

  .cursor {
    :global(&.is-mobile) {
      display: none;
    }

    pointer-events: none;
    position: fixed;
    z-index: 9998;

    svg {
      position: fixed;
      z-index: 9998;

      top: 0;
      left: 0;

      width: 24px;
      height: 34px;

      path {
        fill: var(--cursor-color, $black);
        stroke: var(--cursor-stroke-color, $white);
        stroke-width: 1px;
      }
    }
  }
</style>
