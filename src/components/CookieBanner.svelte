<script>
  export let onAccept = () => {
  }
  export let onDecline = () => {
  }

  let cookieBannerContainer

  const adaptMaxHeight = () => {
    const height = cookieBannerContainer.clientHeight
    cookieBannerContainer.style.maxHeight = `${height}px`
  }

  const hideBanner = () => {
    adaptMaxHeight()
    cookieBannerContainer.classList.add("hide")
  }

  const accept = () => {
    hideBanner()
    if (onAccept) {
      onAccept()
    }
  }

  const decline = () => {
    hideBanner()
    if (onDecline) {
      onDecline()
    }
  }
</script>

<div class="cookie-banner-container" bind:this={cookieBannerContainer} on:resize={adaptMaxHeight}>
  <div class="cookie-banner">
    <div class="cookie-banner__text">
      <h5>Hey!</h5>
      <p>
        I need <a href="/why-cookies">cookies</a>. Will you accept to give me some?
      </p>
    </div>
    <div class="cookie-banner__buttons">
      <button class="button cookie-banner__button--primary" on:click={accept}>Accept</button>
      <button class="button cookie-banner__button--secondary" on:click={decline}>Decline</button>
    </div>
  </div>
</div>

<style lang="scss">
  @import "src/styles/colors";

  @keyframes disappear {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(calc(-100% - 3rem));
    }

    100% {
      transform: translateX(calc(-100% - 3rem));
      max-height: 0;
    }
  }

  div.cookie-banner-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    min-width: 100%;
    max-width: min-content;

    position: relative;

    :global(&.hide) {
      animation: disappear 0.5s ease-in-out forwards;
    }

    div.cookie-banner {
      background-color: $white;

      padding: 1rem;
      margin-top: 3rem;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      &, a {
        color: $black;
      }

      h5 {
        font-size: 1.5rem;
        margin: 0;
      }

      div.cookie-banner__buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        width: min-content;

        button {
          outline: none;
          border: none;
          background: none;

          font-family: inherit;

          cursor: pointer;
        }

        button.cookie-banner__button--primary {
          background-color: $black;
          color: $white;

          padding: 0.5rem 1rem;
        }
      }
    }
  }
</style>
