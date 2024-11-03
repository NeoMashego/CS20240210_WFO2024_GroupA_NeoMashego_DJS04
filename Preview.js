
class BookPreview extends HTMLElement {
    constructor(){
        super();
        this.attachShadow( {mode: "open"})
        this.image = "";
        this.title = "";
        this.authors = [];
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.preview.innerHTML = `
            <img class="preview__image" src="${this.image}"/>
            
            <div class="preview__info">
                <h3 class="preview__title">${this.title}</h3>
                <div class="preview__author">${this.authors.join(", ")}</div>
            </div>
            <style>
                .preview {
                border-width: 0;
                width: 100%;
                font-family: Roboto, sans-serif;
                padding: 0.5rem 1rem;
                display: flex;
                align-items: center;
                cursor: pointer;
                text-align: left;
                border-radius: 8px;
                border: 1px solid rgba(var(--color-dark), 0.15);
                background: rgba(var(--color-light), 1);}
                
                .preview__image {
                width: 48px;
                height: 70px;
                object-fit: cover;
                background: grey;
                border-radius: 2px;
                box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
                    0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);}

                .preview__info {
                padding: 1rem;}
            </style>
        `
    }
}

customElements.define('book-preview', BookPreview);