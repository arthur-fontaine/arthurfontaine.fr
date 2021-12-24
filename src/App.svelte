<script>
    import luge from '@waaark/luge';
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
    import Home from "./sections/Home.svelte";
    import {onDestroy, onMount} from "svelte";
    import anime from "animejs/lib/anime.es.js";
    import AboutMe from "./sections/AboutMe.svelte";
    import Projects from "./sections/Projects.svelte";
    import Contact from "./sections/Contact.svelte";
    import Cursor from "./components/Cursor.svelte";

    onDestroy(() => {
        luge.lifecycle.refresh();
    });

    onMount(() => {
        document.querySelector('main.app').style.opacity = 0;

        if (document.querySelector('html').classList.contains('is-mobile'))
            document.querySelectorAll('*').forEach(el => {
                el.classList.add('is-mobile');
            });
    });

    let startLoading = undefined;
    let animationDuration = undefined;

    document.body.classList.add('loading');

    onload = () => {
        document.body.classList.remove('loading');

        const next = () => {
            anime({
                targets: document.querySelector('.preloader'),
                opacity: 0,
                duration: 1000,
                easing: 'easeInOutQuad',
                complete: () => {
                    document.body.removeChild(document.querySelector('.preloader'));
                }
            });

            anime({
                targets: document.querySelector('main.app'),
                opacity: 1,
                duration: 1000,
                easing: 'easeInOutQuad'
            });

            luge.scrollobserver.add(document.querySelector('main.app'));
        }

        if (startLoading && animationDuration) {
            let animationStartedFrom = (Date.now() - startLoading.now()) / 1000;
            let waitUntilAnimationCycle = animationStartedFrom % animationDuration;

            setTimeout(next, waitUntilAnimationCycle * 1000);
        } else {
            next();
        }
    };
</script>

<div class="preloader">
    <LottiePlayer
        src="/assets/lottie/logo-in-out.json"
        autoplay="{true}"
        loop="{true}"
        controls="{false}"
        renderer="svg"
        background="transparent"
        controlsLayout="{[]}"
        on:load={() => { startLoading = new Date(); }}
        style="position: relative;
               max-width: 16rem;
               margin: auto;
               top: 50%;
               transform: translateY(-50%);"
    />
</div>

<main class="app" data-lg-smooth>
    <Cursor/>
    <Home />
    <AboutMe />
    <Projects />
    <Contact />
</main>

<style lang="scss">
  @import "src/styles/colors";

  :global(.preloader) {
    position: absolute;
    opacity: 1;
    height: 100vh;
    width: 100vw;
    background: $black;
    z-index: 9999;
  }

  main.app, :global(body), :global(html) {
    background-color: $black;
  }

  :global(*) {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
