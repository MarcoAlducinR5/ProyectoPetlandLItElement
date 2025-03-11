import { LitElement, html, css } from 'lit-element';
import "./sucursales-component";
import "../header/lista-opciones-component"
import "./footer-2-component"
import { sucursales } from "../constants/constants";

export class FooterComponent extends LitElement {
    static get styles() {
        return css`
            footer{
                grid-area: footer;
            }
            .sucursales {
                box-shadow: inset 0px 3px 6px #00000029;
                background: #F7F7F7;
                padding-top: 2rem;
                padding-bottom: 2rem;
            }
            .capa {
                display: block;
                margin: 0px auto;
                padding: auto 0.625rem;
                width: 100%;
                max-width: 85.375rem;
            }
            .titulo {
                padding: 0.625rem;
                margin-bottom: 1.25rem;
            }
            .iDIPbd {
                transition: opacity 1000ms, transform 1000ms;
                opacity: 1;
                transform: translate(0px, 0%);
            }
            .titulo .iDIPbd h2 {
                color: #275972;
                font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', Oxygen, sans-serif;
                font-weight: 700;
                line-height: 1.2;
                padding: 0px;
                position: relative;
                font-size: clamp(1.375rem, 1.222rem + 0.7648vw, 1.875rem);
         
                margin: 0px;
            }
            .listado {
                padding: 0.625rem;
            }
            .listado .gridList{
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
        sucursales: {}
    } 

    constructor(){
        super();
        this.sucursales = sucursales;
    }

    render() {
        return html`
            <footer>
                <section class="sucursales">
                    <div class="titulo">
                         <div class="iDIPbd">
                            <h2>
                                Visítanos en nuestras sucursales
                            </h2>
                        </div>
                    </div>
                    <div class="listado">
                        <div class="gridList">
                            ${this.sucursales.map((sucursal) => html`
                                <sucursales-component nombre=${sucursal.nombre} telefono=${sucursal.telefono} ubicacion=${sucursal.ubicacion}></sucursales-component>
                            `)}
                        </div>
                    </div>
                </section>
                <footer-2-component></footer-2-component>
            </footer>
        `
    }
}
customElements.define('footer-component', FooterComponent);