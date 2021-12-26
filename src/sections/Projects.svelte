<script>
    import CustomTitle from "../components/CustomTitle.svelte";
    import CustomButton from "../components/CustomButton.svelte";
    import {onMount} from "svelte";

    const projects = [
        {
            name: "HiberFile",
            description: "A free, open source and privacy friendly file host.",
            isInDevelopment: false,
            links: [
                {
                    name: "See the project",
                    url: "https://hiberfile.com",
                    mainCallToAction: true,
                    hoverTextColor: '#2D56D5'
                },
                {
                    name: "View on GitHub",
                    url: "https://github.com/hiberfile/hiberfile"
                }
            ],
            hoverGradient: "radial-gradient(100% 2722.12% at 0% 0%, #009BF5 0%, #2D56D5 100%)",
        },
        {
            name: "Quice",
            description: "An application that analyzes your dietary needs and your tastes to suggest the best meals among thousands.",
            isInDevelopment: true,
            hoverGradient: "radial-gradient(circle at left top, #84CAD6, #6AAAB5)",
        },
        {
            name: "Rosas",
            description: "A free RSS reader that allows you to read your favorite news sources and play your favorite podcasts.",
            isInDevelopment: true,
            hoverGradient: "radial-gradient(circle at left top, #F65045, #F53F32)",
        }
    ]

    function getProjectInParent(element) {
        let currentElement = element;

        if (currentElement.classList.contains("project")) {
            return currentElement;
        }

        while (currentElement.parentElement) {
            if (currentElement.parentElement.classList.contains("project")) {
                return currentElement.parentElement;
            }

            currentElement = currentElement.parentElement;
        }
    }

    function applyPositionAndSize(event) {
        event.target.querySelector('.project__background').style.left = event.offsetX - event.target.querySelector('.project__background').offsetWidth / 2 + 'px';

        if (event.offsetY > event.target.offsetHeight / 2) {
            event.target.querySelector('.project__background').style.top = event.target.offsetHeight - event.target.querySelector('.project__background').offsetHeight / 2 + 'px';
        } else {
            event.target.querySelector('.project__background').style.top = -event.target.querySelector('.project__background').offsetHeight / 2 + 'px';
        }
    }

    function checkProjectMouseout() {
        document.querySelectorAll('.project--hover').forEach(element => {
            if (!element.matches(':hover')) {
                try {
                    applyPositionAndSize(event);
                } catch {}
                element.classList.remove('project--hover');
            }
        });
    }

    onMount(() => {
        setInterval(checkProjectMouseout, 100);
    });

    function projectMouseover(event) {
        const target = getProjectInParent(event.target);
        if (target.matches(':hover') &&
            !target.classList.contains('project--hover')) {
            try {
                applyPositionAndSize(event);
            } catch {}
            event.target.classList.add('project--hover');
        }
    }

    function projectMouseout(event) {
        const target = getProjectInParent(event.target);

        if (target) {
            if (!target.matches(':hover')) {
                try {
                    applyPositionAndSize(event);
                } catch {}
                event.target.classList.remove('project--hover');
            }
        } else {
            checkProjectMouseout();
        }
    }

    function followMouseTransforms(x, y, el) {
        let box = el.getBoundingClientRect();
        let constrainX = 150;
        let constrainY = 6;
        let calcX = -(y - box.y - (box.height / 2)) / constrainY;
        let calcY = (x - box.x - (box.width / 2)) / constrainX;

        return "perspective(100px) "
            + "   rotateX("+ calcX +"deg) "
            + "   rotateY("+ calcY +"deg) ";
    }

    function followMouseTransformElement(el, xyEl) {
        el.style.transform  = followMouseTransforms.apply(null, xyEl);
    }

    onMount(() => {
        document.querySelectorAll('.project__links__mouse-over-container').forEach(el => {
            el.addEventListener('mousemove', event => {
                let elementToTransform = event.target;

                if (!elementToTransform.classList.contains('.project__links--main-call-to-action')) {
                    elementToTransform = elementToTransform.parentElement;
                }

                let position = [event.clientX, event.clientY, elementToTransform];

                window.requestAnimationFrame(function() {
                    followMouseTransformElement(elementToTransform, position);
                });
            });

            el.addEventListener('mouseout', event => {
                let elementToTransform = event.target;

                if (!elementToTransform.classList.contains('.project__links--main-call-to-action')) {
                    elementToTransform = elementToTransform.parentElement;
                }

                window.requestAnimationFrame(function() {
                    elementToTransform.style.transition = '0.5s';
                    elementToTransform.style.transform = 'perspective(100px) rotateX(0deg) rotateY(0deg)';
                    setTimeout(() => {
                        elementToTransform.style.transition = '';
                    }, 500);
                });
            });
        })
    })
