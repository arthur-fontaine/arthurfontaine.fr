<script>
    import Link from "./Link.svelte";
    import AsyncSvg from "./AsyncSvg.svelte";

    function scrollTo(element) {
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    }
</script>

<header>
    <div class="logo">
        <AsyncSvg src="assets/svg/logo.svg" hint="" />
    </div>
    <nav>
        <div class="section-links">
            <Link onClick={() => scrollTo(document.querySelector('#about-me'))}>About me</Link>
            <Link onClick={() => scrollTo(document.querySelector('#projects'))}>Projects</Link>
            <Link onClick={() => scrollTo(document.querySelector('#contact'))}>Contact</Link>
        </div>
    </nav>
    <div class="socials">
        <div on:click={() => {insights.track({ id: "link-clicked", parameters: { type:"social", social: "twitter" } })}}>
            <a href="https://twitter.com/f_arthr" target="_blank">
            <AsyncSvg src="assets/svg/icons/twitter.svg" hint="Twitter" fill="#E4E6E7" />
        </a></div>
        <div on:click={() => {insights.track({ id: "link-clicked", parameters: { type:"social", social: "linkedin" } })}}>
            <a href="https://www.linkedin.com/in/arthur-fontaine/" target="_blank">
            <AsyncSvg src="assets/svg/icons/linkedin.svg" hint="LinkedIn" fill="#E4E6E7" />
        </a></div>
        <div on:click={() => {insights.track({ id: "link-clicked", parameters: { type:"social", social: "github" } })}}>
            <a href="https://github.com/arthur-fontaine" target="_blank">
            <AsyncSvg src="assets/svg/icons/github.svg" hint="GitHub" fill="#E4E6E7" />
        </a></div>
    </div>
</header>

<style lang="scss">
  @import "src/styles/colors";

    header {
      background-color: $black;

      padding: 2rem;

      display: flex;
      flex-direction: row;
      align-items: center;
      column-gap: 4rem;

      position: relative;
      z-index: 1;

      margin-bottom: 10%;

      :global(&.is-mobile) {
        //flex-direction: column!important;
        //align-items: center!important;
        //row-gap: 2rem!important;
        //column-gap: 0!important;
        //padding: 0!important;
      }

      div.logo {
        :global(.async-svg) {
          height: 3rem;
          width: 3rem;
          aspect-ratio: 1;
        }

        :global(.async-svg path.c) {
          stroke: $white;
        }

        img {
          filter: invert(100%);
        }
      }

      nav {
        flex-grow: 1;

        div.section-links {
          column-gap: 3rem;
          display: flex;

          :global(&.is-mobile) {
            //flex-direction: column;
            //row-gap: 0.2rem;
            display: none!important;
          }
        }
      }

      div.socials {
        display: flex;
        column-gap: 1rem;

        :global(.async-svg) {
          height: 1.875rem;
          width: 1.875rem;
          aspect-ratio: 1;
        }

        :global(.async-svg svg) {
          //fill: $white;
        }

        :global(&.is-mobile) {
          //align-self: flex-end;
          //order: -1;
        }

        img {
          filter: invert(100%);
        }
      }
    }
</style>
