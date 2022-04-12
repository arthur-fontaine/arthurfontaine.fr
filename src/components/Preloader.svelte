<script>
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import anime from "animejs";
  import luge from "@waaark/luge";

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
      setTimeout(next, 1000);
    }
  };
</script>

<div class="preloader">
  <LottiePlayer
    src="assets/lottie/logo-in-out.json"
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
