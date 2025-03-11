import { LitElement, html, css } from 'lit-element';

export class SemblanzaComponent extends LitElement {
    static get styles() {
        return css`
            .semblanza {
                padding-top: clamp(2.5rem, 1.7352rem + 3.8241vw, 5rem);
            }
            .TfeSi {
                display: block;
                margin: 0px auto;
                padding: 0rem auto;
                width: 100%;
                max-width: 85.375rem;
            }
            .dsrLLt {
                padding: 0.625rem;
            }
            .inicial {
                -webkit-box-align: center;
                align-items: center;
                display: flex;
                flex-wrap: nowrap;
                gap: 2.5rem;
                -webkit-box-pack: justify;
                justify-content: space-between;
            }
            .inicial .cajaIzquierda, .inicial .img{
                flex: 0 1 38rem;
            }
            .inicial .cajaIzquierda .texto, .inicial .cajaDerecha .imagen{
                transition: opacity 1000ms, transform 1000ms;
                opacity: 1;
                transform: translate(0px, 0%);
            }
            .inicial .cajaIzquierda .texto h1{
                color: #275972;
                font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', Oxygen, sans-serif;
                font-size: clamp(1.875rem, 1.6073rem + 1.3384vw, 2.75rem);
                font-weight: 700;
                line-height: 1.2;
                padding: 0px;
                position: relative;
            }
            .inicial .cajaIzquierda .texto h1 .featured {
                background: #F0AF4A;;
                color: #fff;
                padding: 0rem 0.3125rem;
            }
            .jXDZhC {
                font-size: 1.25rem;
                margin-top: 1rem;
            }
            .inicial .cajaDerecha .imagen img{
                box-shadow: rgba(0, 0, 0, 0.14) 0rem 0.1875rem 1.25rem;
                border-radius: 3.125rem;
                height: 476px;
                width: 595px;
            }
        `
    }

    static properties= {
        
    }

    constructor(){
        super();
    }

    render() {
        return html`
            <section class="semblanza">
                <div class="TfeSi">
                    <div class="dsrLLt">
                        <section class="inicial">
                            <div class="cajaIzquierda">
                                <div class="texto">
                                    <h1>
                                        En petland podrás encontrar 
                                        <span class="featured">gran variedad</span> de razas de cachorros
                                    </h1>
                                </div>
                                <div class="texto">
                                    <p class="jXDZhC">
                                        Nosotros te ayudamos a encontrar la más adecuada para ti, contamos con asesores especializados.
                                    </p>
                                </div>
                            </div>
                            <div class="cajaDerecha">
                                <div class="imagen">
                                    <img width="1000" height="800" src="https://petlandmexico.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-cachorros.c230f05e.jpg&w=2048&q=75" alt="IMG" srcset="https://petlandmexico.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-cachorros.c230f05e.jpg&w=2048&q=75" style="color: transparent;" />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        `
    }
}
customElements.define('semblanza-component', SemblanzaComponent);