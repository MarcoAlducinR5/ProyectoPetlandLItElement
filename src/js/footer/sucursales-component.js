import { LitElement, html, css } from 'lit-element';

export class SucursalesComponent extends LitElement {
    static get styles() {
        return css`
            .sucursal {
                transition: opacity 1000ms, transform 1000ms;
                opacity: 1;
                transform: translate(0px, 0%);
            }
            .sucursal .enlace{
                border: solid 0.125rem #DE6061;
                border-radius: 0.625rem;
                display: block;
                color: #000000;
                padding: 1rem 1.25rem;
                    text-decoration: none;
            }
            .sucursal .enlace:hover {
                background: #DE6061;
                color: #fff;
            }
            .sucursal .enlace .caja {
                display: flex;
                gap: 0.625rem;
                -webkit-box-align: baseline;
                align-items: baseline;
            }
            .sucursal .enlace .caja svg {
                color: #DE6061;
                transition: color 0.2s;
            }
            .sucursal .enlace:hover .caja svg, .sucursal .enlace:hover .caja .link  {
                color: #fff;
            }
            .iconMap {
                font-size: 1rem;
            }
            .sucursal .enlace .caja .nombre {
                font-weight: 600;
            }
            .sucursal .enlace .caja p {
                margin: 0px;
                padding: 0.3125rem 0px;
                white-space: pre-line;
            }
            .sucursal .enlace .caja .link {
                color: #DE6061;
                transition: color 0.2s;
                margin-top: 0.625rem;
                display: block;
            }
        `
    }

    static properties= {
        nombre: {type: String},
        telefono: {type: String},
        ubicacion: {type: String},
    }

    constructor(){
        super();
    }

    render() {
        return html`
            <div class="sucursal">
                <a href=${this.ubicacion} target="_blank" class="enlace">
                    <div class="caja">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" class="iconMap" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="height:1em" font-size="1rem"><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>
                        <div>
                            <p font-weight="600" class="nombre sc-dcJsrY xjXuZ">${this.nombre}</p>
                            <span class="telefono sc-dcJsrY vnOoc">${this.telefono}</span>
                            <span class="link">Ver mapa</span>
                        </div>
                    </div>
                </a>
            </div>
        `
    }
}
customElements.define('sucursales-component', SucursalesComponent);