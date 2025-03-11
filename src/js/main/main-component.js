import { LitElement, html, css } from 'lit-element';
import "./semblanza-component"
import "./listado-mascotas-component"
import "./whatsapp-component"

export class MainComponent extends LitElement {
    static get styles() {
        return css`
            main {
                grid-area: main;
            }
            .kFJteZ {
                position: relative;
                padding-top: 2.5rem;
            }
                
            .formaW {
                backdrop-filter: blur(0.4rem);
                background: rgb(18, 140, 126);
                border-radius: 50%;
                bottom: 1.25rem;
                box-shadow: rgba(0, 0, 0, 0.16) 0rem 0rem 0.3125rem;
                color: #fff;
                display: grid;
                height: 3.75rem;
                place-content: center;
                position: fixed;
                right: 1.25rem;
                width: 3.75rem;
                z-index: 999;
            }
            a {
                cursor: pointer;
                text-decoration: none;
                transition: 0.2s, outline 1e-06s;
            }
            .svgWA {
                height: 1em;
                font-size: 1.7rem;
            }
            svg {
                border: none;
                display: inline-block;
                outline: none;
                vertical-align: middle;
                user-select: none;
            }
        `
    }

    static properties = {
        
    }

    constructor(){
        super();
    }

    render() {
        return html`
            <main>
                <div class="kFJteZ">
                    <semblanza-component></semblanza-component>
                </div>
                <listado-mascotas-component></listado-mascotas-component>
                <whatsapp-component></whatsapp-component>
            </main>
        `
    }
}
customElements.define('main-component', MainComponent);