import { LitElement, html, css } from 'lit-element';
import "./header/header-component";
import "./main/main-component";
import "./footer/footer-component"

export class PrincipalComponent extends LitElement {
    static get styles() {
        return css`
            .estructura{
                display: grid;
                grid-template:
                    [nav] "nav" [main]
                    "main" 1fr [footer]
                    "footer" / 100%;
                min-height: 100%;
            }
        `
    }

    constructor(){
        super();
    }

    static properties = {
        
    }

    render() {
        return html`
            <div class="estructura">
                <header-component></header-component>
                <main-component></main-component>
                <footer-component></footer-component>
            </div>
        `
    }
}
customElements.define('principal-component', PrincipalComponent);
