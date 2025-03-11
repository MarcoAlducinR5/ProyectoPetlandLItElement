import { LitElement, html, css } from 'lit-element';
import { generos, razas, ubicaciones, tiposMascota } from '../constants/constants';

export class SelectsComponent extends LitElement {
    static get styles() {
        return css`
            select {
                appearance: none;
                background: transparent;
                border-radius: 62.5rem;
                border: 1px solid rgb(244, 244, 244);
                color: #818284;
                font-family: var(--main-font);
                font-size: 1rem;
                padding: 1.5rem 3.5rem 1.5rem 2rem;
                position: relative;
                transition: border-color 0.2s;
                user-select: none;
                width: 100%;
                z-index: 2;
                cursor: pointer;
                padding-right: 3.5rem;
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
        let array = [];
        if(this.titulo == "Tipo de mascota")
            array = tiposMascota;
        if(this.titulo == "Género")
            array = generos;
        if(this.titulo == "Raza")
            array = razas;
        if(this.titulo == "Ubicación")
            array = ubicaciones;

        return html`
            <select name="" id="">
                <option value=""></option>
                ${array.map((dato) => html`<option value="${dato.clave}">${dato.nombre}</option>`)}
            </select>
        `
    }
}
customElements.define('selects-component', SelectsComponent);