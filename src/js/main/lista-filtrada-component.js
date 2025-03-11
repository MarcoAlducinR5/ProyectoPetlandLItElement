import { LitElement, html, css } from 'lit-element';
import { listadoMascotas } from "../constants/constants";

export class ListaFiltradaComponent extends LitElement {
    static get styles() {
        return css`
            .listaFiltrada {
                display: grid;
                -webkit-box-align: stretch;
                align-items: stretch;
                gap: 1.25rem;
                grid-template-columns: repeat(auto-fit, minmax(min(15.625rem, 100%), 1fr));
                width: 100%;
            }
        `
    }

    static properties= {
        mascotas: {}
    }

    constructor(){
        super();
        this.mascotas = listadoMascotas;
    }

    render() {
        return html`
            <div class="listaFiltrada">
                ${this.mascotas.map((mascota) => 
                    html`
                        <mascota-component id=${mascota.id} fecha=${mascota.fecha} nombre=${mascota.nombre} genero=${mascota.genero} src=${mascota.src} ></mascota-component>
                    `
                )}
            </div>
        `
    }
}
customElements.define('lista-filtrada-component', ListaFiltradaComponent);