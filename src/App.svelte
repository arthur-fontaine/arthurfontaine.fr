<script>
  import { onDestroy, onMount } from "svelte"

  import posthog from "posthog-js"
  import Preloader from "./components/Preloader.svelte"
  import Work from "./components/Work.svelte"
  import works from "./resources/works"
  import CookieBanner from "./components/CookieBanner.svelte"
  import Cursor from "./components/Cursor.svelte"

  let cookiesAllowed = location.hostname === "arthurfontaine.fr" ? null : false

  const allowCookies = () => {
    if (location.hostname === "arthurfontaine.fr" || location.hostname === "arthur-fontaine.github.io") {
      posthog.init("phc_EWKjn4IlXBODRPmtD0fC1Qsb9n88M1ns5lKd6FK5L00", { api_host: "https://app.posthog.com" })
    }
  }

  onDestroy(() => luge.lifecycle.refresh())

  onMount(() => {
    document.querySelector("main.app").style.opacity = 0

    if (document.querySelector("html").classList.contains("is-mobile"))
      document.querySelectorAll("*").forEach(el => {
        el.classList.add("is-mobile")
      })
  })
</script>

<Cursor />
<Preloader />

<aside>
  <h1>Arthur<br />Fontaine</h1>

  <div class="socials">
    <a href="https://github.com/arthur-fontaine">
      <img src="assets/img/socials/github.svg" alt="GitHub" />
    </a>

    <a href="https://www.linkedin.com/in/arthur-fontaine/">
      <img src="assets/img/socials/linkedin.svg" alt="LinkedIn" />
    </a>

    <a href="https://twitter.com/aarthurfontaine">
      <img src="assets/img/socials/twitter.svg" alt="Twitter" />
    </a>

    <a href="https://discord.com/users/570841288308686848">
      <img src="assets/img/socials/discord.svg" alt="Discord" />
    </a>
  </div>

  <div class="send-me">
    <h3>Send me a message!</h3>
    <a href="mailto:me@arthurfontaine.fr">
      me@arthurfontaine.fr
    </a>
  </div>

  <div class="expanded"></div>

  <footer>
    <div class="download-resume">
      <a href="resume.pdf" data-cursor-color="css-color">Download my resume</a>
    </div>

    {#if (cookiesAllowed === null)}
      <CookieBanner onAccept={allowCookies} />
    {/if}
  </footer>
</aside>

<main class="app">
  <div class="about-me">
    <h2>About me</h2>

    <p>
      I am Arthur, a french 18 years old autodidact full-stack developer currently living in Paris. I am currently
      studying data and IA at HETIC.
    </p>

    <p>
      Passionate about new technologies and imagining all sorts of things since I was young, my first computer and
      development when I was 12 years old changed a lot in my life. My creative mind was able to channel itself into
      putting some of my projects into action.
    </p>
  </div>

  <div class="my-works">
    <h2>My works</h2>

    {#each works as work}
      <Work title={work.title} description={work.description} githubLink={work.githubLink} demoLink={work.demoLink}
            color={work.color} moreDescription={work.moreDescription} techStack={work.techStack} />
    {/each}
  </div>

  <footer>
    <p>Developed by me ;)</p>
  </footer>
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

  main.app,
  :global(body),
  :global(html) {
    background-color: $black;
    color: $white;
  }

  :global(body),
  :global(html) {
    height: 100%;
  }

  :global(body) {
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  :global(h1),
  :global(h2),
  :global(h3) {
    margin: 0;
  }

  :global(h1) {
    font-size: 4rem;
    font-weight: 700;
  }

  :global(h2) {
    font-size: 2.2rem;
    font-weight: 500;
  }

  :global(h3) {
    font-size: 1.6rem;
    font-weight: 600;
  }

  :global(::-webkit-scrollbar) {
    width: 0.2rem;
  }

  :global(::-webkit-scrollbar-track) {
    background: $black;
  }

  :global(::-webkit-scrollbar-thumb) {
    background: $white;
    border-radius: 0;
  }

  aside {
    display: flex;
    flex-direction: column;

    padding: 3rem;
    gap: 3rem;

    @media screen and (max-width: 425px) {
      padding: 2rem;
      gap: 2rem;
    }

    box-sizing: border-box;

    width: fit-content;
    min-height: 100%;
    height: fit-content;

    overflow: hidden;

    div.socials {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 1.2rem;

      img {
        width: 32px;
        height: 32px;
        filter: invert(1);
      }
    }

    div.send-me {
      h3 {
        margin-bottom: 0.5rem;
      }

      a {
        font-size: 1.3rem;
        font-weight: 300;
        margin: 0;
        color: $white;
      }
    }

    div.expanded {
      visibility: hidden;
      height: -webkit-fill-available;
      flex-grow: 1;
    }

    footer {
      div.download-resume {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        width: fit-content;

        a {
          font-size: 1.3rem;
          font-weight: 400;
          margin: 0;
          color: $blue;
        }
      }
    }
  }

  main {
    flex: 1;

    padding: 3rem;
    box-sizing: border-box;

    @media screen and (max-width: 425px) {
      padding: 2rem;
    }

    min-height: 100%;
    height: fit-content;

    @media screen and (min-width: 768px) {
      max-height: 100%;
      overflow: auto;
    }

    div.about-me,
    div.my-works {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      margin-bottom: 3rem;

      @media screen and (max-width: 425px) {
        margin-bottom: 2rem;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    div.about-me {
      p {
        font-size: 1.1rem;
        font-weight: 300;
        margin: 0;
      }
    }

    footer {
      font-size: 1rem;
      font-weight: 300;
      text-align: right;

      p {
        margin: 0;
      }
    }
  }
</style>
