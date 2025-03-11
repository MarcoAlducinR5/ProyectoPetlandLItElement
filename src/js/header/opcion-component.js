import { LitElement, html, css } from 'lit-element';
import "./lista-opciones-component"

export class OpcionComponent extends LitElement {
    static get styles() {
        return css`   
            li{
                display: block;
            }
            li a[active="true"] {
                background: #F0AF4A;
            }
            li a{
                color: #fff;
                font-weight: 600;
                padding: 0.5rem;
                cursor: pointer;
                text-decoration: none;
                transition: 0.2s, outline 1e-06s;
            }
            li a[active="false"]:hover {
                color: #F0AF4A;
            }
        `
    }

    static properties= {
        active: {type: String},
        nombre: {type: String},
    }

    constructor(){
        super();
    }

    render() {
        return html`
            <li>
                <a href="#" class="logo" active=${this.active}>${this.nombre}</a>
            </li>
        `
    }
}
customElements.define('opcion-component', OpcionComponent);