import { LitElement, html, css } from 'lit-element';
import "./mascota-component";
import "./contenedor-selects-component";
import { filtros } from "../constants/constants";
import "./lista-filtrada-component"

export class ListadoMascotasComponent extends LitElement {
    static get styles() {
        return css`
            .seccionF {
                padding: clamp(2.5rem, 1.7352rem + 3.8241vw, 5rem) 0rem;
            }
            .templateList{
                display: block;
                margin: 0px auto;
                padding: auto 0.625rem;
                width: 100%;
                max-width: 85.375rem;
            }
            .templateList .filtros {
                padding: 0.625rem;
                margin-bottom: 2.5rem;
            }
            .templateList .filtros .selects {
                display: grid;
                -webkit-box-align: stretch;
                align-items: stretch;
                gap: 1.5rem;
                grid-template-columns: repeat(auto-fit, minmax(min(15.625rem, 100%), 1fr));
            }
            .templateList .filtros .selects .estiloSelect {
                -webkit-box-align: center;
                align-items: center;
                background: rgba(255, 255, 255, 0.8);
                backdrop-filter: blur(1rem);
                border-radius: 62.5rem;
                position: relative;
                width: 100%;
            }
            .templateList .filtros .selects, .templateList .filtros .opcionLF{
                margin-top: 1.5rem;
                padding-left: 1rem;
            }
            .templateList .filtros .opcionLF a {
                color: #818284;
                cursor: pointer;
                text-decoration: none;
                transition: 0.2s, outline 1e-06s;
            }
            .templateList .filtros .opcionLF a:hover {
                text-decoration: none;
                color: #DE6061;
            }
            .templateList .filtros .opcionLF svg{
                border: none;
                display: inline-block;
                outline: none;
                vertical-align: middle;
                user-select: none;

                height: 1em;
                margin-right: 0.5rem;
            }
        `
    }

    static properties= {
        filtros: {type: Object}
    }

    constructor(){
        super();
        this.filtros = filtros;
    }

    render() {
        return html`
            <section class="seccionF">
                <div class="templateList">
                    <div class="filtros">
                        <section class="selects">
                            ${this.filtros.map((filtro) => html`
                                <div class="estiloSelect">
                                    <contenedor-selects-component titulo=${filtro}></contenedor-selects-component>
                                </div>
                            `)}
                        </section>
                        <section class="opcionLF">
                            <a href="/">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" class="svg-inline--fa fa-xmark sc-gsFSXq " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" mr="0.5rem">
                                    <path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
                                </svg>
                                Limpiar filtros
                            </a>
                        </section>
                    </div>
                    <lista-filtrada-component></lista-filtrada-component>
                    
                </div>
            </section>
        `
    }
}
customElements.define('listado-mascotas-component', ListadoMascotasComponent);