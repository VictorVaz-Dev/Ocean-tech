import "./Home.css"
import Link from "../../components/link/Link"
import imgMonitoramento from "../../assets/home/monitoramento.webp"
import imgAreas from "../../assets/home/acesso-areas.webp"
import imgMudancas from "../../assets/home/identificacao.webp"
import imgFauna from "../../assets/home/fauna.webp"
import imgReducao from "../../assets/home/custo.webp"
import Paragrafo from "../../components/paragrafo/Paragrafo"

export default function Home(){
    return(
    <div className="home">
        <div className="foto-fullstack-home">
        </div>
        
        <div className="titulo-home">
            <h1>OCEAN TECH</h1>
            <h2>Bem vindo ao nosso site de monitoramento para o Oceano !</h2>
        </div>

        <div class="div-principal-home">
            <div className="conteudo-home">
                <div className="conteudo-paragrafo">
                    <Paragrafo titulo="1.	Monitoramento Eficiente e Preciso:" text="Os drones podem ser equipados com sensores que medem parâmetros como temperatura, turbidez e oxigênio dissolvido na água.Esses sensores fornecem dados precisos e em tempo real, permitindo que oceanógrafos monitorem a qualidade da água de forma eficiente e sem perturbar os corais."/>
                    <img src={imgMonitoramento} alt="imagem monitoramento" />
                </div>
                <div className="conteudo-paragrafo">
                    <Paragrafo titulo="2.	Acesso a Áreas Inacessíveis" text="Os recifes de corais muitas vezes estão localizados em áreas remotas ou de difícil acesso.Os drones podem voar sobre essas regiões, capturando imagens e coletando dados sem a necessidade de mergulhos arriscados ou caros."/>
                    <img src={imgAreas} alt="Imagem Áreas Inacessiveis"/>
                </div>
                <div className="conteudo-paragrafo">
                    <Paragrafo titulo="3.	Identificação de Mudanças Ambientais:" text="Os drones podem detectar mudanças na cobertura vegetal, branqueamento de corais e poluição.Essas informações ajudam a avaliar a saúde dos corais e a identificar ameaças, como vazamentos químicos ou aumento da temperatura da água."/>
                    <img src={imgMudancas} alt="imagem identificação " />
                </div>
                <div className="conteudo-paragrafo">
                    <Paragrafo titulo="4.	Monitoramento de Fauna:" text="Os drones podem capturar imagens detalhadas da fauna marinha, incluindo peixes e outros organismos associados aos recifes.Isso auxilia na compreensão das interações entre os corais e sua biodiversidade circundante."/>
                    <img src={imgFauna} alt="imagem testes" />
                </div>
                <div className="conteudo-paragrafo">
                    <Paragrafo titulo="5.	Redução de Custos e Riscos:" text="Comparado a métodos tradicionais, como mergulhos ou embarcações tripuladas, o uso de drones é mais econômico e seguro.Além disso, os drones podem ser implantados rapidamente em caso de emergências."/>
                    <img src={imgReducao} alt="imagem implantação" />
                </div>
            </div>
        </div>
            <div className="botao-home">
                <Link to="/Contatos" label="Entre em contato" />
            </div>
    </div>
    )
}