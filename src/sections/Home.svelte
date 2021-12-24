<script>
    import Header from "../components/Header.svelte";
    import BackgroundTextRow from "../components/BackgroundTextRow.svelte";
    import {onMount} from "svelte";
    import anime from "animejs";

    let portrait;

    onMount(() => {
        document.querySelector('main.app').addEventListener('scrollprogress', (e) => {
            const pixelScrolled = e.target.scrollProgress * e.target.offsetHeight - window.innerHeight;

            anime({
                targets: portrait,
                duration: 10,
                translateX: '-50%',
                translateY: `${-portrait.getAttribute('data-parallax-amplitude') * pixelScrolled}px`,
                easing: 'linear'
            });
        });
    });
</script>

<section class="home">
    <Header />
    <BackgroundTextRow text="Arthur Fontaine" />
    <img src="assets/png/portrait.png" alt="" bind:this={portrait} data-parallax-amplitude="0">
</section>

<style lang="scss">
    .home {
      position: relative;
      overflow: hidden;
      height: 100vh;
      max-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      img {
        position: relative;
        z-index: 2;

        width: 50vw;
        height: auto;

        :global(&.is-mobile) {
          width: 80vw!important;
        }

        left: 50%;
        transform: translateX(-50%);
      }
    }
</style>
