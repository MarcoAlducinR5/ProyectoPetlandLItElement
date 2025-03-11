import { LitElement, html, css } from 'lit-element';
import "./lista-opciones-component"
import {logoPetland} from "../constants/constants"

export class HeaderComponent extends LitElement {
    static get styles() {
        return css`
            header{
                background: rgba(0, 0, 0, 0.4);
                color: #fff;
                grid-area: nav;
                height: 4.375rem;
                position: fixed;
                top: 0%;
                user-select: none;
                transition: background 0.2s, backdrop-filter 0.2s;
                width: 100%;
                z-index: 999;
            }
            header > div {
                align-items: center;
                display: flex;
                height: 100%;
                position: relative;
                z-index: 1;
            }
            .TfeSi {
                display: block;
                margin: 0px auto;
                padding: 0rem 0.625rem;
                width: 100%;
                max-width: 85.375rem;
            }
            .dsrLLt {
                padding: 0.625rem;
            }
            .gridHeader {
                -webkit-box-align: center;
                align-items: center;
                display: grid;
                gap: 1rem;
                grid-template-columns: 1fr 2fr auto;
                -webkit-box-pack: justify;
                justify-content: space-between;
            }
            .gridHeader .logo{
                max-width: 12.5rem;
                color: inherit;
            }
            .gridHeader .logo .img{
                color: transparent;
                height: auto;
                width: 100%;
            }
            .gridHeader a{
                font-weight: 600;
                padding: 0.5rem;
                cursor: pointer;
                text-decoration: none;
                transition: 0.2s, outline 1e-06s;
            }
            .gridHeader span .telefono{
                background: #DE6061;;
                color: #fff;
                padding: 0.5rem 0.8rem;
            }
            .gridHeader span .telefono .iconoTel{
                height: 1em;
                margin-right: 0.5rem;
            }
            .gridHeader span .telefono svg {
                border: none;
                display: inline-block;
                outline: none;
                vertical-align: middle;
                user-select: none;
            }
            .gridHeader span .telefono:hover {
                background: #F0AF4A;;
                color: #fff;
            }
        `
    }

    static properties = {
    }

    constructor(){
        super();
        this.logoPetland = logoPetland
    }

    render() {
        return html`
            <header>
                <div>
                    <div class="TfeSi">
                        <div class="dsrLLt">
                            <div class="gridHeader">
                                <a href="#" class="logo">
                                    <img title="Petland" alt="Petland" src=${this.logoPetland} class="img" />
                                </a>
                                <lista-opciones-component></lista-opciones-component>
                                <span>
                                    <a href="tel:5592215810" class="telefono" active="false">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" class="iconoTel" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" mr="0.5rem"><path fill="currentColor" d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"></path></svg>
                                        (55) 9221 5810
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        `
    }
}
customElements.define('header-component', HeaderComponent);