import { LitElement, html, css } from 'lit-element';
import "./opcion-component";
import { opciones } from '../constants/constants';

export class ListaOpcionesComponent extends LitElement {
    static get styles() {
        return css`
            .listaOpciones{
                padding: 1rem 0px;
                position: relative;
            }
            .listaOpciones ul{
                display: flex;
                gap: 1.25rem;
                -webkit-box-pack: end;
                justify-content: end;
                margin: 0px;
                padding: 0px;
                list-style: none;
            }
        `
    }

    static properties = {
    }
    
    constructor(){
        super();
        this.opciones = opciones;
    }

    render() {
        return html`
            <section class="listaOpciones">
                <ul>
                    ${this.opciones.map((op) => html`<opcion-component active=${op.active} nombre=${op.nombre}></opcion-component>`)}
                </ul>
            </section>
        `
    }
}
customElements.define('lista-opciones-component', ListaOpcionesComponent);