<script>
    import CustomTitle from "./../components/CustomTitle.svelte";
    import CustomText from "../components/CustomText.svelte";
    import Curriculum from "../components/Curriculum.svelte";
    import CustomButton from "../components/CustomButton.svelte";
</script>

<section id="about-me">
    <header>
        <CustomTitle>About Me</CustomTitle>
    </header>

    <div class="parts-row">
        <div class="about-me__description">
            <CustomText>I am Arthur, a 18 years old french full-stack developer.</CustomText>
            <CustomText>Student at HETIC, development school, I have been developing websites and mobile applications for 2 years.</CustomText>
            <CustomText>Having chosen to study a Bachelor's degree in Data and Artificial Intelligence, I plan to specialize in a field with great perspectives.</CustomText>
            <CustomText>To date, I use and have learned Python, Typescript (with Nuxt.js / Svelte / Node.js) and Dart (with Flutter).</CustomText>
            <CustomButton href="resume.pdf" download>Download my resume</CustomButton>
        </div>
        <Curriculum />
    </div>
</section>

<style lang="scss">
  @import "src/styles/colors";
  @import "src/styles/variables";

  section#about-me {
    display: flex;
    flex-direction: column;
    padding: $padding-base $padding-base 0;
    min-height: 100vh;
    box-sizing: border-box;

    .parts-row {
      flex-grow: 1;

      display: flex;
      flex-direction: row;
      column-gap: 3.75rem;
      justify-content: space-between;
      align-items: center;

      :global(& > div) {
        flex: 1;
      }

      .about-me__description {
        color: $white;
        max-width: 100%;

        .button {
          margin-top: 1.5rem;

          :global(&.is-mobile) {
            font-size: 1.1rem!important;
          }
        }
      }
    }
  }
</style>
