import * as $ from 'jquery';

function createAnalitycs(): object {
    let counter = 0;
    let isDestroyed: boolean = false;

    const listerer = (): number => counter++;

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

window['analitycs'] = createAnalitycs();