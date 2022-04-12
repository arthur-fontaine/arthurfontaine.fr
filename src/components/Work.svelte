<script>
  export let title
  export let description
  export let githubLink
  export let demoLink
  export let color
  export let moreDescription
  export let techStack
</script>

<div class="work">
  <div class="work__left" style={`--color: ${color}`}>
    <h4 class="work__title">{title}</h4>

    <p class="work__description">{description}</p>

    <div class="work__links">
      <a href={githubLink} class="work__link">
        <img src="/assets/img/socials/github.svg" alt="Github" class="work__link-icon" />
      </a>

      <a href={demoLink} class="work__link">
        <img src="/assets/img/external-link.svg" alt="Demo" class="work__link-icon" />
      </a>
    </div>
  </div>

  <div class="work__right" style={`--color: ${color}`}>
    <p class="work__moreDescription">{moreDescription}</p>

    <div class="work__stack">
      {#each techStack as tech}
        <span class="work__stack-item">{tech}</span>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  @import "src/styles/colors";

  div.work {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;

    padding: 0.3rem;

    @media screen and (max-width: 425px) {
      flex-direction: column;
    }

    background-color: $white;

    div.work__left, div.work__right {
      flex: 1 0 50%;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2rem;

      min-width: min-content;
      width: 50%;

      @media screen and (max-width: 425px) {
        width: 100%;
      }

      padding: 1rem;
      box-sizing: border-box;
    }

    div.work__left {
      background-color: var(--color);

      * {
        color: $white;
      }

      h4,
      p {
        margin: 0;
      }

      h4.work__title {
        font-size: 1.8rem;
        font-weight: 500;
      }

      p.work__description {
        white-space: pre-wrap;

        font-size: 1.2rem;
        font-weight: 400;
      }

      div.work__links {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-end;
        gap: 0.6rem;

        height: -webkit-fill-available;

        img.work__link-icon {
          filter: invert(1);
        }
      }
    }

    div.work__right {
      color: $black;
      border: var(--color) solid 1px;

      p.work__moreDescription {
        margin: 0;
        white-space: pre-wrap;

        font-size: 1.1rem;
      }

      p.work__moreDescription,
      span.work__stack-item {
        font-weight: 300;
      }

      div.work__stack {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.375rem 0.75rem;

        font-size: 1rem;
        text-transform: uppercase;
      }
    }
  }
</style>
