function createAnalitycs() {
    let counter = 0;
    let isDestroyed = false;

    const listerer = () => {
        counter++;
    }
    document.addEventListener('click', listerer);

    return {
        destroy() {
            document.removeEventListener('click', listerer);
            isDestroyed = true;
        },
        getClicks() {
            return isDestroyed ? 'Analitycs is destroyed' : counter;
        }
    }
}

window.analitycs = createAnalitycs();