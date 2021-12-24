<script>
    export let src;
    export let hint;
    export let fill;

    let element;

    fetch(src).then(response => response.text()).then(svg => {
        element.innerHTML = svg;
        if (hint) element.setAttribute('data-hint', hint);
        if (fill) element.querySelector('svg').setAttribute('fill', fill);
    });
</script>

<div bind:this={element} class="async-svg">
    <img src={src} alt={hint}>
</div>

<style>
    .async-svg > :global(*) {
        height: 100%;
        width: 100%;
    }
</style>
