import { LitElement, html, css } from 'lit-element';
import { dogMan, dogWoman } from "../constants/constants";

export class MascotaComponent extends LitElement {
    static get styles() {
        return css`
            .recuadro{
                width: 17.641rem;
                height: fit-content;
            }
            .recuadro:hover{
                border: 0.188rem #DE6061 solid;
                border-radius: 0.625rem;
                padding: 0rem;
            }
            .fotoMascota{
                display: flex;
                justify-content: center;
            }
            .imgMascota{
                width: 100%;
                height: auto;
                border-radius: 0.625rem;
                box-shadow: rgba(185, 185, 185, 0.4) 0rem 0.188rem 1.25rem 0rem;
                transition: border-radius 0.2s;
            }
            .infoMascota{
                padding: 0.938rem;
            }
            .nombreMascota{
                font-size: 1.125rem;
                font-weight: bolder;
            }
            .iconDog{
                height: 1rem;
            }
            .datosMascota{
                color: rgb(129, 130, 132);
                font-size: 1rem;
                font-weight: 500;
                padding-left: 1.25rem
            }
            .textoConoceMas{
                font-size: 1rem;
                font-weight: normal;
                color: #DE6061;
                font-weight: 500;
                padding-left: 1.25rem
            }
                
            .modal {
                display: none;
                position: fixed;
                z-index: 1;
                padding-top: 200px;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
                background-color: rgba(0,0,0,0.5);
            }
            .modalOculto{
                display: none;
            }
            .modalAlaVista{
                display: block;
            }

           
            .contenido-modal {
                position: relative;
                background-color: white;
                margin: auto;
                padding: 20px;
                width: 60%;
                -webkit-animation-name: animarsuperior;
                -webkit-animation-duration: 0.5s;
                animation-name: animarsuperior;
                animation-duration: 0.5s
            }
            
            .close {
                color: black;
                float: right;
                font-size: 30px;
                font-weight: bold;
            }

            .close:hover,
            .close:focus {
                color: #000;
                text-decoration: none;
                cursor: pointer;
            }
        `
    }

    static properties= {
        fecha: {type: String},
        genero: {type: String},
        nombre: {type: String},
        id: {type: String},
        src: {type: String},
        icon: {type: String},
        oculto: {type: Boolean},
    }

    constructor(){
        super();
        this.oculto = false;
    }
    
    render() {
        let icon = "";
        if(this.genero == "Macho")
            icon = dogMan;
        if(this.genero == "Hembra")
            icon = dogWoman;
        return html`
            <div class="recuadro" key=${this.id} @click=${this.onClick}>
                <div class="fotoMascota">
                    <img src=${this.src} width="272" height="290" alt="" srcset="" class="imgMascota">
                </div>
                <section class="infoMascota">
                    <p class="nombreMascota">
                        <img src=${icon} alt="" srcset="" class="iconDog">
                        <span>${this.nombre}</span>
                    </p>
                    <p class="datosMascota">
                        <span class="sexoMascotaH">${this.genero}</span> - <span class="fechaMascota">${this.fecha}</span>
                    </p>
                    <p class="textoConoceMas">
                        Conoce más
                    </p>
                </section>
            </div>

            <div id="ventanaModal" class="modal ${this.oculto ? 'modalAlaVista' : ''}">
                <div class="contenido-modal">
                    <span class="cerrar" @click=${this.onClick}>&times;</span>
                    <h2>Ventana modal</h2>
                    <p>Esto es el texto de la ventana</p>
                </div>
            </div>
        `
    }
    onClick(event) {
        this.oculto = !this.oculto;
    }
}
customElements.define('mascota-component', MascotaComponent);