<script>
    import CustomTitle from "../components/CustomTitle.svelte";
    import Link from "../components/Link.svelte";
</script>

<section id="contact">
    <header>
        <CustomTitle>Contact</CustomTitle>
    </header>

    <div class="contact__links">
        <ul>
            <li><Link
                    href="mailto:0arthur.fontaine@gmail.com"
                    sendEvent="link-clicked" eventType="contact">0arthur.fontaine@gmail.com</Link></li>
            <li><Link
                    href="tel:+33771715509"
                    sendEvent="link-clicked" eventType="contact">+33 7 71 71 55 09</Link></li>
            <li class="contact__link-separator"></li>
            <li><Link
                    href="https://twitter.com/f_arthr"
                    sendEvent="link-clicked" eventType="contact">https://twitter.com/f_arthr</Link></li>
            <li><Link
                    href="https://t.me/arthur-fontaine"
                    sendEvent="link-clicked" eventType="contact">https://t.me/arthur-fontaine</Link></li>
        </ul>
    </div>
</section>

<style lang="scss">
  @import "src/styles/colors";
  @import "src/styles/variables";

  section#contact {
    display: flex;
    flex-direction: column;
    padding: $padding-base;
    height: 100vh;
    box-sizing: border-box;

    .contact__links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      flex-grow: 1;

      :global(*) {
        color: $white;
        font-size: 1.875rem!important;
        text-transform: none;
      }

      :global(*.is-mobile) {
        font-size: 1.1rem!important;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        max-width: 100%;

        li {
          margin-bottom: 1rem;
          max-width: 100%;

          :global(*) {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          :global(*.is-mobile) {
            margin-bottom: 0!important;
          }
        }

        li.contact__link-separator {
          margin: 0;
          height: 1.875rem;
        }
      }
    }
  }
</style>
