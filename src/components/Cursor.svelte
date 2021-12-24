<script>
    import anime from "animejs/lib/anime.es.js";

    let cursorBall;
    let elementsAnimating = {};
    let elementsHovering = {};
    let lastElementHovering = null;

    const cursorAnimations = {
        '.links': {
            'cursor': {
                'in': {scale: 0.2},
                'out': {scale: 1}
            }
        },
        '.project': {
            'cursor': {
                'in': {scale: 0.2},
                'out': {scale: 1}
            }
        },
        '.curriculum-part__bar': {
            'cursor': {
                'in': {scale: 0.2},
                'out': {scale: 1}
            }
        },
        '.button': {
            'cursor': {
                'in': {scale: 0.2},
                'out': {scale: 1}
            }
        },
        '.socials .async-svg': {
            'cursor': {
                'in': {scale: 0},
                'out': {scale: 1}
            },
        },
        '.socials .async-svg[data-hint="Twitter"] svg': {
            'element': {
                'in': {fill: '#1DA1F2'},
                'out': {fill: '#E4E6E7'}
            }
        },
        '.socials .async-svg[data-hint="LinkedIn"] svg': {
            'element': {
                'in': {fill: '#0077B5'},
                'out': {fill: '#E4E6E7'}
            }
        },
        '.socials .async-svg[data-hint="GitHub"] svg': {
            'element': {
                'in': {fill: '#171515', stroke: '#E4E6E7', strokeWidth: '1'},
                'out': {fill: '#E4E6E7', stroke: 'none', strokeWidth: '0'}
            }
        },
    }

    function areElementsHovering(targets) {
        if (typeof targets === 'string') {
            targets = document.querySelectorAll(targets);
        }

        for (let i = 0; i < targets.length; i++) {
            if (targets[i].matches(':hover')) return targets[i];
        }

        return false;
    }

    function checkHovering() {
        // console.log(elementsAnimating);

        for (let key in cursorAnimations) {
            const elementHovering = areElementsHovering(key);

            if (elementHovering && !elementsAnimating[key]) {
                if (cursorAnimations[key]['element']?.['in']) {
                    // console.log(elementHovering, cursorAnimations[key]['element']['in'])
                    anime({
                        targets: elementHovering,
                        ...cursorAnimations[key]['element']['in'],
                        duration: 100,
                        easing: 'easeInOutQuad',
                        begin: () => {
                            elementsAnimating[key] = true;
                        },
                        complete: () => {
                            elementsAnimating[key] = false;
                        }
                    });
                }
            }

            if (elementHovering) {
                lastElementHovering = elementHovering;
                elementsHovering[key] = true;
            }

            if (elementHovering && !elementsAnimating['.cursor']) {
                if (cursorAnimations[key]['cursor']?.['in'])
                    anime({
                        targets: cursorBall,
                        ...cursorAnimations[key]['cursor']['in'],
                        duration: 100,
                        easing: 'easeInOutQuad',
                        begin: () => {
                            elementsAnimating['.cursor'] = true;
                        },
                        complete: () => {
                            elementsAnimating['.cursor'] = false;
                        }
                    });
                return;
            } else if (!elementsAnimating['.cursor']) {
                if (cursorAnimations[key]['cursor']?.['out'])
                    anime({
                        targets: cursorBall,
                        ...cursorAnimations[key]['cursor']['out'],
                        duration: 100,
                        easing: 'easeInOutQuad',
                        begin: () => {
                            elementsAnimating['.cursor'] = true;
                        },
                        complete: () => {
                            elementsAnimating['.cursor'] = false;
                        }
                    });
            }
        }
    }

    setInterval(() => {
        Object.entries(elementsHovering).filter(([key, value]) => value).forEach(([key, value]) => {
            const elementHovering = areElementsHovering(key);
            if (!elementHovering) {
                elementsHovering[key] = false;

                if (cursorAnimations[key]['element']?.['out']) {
                    anime({
                        targets: key,
                        ...cursorAnimations[key]['element']['out'],
                        duration: 100,
                        easing: 'easeInOutQuad',
                        begin: () => {
                            elementsAnimating[key] = true;
                        },
                        complete: () => {
                            elementsAnimating[key] = false;
                        }
                    });
                }
            }
        });
    }, 100);

    function moveCursor(x, y) {
        cursorBall.style.left = x - cursorBall.offsetWidth / 2 + 'px';
        cursorBall.style.top = y - cursorBall.offsetHeight / 2 + 'px';
    }

    function onMouseMove(event) {
        moveCursor(event.pageX, event.pageY);
        checkHovering();
    }

    document.addEventListener("mousemove", onMouseMove);

    function onScroll(event) {
        moveCursor(event.pageX, event.pageY);
    }

    document.addEventListener("wheel", onScroll);
</script>

<div class="cursor">
    <div class="cursor__ball" bind:this={cursorBall}>
        <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
        </svg>
    </div>
</div>

<style lang="scss">
  @import "src/styles/colors";

    :global(*) {
      cursor: none;
    }

    .cursor {
      pointer-events: none;

      :global(&.is-mobile) {
        display: none;
      }

      &__ball {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;

        circle {
          fill: $white;
        }
      }
    }
</style>
