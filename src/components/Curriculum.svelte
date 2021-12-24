<script>
    import CurriculumPart from "./CurriculumPart.svelte";
    import CurriculumBarSubtitle from "./CurriculumBarSubtitle.svelte";
    import CustomText from "./CustomText.svelte";
    import anime from "animejs/lib/anime.es.js";

    const curriculum = [
        {
            title: "Middle school",
            school: "Collège Jeanne d’Arc",
            location: "Argentan, France",
            start: new Date(2014, 9),
            end: new Date(2018, 6),
            diplomas: [
                "BIA (Aeronautical initiation certificate)"
            ],
        },
        {
            title: "High school",
            school: "Lycée Jeanne d’Arc",
            location: "Argentan, France",
            start: new Date(2018, 9),
            end: new Date(2021, 6),
            diplomas: [
                "General baccalaureate with honors"
            ],
        },
        {
            title: "University",
            school: "HETIC",
            location: "Paris, France",
            start: new Date(2021, 9),
            end: new Date(2024, 6),
            diplomas: [
                "Bachelor Data and AI"
            ],
        }
    ];

    let activeExperience = 0;
    let isAnimating = false;
    let lastCurriculumChange = Date.now();

    setInterval(() => {
        if (isAnimating) return;
        if (Date.now() - lastCurriculumChange < 10000) return;
        const newActiveExperience = (activeExperience + 1) % curriculum.length;
        document.querySelectorAll('.curriculum-part .curriculum-part__bar')[newActiveExperience].click();
    }, 500);

    function changeActive(event, i) {
        lastCurriculumChange = Date.now();
        const currentActiveExperience = activeExperience;

        const {active} = event.detail;

        if (active) activeExperience = i;

        if (currentActiveExperience !== activeExperience) {
            const newElement = document.querySelectorAll('.curriculum .curriculum-part')[i];
            const currentElement = document.querySelectorAll('.curriculum .curriculum-part')[currentActiveExperience];

            const newElementDesc = newElement.querySelector('.curriculum-part__description');
            const currentElementDesc = currentElement.querySelector('.curriculum-part__description');

            // const stageDiff = activeExperience - currentActiveExperience;
            // const duration = 500 * Math.abs(stageDiff);
            const duration = 500;
            const easing = 'easeInOutCirc';
            isAnimating = true;

            anime({
                targets: currentElementDesc,
                translateY: [0, `${newElement.getBoundingClientRect().y - currentElement.getBoundingClientRect().y}px`],
                opacity: [1, 0],
                duration,
                easing,
                begin: () => {
                    currentElementDesc.style.height = '0';
                },
                complete: () => {
                    currentElementDesc.style.display = 'none';
                    currentElementDesc.style.height = 'auto';
                    currentElementDesc.style.transform = 'translateY(0)';
                }
            });

            anime({
                targets: newElementDesc,
                translateY: [`${currentElement.getBoundingClientRect().y - newElement.getBoundingClientRect().y}px`, 0],
                opacity: [0, 1],
                duration,
                easing,
                begin: () => {
                    newElementDesc.style.height = 'auto';
                    newElementDesc.style.display = 'block';
                },
                complete: () => {
                    isAnimating = false;
                }
            });
        }
    }
</script>

<div class="curriculum">
    {#each curriculum as experience, i}
        <div style={`z-index: ${i}`}>
            <CurriculumPart active={i === activeExperience} clickActive={!isAnimating} on:changeActive={(event) => changeActive(event, i)}>
                <div>
                    <CurriculumBarSubtitle>{experience.title}</CurriculumBarSubtitle>
                    <CustomText>{experience.school}<br />{experience.location}</CustomText>
                    <div>
                        <CustomText underline={true}>{new Date().getTime() > experience.end.getTime() ? `Diploma${experience.diplomas.length > 1 ? 's' : ''} obtained` : `Diploma${experience.diplomas.length > 1 ? 's' : ''} goal`}</CustomText>
                        <ul>
                            {#each experience.diplomas as diploma}
                                <li><CustomText>{diploma}</CustomText></li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </CurriculumPart>
        </div>
    {/each}
</div>

<style lang="scss">
  @import "src/styles/colors";

  .curriculum {
    :global(&.is-mobile) {
      display: none;
    }

    & > div {
      position: relative;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        &:before {
          content: "•";
          margin-right: 0.5rem;
          color: $white;
        }

        & > :global(*:first-child) {
          display: inline;
        }
      }
    }
  }
</style>
