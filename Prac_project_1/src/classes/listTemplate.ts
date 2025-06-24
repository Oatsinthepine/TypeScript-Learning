import {hasFormatter} from "../interfaces/hasFormmater";

export class listTemplate {
    constructor(private container: HTMLUListElement) {}
    render(item: hasFormatter, heading:string, pos: 'start'|'end') {
        const li:HTMLElement = document.createElement('li');
        const h4:HTMLElement = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p:HTMLParagraphElement = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if (pos === 'start') {
            this.container.prepend(li)
        } else {
            this.container.append(li)
        }
    }

}