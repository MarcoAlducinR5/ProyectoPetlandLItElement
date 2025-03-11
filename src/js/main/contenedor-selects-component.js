import { LitElement, html, css } from 'lit-element';
import "./selects-component";

class ContenedorSelectsComponent extends LitElement {
    static get styles() {
        return css`
            .contenedor{
                position: relative;
            }
            .contenedor label {
                border-radius: 0.625rem;
                left: 0%;
                padding: 0rem 2rem;
                position: absolute;
                top: 50%;
                transition: top 0.2s, transform 0.2s, background 0.2s;
                transform: translate(0px, -50%);
                z-index: 1;
            }
            .contenedor svg {
                position: absolute;
                top: 50%;
                right: 1.5rem;
                transition: color 0.2s;
                transform: translate(-50%, -50%);
                z-index: 1;
                height: 1em;
            }
        `
    }

    static properties= {
        titulo: {type: String}
    }

    constructor(){
        super();
    }
 
    render() {
        return html`
            <div class="contenedor">
                <label>${this.titulo}</label>
                <selects-component titulo=${this.titulo}></selects-component>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down sc-iGgWBj ffxCYX" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>
            </div>
        `
    }
}
customElements.define('contenedor-selects-component', ContenedorSelectsComponent);