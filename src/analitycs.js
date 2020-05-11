import * as $ from 'jquery';

function createAnalitycs() {
    let counter = 0;
    let isDestroyed = false;

    const listerer = () => {
        counter++;
    }
    $(document).on('click', listerer);

    return {
        destroy() {
            $(document).off('click', listerer);
            isDestroyed = true;
        },
        getClicks() {
            return isDestroyed ? 'Analitycs is destroyed' : counter;
        }
    }
}

window.analitycs = createAnalitycs();