
class BookPreview extends HTMLElement {
    constructor(){
        super();
        this.attachShadow( {mode: "open"})
    }

    connectedCallback(){
        this.render();
        this.preview
        .document.getElementById('[data-preview]')
    }
}