</script>

<section id="projects">
    <header>
        <CustomTitle>Projects</CustomTitle>
    </header>

    <div>
        {#each projects as project, i}
            <div class="project" style="--hover-gradient: {project.hoverGradient}" on:mouseover={projectMouseover} on:mouseout={projectMouseout}>
                <div class="project__background"></div>
                <div>
                    <h3 class="project__name">{project.name}</h3>
                    <p class="project__description">{project.description}</p>
                </div>
                {#if project.isInDevelopment}
                    <div class="project__in-dev">
                        <p>(in development)</p>
                    </div>
                {:else}
                    <ul class="project__links">
                        {#each project.links as link}
                            {#if link.mainCallToAction}
                                <li style="--hover-text-color: {link.hoverTextColor}">
                                    <div
                                            class="project__links__mouse-over-container"
                                            on:click={() => {insights.track({ id: "link-clicked", parameters: { type:"project", project: project.name, link_name: link.name, link_url: link.url } })}}
                                    >
                                        <a href={link.url} target="_blank" rel="noopener noreferrer" class="project__links--main-call-to-action">
                                            {link.name}
                                        </a>
                                    </div>
                                </li>
                            {:else}
                                <li>
                                    <CustomButton
                                            href={link.url}
                                            style="font-size: 1.1rem; color: var(--custom-button-color, #ffffff)"
                                            sendEvent={() => {insights.track({ id: "link-clicked", parameters: { type:"project", project: project.name, link_name: link.name, link_url: link.url } })}}
                                    >{link.name}</CustomButton>
                                </li>
                            {/if}
                        {/each}
                    </ul>
                {/if}
            </div>
            {#if i < projects.length - 1}
                <div class="project__separator"></div>
            {/if}
        {/each}
    </div>
</section>

<style lang="scss">
  @import "src/styles/colors";
  @import "src/styles/variables";

  section#projects {
    --custom-button-color: $white;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-top: $padding-base;

    header {
      padding: 0 $padding-base 0;
    }

    .project {
      padding: calc(#{$padding-base} * 1.5) $padding-base;
      box-sizing: border-box;
      display: flex;
      column-gap: 1.5rem;
      position: relative;
      overflow: hidden;

      :global(&.is-mobile) {
        flex-direction: column;
        row-gap: 1.5rem;
        background-image: var(--hover-gradient);
      }

      * {
        color: $white;
      }

      &__name {
        font-size: 2.85rem;
        margin: 0 0 1rem;

        :global(&.is-mobile) {
          font-size: 2rem!important;
        }
      }

      &__description {
        font-size: 1.1rem;
        margin: 0;
      }

      &__background {
        position: absolute;
        top: 0;
        left: 50%;
        min-height: 100%;
        min-width: 100%;
        aspect-ratio: 1;
        background-image: var(--hover-gradient);
        border-radius: 9999px;
        z-index: -1;
        transition: transform $transition-duration;
        transform: scale(0);

        :global(&.is-mobile) {
          display: none;
        }
      }

      &--hover {
        .project {
          &__background {
            transition: $transition-duration;
            transform: scale(2);
          }

          &__links {
            &--main-call-to-action {
              //background-image: var(--hover-gradient);
              color: var(--hover-text-color);
              transition: $transition-duration;
            }
          }
        }
      }

      &__links {
        :global(&.is-mobile) {
          flex-direction: column!important;
          align-items: flex-end!important;
          margin-top: 1rem!important;
        }

        &--main-call-to-action {
          display: block;

          :global(&.is-mobile) {
            color: var(--hover-text-color)!important;
          }
        }
      }

      &__in-dev {
        p {
          :global(&.is-mobile) {
            margin: 0!important;
          }
        }
      }

      &__links, &__in-dev {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        column-gap: 1.25rem;
        flex: 1;

        * {
          white-space: nowrap;
          font-size: 1.1rem;
          text-decoration: none;
        }

        &--main-call-to-action {
          padding: 0.5rem 1.25rem;
          color: $black;
          background-color: $white;
          border-radius: 9999px;
          transition: $transition-duration;
        }
      }

      &__separator {
        width: calc(100% - #{$padding-base} * 2);
        height: 1px;
        position: relative;
        left: $padding-base;
        background-color: $white;

        :global(&.is-mobile) {
          display: none;
        }
      }
    }
  }
</style>
