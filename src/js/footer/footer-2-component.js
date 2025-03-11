import { LitElement, html, css } from 'lit-element';
import { logoPetland, iconApple, iconGoogle, iconDinkbit } from "../constants/constants";

export class Footer2Component extends LitElement {
    static get styles() {
        return css`
            .realF {
                background: #818284;
                color: #FFF;
                padding: 1.25rem 0rem;
            }
            .TfeSi {
                display: block;
                margin: 0px auto;
                padding: auto 0.625rem;
                width: 100%;
                max-width: 85.375rem;
            }
            .panelF {
                padding: 0.625rem;
            }
            .panelF .pieF {
                -webkit-box-align: center;
                align-items: center;
                display: flex;
                flex-wrap: wrap;
                gap: 2rem;
                -webkit-box-pack: justify;
                justify-content: space-between;
                margin-bottom: 1.5rem;
            }
            .panelF .pieF a, .panelF .pieF .redes a, .panelF .imgDevices a, .panelF .inferior .imagen a {
                color: inherit;
                cursor: pointer;
                text-decoration: none;
                transition: 0.2s, outline 1e-06s;
            }
            .panelF .pieF a img{
                color: transparent;
                border: none;
                display: inline-block;
                outline: none;
                vertical-align: middle;
                user-select: none;
                width: 100px;
                height: 27px;
            }
            .panelF .pieF .redes {
                -webkit-box-align: center;
                align-items: center;
                display: flex;
                gap: 1rem;
            }
            .panelF .pieF .redes a svg{
                border: none;
                display: inline-block;
                outline: none;
                vertical-align: middle;
                user-select: none;
            }
            .panelF .pieF .redes a .logoRedes {
                font-size: 1.5rem;
            }
            .panelF .texto {
                padding: 0.625rem;
                text-align: left;
            }
            .panelF .texto p {
                margin: 0px;    
                margin-bottom: -1rem;
                padding: 0.3125rem 0px;
                white-space: pre-line;
            }
            .panelF .imgDevices {
                padding: 0.625rem;
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                -webkit-box-pack: start;
                justify-content: start;
            }
            .panelF .imgDevices a img{
                color: transparent;
                border: none;
                display: inline-block;
                outline: none;
                vertical-align: middle;
                user-select: none;
                width: 120px;
                height: 42px;
            }
            .panelF .inferior {
                -webkit-box-align: center;
                align-items: center;
                display: flex;
                -webkit-box-pack: justify;
                justify-content: space-between;
                flex-wrap: wrap;
            }
            .panelF .inferior .derechos {
                font-size: 0.875rem;
                text-align: center;
            }
            .panelF .inferior p {
                margin: 0px;
                padding: 0.3125rem 0px;
                white-space: pre-line;
            }
            .panelF .inferior .derechos a {
                color: inherit;
                cursor: pointer;
                text-decoration: underline;
                transition: 0.2s, outline 1e-06s;
            }
            .panelF .inferior .imagen {
                flex: 0 1 auto;
                margin-top: 0rem;
                text-align: center;
            }
            .panelF .inferior .imagen img {
                color: transparent;
                border: none;
                display: inline-block;
                outline: none;
                vertical-align: middle;
                user-select: none;
                width: 93px;
                height: 42px;
            }
        `
    }

    static properties= {
        
    }

    constructor(){
        super();
        this.logoPetland = logoPetland
        this.iconApple = iconApple;
        this.iconGoogle = iconGoogle;
        this.iconDinkbit = iconDinkbit;
    }

    render() {
        return html`
            <footer class="realF">
                <div class="TfeSi">
                    <section class="panelF">
                        <div class="pieF">
                            <a href="/">
                                <img title="Petland" alt="Petland" src=${this.logoPetland} />
                            </a>
                            <lista-opciones-component></lista-opciones-component>
                            <div class="redes">
                                <a href="https://www.facebook.com/PetlandMX" target="_blank" rel="noopener noreferrer">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" class="svg-inline--fa fa-facebook sc-gsFSXq logoRedes" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" font-size="1.5rem" style="height: 1em;"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                                </a>
                                <a href="https://www.instagram.com/petlandmex/?hl=es" target="_blank" rel="noopener noreferrer">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram sc-gsFSXq logoRedes" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" font-size="1.5rem" style="height: 1em;"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                </a>
                                <a href="https://www.youtube.com/channel/UCWsBbi030WXhOoYwdEApxgw" target="_blank" rel="noopener noreferrer">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube sc-gsFSXq logoRedes" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" font-size="1.5rem" style="height: 1em;"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div class="texto">
                            <p>Descarga la app</p>
                        </div>
                        <div class="imgDevices">
                            <a href="https://apps.apple.com/mx/app/petland-m%C3%A9xico/id6502325606" target="_blank" rel="noopener noreferrer">
                                <img title="imgApple" alt="imgApple" class="imgApple" src=${this.iconApple} />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.dinkbit.petland" target="_blank" rel="noopener noreferrer">
                                <img title="imgGoogle" alt="imgGoogle" src=${this.iconGoogle} />
                            </a>
                        </div>
                        <div class="inferior">
                            <p class="derechos">
                                Petland México 2024. Todos los derechos reservados. &nbsp;|&nbsp; <a style="text-decoration:underline" href="/aviso-de-privacidad">Aviso de privacidad</a>
                            </p>
                            <div class="imagen">
                                <a href="https://www.youtube.com/channel/UCWsBbi030WXhOoYwdEApxgw" target="_blank" rel="noopener noreferrer">
                                    <img title="imgDinkbit" alt="imgDinkbit" src=${this.iconDinkbit} />
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        `
    }
}
customElements.define('footer-2-component', Footer2Component);