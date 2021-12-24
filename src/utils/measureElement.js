/**
 * This function returns the width and height of an element without showing it.
 * @param {HTMLElement} element - The element to measure.
 * @param {Object?} style - The parent element.
 * @returns {Object} The width and height of the element.
 */
export default function measureElement(element, style = {}) {
    Object.assign(element.style, {
        ...style,
        visibility: 'hidden',
        display: 'block',
        position: 'absolute',
        left: '-9999px',
        right: '-9999px',
        width: 'max-content',
        height: 'auto',
    });

    document.body.appendChild(element);

    const width = element.offsetWidth;
    const height = element.offsetHeight;

    document.body.removeChild(element);

    return { width, height };
}
