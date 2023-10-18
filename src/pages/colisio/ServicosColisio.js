import React from "react";
import { Badge, Button, Card } from "reactstrap";
import {
    Block,
    BlockBetween,
    BlockContent,
    BlockDes,
    BlockHead,
    BlockTitle,
    Col,
    Row,
} from "../../components/Component";
import Icon from "../../components/icon/Icon";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import Profile from "../../images/icons/profile.svg";
import Reports from "../../images/icons/reports.svg";
import FileMedia from "../../images/icons/file-media.svg";
import Settings from "../../images/icons/settings.svg";
import Devices from "../../images/icons/devices.svg";
import Help from "../../images/icons/support.svg";
// import { pricingTableDataV2 } from "./PricingTableData";

const Servicos = () => {

    const pricingTableDataV2 = [
        {
          id: 1,
          title: "Tráfego Pago",
          logo: Reports,
          desc: "Aumente a visibilidade do seu site através de anúncios direcionados. Atraia mais visitantes e clientes para o seu negócio de forma eficaz.",
          amount: 99,
          userNumber: 1,
          tags: false,
        },
        {
          id: 2,
          title: "Designer",
          logo: Profile,
          desc: "Transforme sua visão em realidade com designs criativos e profissionais. De logotipos a materiais gráficos, nosso designer tornará sua marca memorável.",
          amount: 299,
          userNumber: 5,
          tags: false,
        },
        {
          id: 3,
          title: "Edição de Vídeos",
          logo: Settings,
          desc: "Dê vida aos seus vídeos com nossa equipe de edição. Aprimore a qualidade, corte, adicione efeitos especiais e conte uma história impactante.",
          amount: 599,
          userNumber: 20,
          tags: false,
        },
        {
          id: 4,
          title: "Fotografia",
          logo: FileMedia,
          desc: "Capture momentos preciosos e produtos deslumbrantes com nossos serviços de fotografia. De retratos a produtos, nossa equipe tornará suas imagens memoráveis.",
          amount: 99,
          userNumber: 1,
          tags: false,
        },
        {
            id: 5,
            title: "Social Media",
            logo: Devices,
            desc: "Deixe-nos cuidar das suas redes sociais. Aumente o engajamento, alcance mais pessoas e construa uma presença online sólida para sua marca.",
            amount: 99,
            userNumber: 1,
            tags: false,
        },
        {
            id: 6,
            title: "Não Encontrei / Não Sei O Que Desejo",
            logo: Help,
            desc: "Caso esteja com duvida ou nao sabe ao certo oque deseja, entre contato conosco e faremos o possível para lhe ajudar.",
            amount: 99,
            userNumber: 1,
            tags: false,
        },
    ];

    const enviarMensagem = (servico) => {
        const numero = '+5581983487214';  // Substitua pelo número desejado
        const mensagem = encodeURIComponent(`Olá, tenho interesse no serviço *${servico}*, 
poderia me ajudar me dando mais informações sobre como funciona os serviços de vocês?`);
        window.open(`https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`);
    };

    return (
        <>
            <Head title="Pricing Table"></Head>
            <Content>

                <Block size="lg">
                    <BlockHead>
                        <BlockBetween className="g-3">
                            <BlockContent>
                                <BlockTitle>Nossos Serviços</BlockTitle>
                                <BlockDes className="text-soft">
                                    <p>Confira abaixo todos os serviços que nós oferecemos, e escolha o que melhor se adequa a você.</p>
                                </BlockDes>
                            </BlockContent>
                        </BlockBetween>
                    </BlockHead>
                    <Row className="g-gs">
                        {pricingTableDataV2.map((item) => {
                            return (                             <Col md={6} xxl={3} key={item.id}>
                                    <Card className={`card-bordered pricing text-center ${item.tags ? "recommend" : ""}`}>
                                        {item.tags && (
                                            <Badge color="primary" className="pricing-badge">
                                                Recommend
                                            </Badge>
                                        )}
                                        <div className="pricing-body">
                                            <div className="pricing-media">
                                                <img src={item.logo} alt="" />
                                            </div>
                                            <div className="pricing-title w-220px mx-auto">
                                                <h5 className="title">{item.title}</h5>
                                                <span className="sub-text">{item.desc}</span>
                                            </div>
                                            <div className="pricing-action m-0">
                                                <Button className="m-0" color="success" onClick={() => {
                                                    enviarMensagem(item.title)
                                                }}>
                                                    <Icon style={{ color: '#fff' }} name="whatsapp" />
                                                    <span style={{ color: '#fff' }}>Tenho interesse</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Block>
            </Content>
        </>
    );
};

export default Servicos;
