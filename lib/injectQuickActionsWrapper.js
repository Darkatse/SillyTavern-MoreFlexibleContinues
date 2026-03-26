export const injectQuickActionsWrapper = ()=>{
    const elTop = document.querySelector('#message_template > .mes .name_text').parentElement;
    const elBottom = document.querySelector('#message_template > .mes');

    let wrapTop = /**@type {HTMLElement}*/(elTop.querySelector('.lacommon--quickActions'));
    let wrapBottom = /**@type {HTMLElement}*/(elBottom.querySelector(':scope > .lacommon--quickActions'));

    if (!wrapTop) {
        wrapTop = document.createElement('div'); {
            wrapTop.classList.add('lacommon--quickActions');
            wrapTop.setAttribute('data-lacommon--anchor', 'top');
            elTop.append(wrapTop);
        }
    }
    if (!wrapBottom) {
        wrapBottom = document.createElement('div'); {
            wrapBottom.classList.add('lacommon--quickActions');
            wrapBottom.setAttribute('data-lacommon--anchor', 'bottom');
            elBottom.append(wrapBottom);
        }
    }

    for (const mes of /**@type {HTMLElement[]}*/([...document.querySelectorAll('#chat .mes')])) {
        const nameContainer = mes.querySelector('.name_text').parentElement;
        if (!nameContainer.querySelector('.lacommon--quickActions[data-lacommon--anchor="top"]')) {
            nameContainer.append(wrapTop.cloneNode(true));
        }

        if (!mes.querySelector(':scope > .lacommon--quickActions[data-lacommon--anchor="bottom"]')) {
            mes.append(wrapBottom.cloneNode(true));
        }
    }

    return [wrapTop, wrapBottom];
};
