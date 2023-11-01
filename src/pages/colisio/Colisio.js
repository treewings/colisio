import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import {
    Block,
    BlockBetween,
    BlockContent,
    BlockDes,
    BlockHead,
    BlockTitle,
    PreviewCard,
    ReactDataTable,
    UserAvatar
} from "../../components/Component";

import Icon from "../../components/icon/Icon";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { findUpper } from "../../utils/Utils";
import { } from "../components/table/TableData";


const Colisio = () => {

    // console.log(process.env.PUBLIC_URL)

    const [dadosColiser, setDadosColiser] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = (dadosColiser) => {
        setDadosColiser(dadosColiser)
        setIsOpen(!isOpen)
    };

    // faz uma funcao de useefect
    // useEffect(() => {
    //     if (dadosColiser !== null) {
    //         console.log('dadosColiser', dadosColiser)
    //     }
    // }, [dadosColiser])

    const enviarMensagem = (dados) => {
        console.log(dados)
        const numero = '+5581992376890';  // Substitua pelo número desejado
        const mensagem = encodeURIComponent(`Olá, tenho interesse em contratar ${dados.nome}, 
sobre demandas de ${dados.servico}, 
podemos conversar ?`);
        window.open(`https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`);
        toggle()
        setDadosColiser(null)
    };

    const getInitials = (nomeCompleto) => {
        const nomes = nomeCompleto.split(' ');
        if (nomes.length > 1) {
            return (nomes[0][0] + nomes[1][0]).toUpperCase();
        }
        return nomes[0][0].toUpperCase();
    }

    const servicosSeparados = (servicos) => {
        const servicosSeparados = servicos.split(',')
        return (
            <div className="d-flex flex-column justify-content-start">{
                servicosSeparados.map((servico, index) => {
                    return (
                        <span key={index} className="fs-11px d-flex justify-content-start">{servico}</span>
                    )
                })
            }</div>
        )
    }

    const dataTableColumns2 = [
        {
            name: <p className="ms-4 pt-3">Nome</p>,
            selector: (row) => row.nome,
            compact: true,
            grow: 2,
            style: { paddingRight: "20px" },
            cell: (row) => (
                <Button className="btn-dim" p='0' m='0' color="transparent" onClick={() => {
                    toggle(row)
                    // console.log(row)
                }}>
                    <div className="user-card">
                        <UserAvatar theme='#000' text={getInitials(row.nome)} ></UserAvatar>
                        <div className="user-info d-flex flex-column justify-content-start">
                            <span className="tb-lead text-start">
                                {row.nome}{" "}
                                {/* <span
                                    className={`dot dot-${row.status === "Active" ? "success" : row.status === "Pending" ? "warning" : "danger"
                                        } d-md-none`}
                                ></span> */}
                            </span>
                            {
                                (row.servico).includes(',') === true ? (
                                    servicosSeparados(row.servico)
                                ) : 
                                    <span className="d-flex justify-content-start">{row.servico}</span>
                            }
                        </div>
                    </div>
                </Button>
            ),
            sortable: true,
        },
        {
            name: "Portfólio",
            selector: (row) => row.portfolio,
            minWidth: "140px",
            cell: (row) => (
                <span className="tb-amount">
                    {/* {
                        row.portfolio === '' ? <span>Não informado</span> : ( */}
                            <Button className="btn-dim" onClick={() => {
                                window.open(row.portfolio, '_blank')
                            }}>
                                <Icon className='me-1' name="eye" />
                                Clique
                            </Button>
                    {/* //     )
                    // } */}
                </span>
            ),
            // sortable: true,
            hide: 480,
        },
        {
            name: "Tempo Experiência",
            selector: (row) => row.experiencia,
            // sortable: true,
            cell: (row) => <span>{row.experiencia}</span>,
            hide: "md",
        },
        // {
        //     name: "Formação Acadêmica",
        //     selector: (row) => row.form_academica,
        //     // sortable: true,
        //     cell: (row) => <span>{row.form_academica}</span>,
        //     hide: "lg",
        // },
        // {
        //     name: "Status",
        //     selector: (row) => row.status,
        //     sortable: true,
        //     hide: "sm",
        //     cell: (row) => (
        //         <span
        //             className={`tb-status ms-1 text-${row.status === "Active" ? "success" : row.status === "Pending" ? "warning" : "danger"
        //                 }`}
        //         >
        //             {row.status}
        //         </span>
        //     ),
        // },
    ];

    const userData = [
        {
            id: 1,
            nome: 'Vinícius Guimarães',
            whatsapp: "88997035462",
            cidade: "Juazeido do Norte",
            estado: "Ceará",
            pais: 'Brasil',
            servico: "Tráfego Pago",
            descricao: '',
            portfolio: "viralizy.com.br",
            experiencia: "",
        },
        {
            id: 1,
            nome: 'Maryane Larissa',
            whatsapp: "81998085379",
            cidade: "Recife",
            estado: "Pernambuco ",
            pais: 'Brasil',
            servico: "Social Média, Designer, Filmmaker",
            descricao: '',
            portfolio: "https://www.canva.com/design/DAFcieTm6qo/Csp4CcL-BfvBQ7EMLNAEpw/view?utm_content=DAFcieTm6qo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&fbclid=PAAaZFKWD9kBFLwm8VmxCQrRIaFM9Wftd3QD9xNmIR37zyYK_FWaObGi89Bd4_aem_AbXUKBIowpAGV7FmS_bce5CIlXkL-X8eluGujEtbeNvlydpQ0m_4Qu_Kj_kfC8yS6DA",
            experiencia: "",
        },
        {
            id: 1,
            nome: 'Karlos Hedylson',
            whatsapp: "81991844513",
            cidade: "Recife",
            estado: "Pernambuco ",
            pais: 'Brasil',
            servico: "Designer",
            descricao: 'Sou um designer especialista em traduzir negócios em produtos inovadores. Ao longo da minha jornada atuei em um grupo centenário com inovação aberta, startups e empresas do ecossistema de tecnologia do Recife',
            portfolio: "instagram.com/designbycaos",
            experiencia: "3 anos",
        },
        {
            id: 1,
            nome: 'LUIZ GUILHERME SANTOS DE ALMEIDA',
            whatsapp: "81986326240",
            cidade: "Recife",
            estado: "Pernambuco ",
            pais: 'Brasil',
            servico: "Designer, Designer gráfico",
            descricao: 'Opa 👋! Prazer me chamo Guilherme, e atuo como designer especialista em marcas, infiltrado na área da saúde desde 2020. Desde então, me dedico em participar ativamente no crescimento de empresas, através do visual. Ajudo empresas em processo de crescimento, com um olhar clínico e diagnóstico, para resolver os problemas de forma criativa. Coloco em prática um método específico que me ajuda a imergir no mundo empresarial do meu cliente, busco: “dores, sintomas, problemas” que podem ser resolvidos com uma boa conversa e design. -" PROBLEMAS SÃO SINTOMAS, DESIGN É REMÉDIO."',
            portfolio: "https://www.behance.net/oguizsantos",
            experiencia: "3 - 5 anos",
        },
        {
            id: 1,
            nome: 'Slaython Gleyson',
            whatsapp: "+5581983487214",
            cidade: "Recife",
            estado: "Pernambuco ",
            pais: 'Brasil',
            servico: "Desenvolvedor de Landing Page",
            descricao: 'Um desenvolvedor de software em crescimento exponencial que presta serviços de qualidade com foco em entregas e satisfação do cliente.',
            portfolio: "https://www.linkedin.com/in/slaython-gleyson-8b613a207/",
            experiencia: "2 - 3 anos",
        },
        {
            id: 1,
            nome: 'Thaís',
            whatsapp: "81981498512",
            cidade: "Recife",
            estado: "Pernambuco ",
            pais: 'Brasil',
            servico: "Social Média, Copywritter, Filmmaker",
            descricao: 'Sou formada em Jornalismo há 4 anos, especialista em gestão de marketing e storytelling, com atuação em mais de 80 empresas, em 4 estados do país. A exemplo o perfil da Ótica Oficina dos Óculos, engajado de maneira condizente e diariamente. A forma de comunicação é de maneira humanizada, presente e levando em consideração as necessidades pelo que se necessita em um perfil engajado. ',
            portfolio: "",
            experiencia: "3 - 5 anos",
        },
        {
            id: 1,
            nome: 'Bruna Rafaela Freire Pimentel',
            whatsapp: "87991223010",
            cidade: "Recife",
            estado: "Pernambuco ",
            pais: 'Brasil',
            servico: "Social Média, Copywritter, Email Marketing, Especialista em SEO, Gestor de Tráfego",
            descricao: 'Tenho experiência com a área de copywritter, aplicando as técnicas de SEO. Busco oferecer um atendimento personalizado e entender a amplitude da empresa para poder colaborar da melhor forma possível e entregar o melhor para o cliente.',
            portfolio: "https://drive.google.com/file/d/1oLUpjQn4zp1JZSmdpJDnzq3IwLuyMFSh/view?usp=drivesdk",
            experiencia: "6 meses - 1 ano",
        },
        {
            id: 1,
            nome: 'Bruna Pereira ',
            whatsapp: "81998232674",
            cidade: "Recife",
            estado: "Pernambuco ",
            pais: 'Brasil',
            servico: "Social Média, Designer, Fotógrafo, Filmmaker",
            descricao: 'Atuo como social media e coordenadora de comunicação em uma agência digital, além de fazer a captação e edição de conteúdos audiovisuais. ',
            portfolio: "https://www.behance.net/brunamirely",
            experiencia: "3 - 5 anos",
        },
        {
            id: 1,
            nome: 'Hugo Aquino',
            whatsapp: "81 9 91151433",
            cidade: "Recife",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Social Média, Designer, Designer gráfico, Fotógrafo, Filmmaker",
            descricao: 'Designer de assessoria de comunicação',
            portfolio: "https://www.behance.net/hugoaquino3",
            experiencia: "+5 anos",
        },
        {
            id: 1,
            nome: 'Caio Arruda',
            whatsapp: "(81)998378334",
            cidade: "Paulista",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Copywritter, Email Marketing, Fotógrafo, Filmmaker",
            descricao: 'Estudante de cinema e audiovisual, atuando na área desde 2021, onde teve sua estreia em festival para realizadores estreantes em Londres com o curta metragem ARRUDA: EM CARTAZ DESDE 2002. Caio Arruda também roteirizou o curta-metragem ART que teve sua estreia no teatro do parque em um evento exclusivo para a exibição e roda de debate do filme que recebeu menção honrosa em festival internacional. Desde então, Caio já produziu campanha publicitária para construtora Tenório Simões, Roteirizou e dirigiu o curta metragem Encontro que está em fase de finalização e produziu cerca de 15 clipes, sua maioria sendo em parceria com a banda hóspedes da rua rosa, que participou do festival de inverno de Garanhuns e teve as fotos do evento realizadas por Caio.  Em 2023 Caiu já participou da produção de três videoclipes, um curta metragem, dirigiu e roteirizou um fashion film em parceria com alunos de Design da UFPE CAMPUS DE CARUARU e segue no desenvolvimento de novos projetos e sonhos artísticos .',
            portfolio: "https://www.behance.net/caioarrudaph",
            experiencia: "1 - 2 anos",
        },
        {
            id: 1,
            nome: 'Monalisa Medeiros',
            whatsapp: "81999886390",
            cidade: "Gravatá PE",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Social Média, Filmmaker",
            descricao: 'Trabalho como social media a mais de 3 anos, atuo em todo e qualquer trabalho gráfico, assinando minhas artes como designer, faço letreiros em forma de mural em paredes e assim sou conhecida por minha marca MONARTE ',
            portfolio: "https://instagram.com/soumonarte?igshid=MzRlODBiNWFlZA==",
            experiencia: "2 - 3 anos",
        },
        {
            id: 1,
            nome: 'Beatriz Maia Dionísio Ferreira ',
            whatsapp: "5585996179907",
            cidade: "Fortaleza",
            estado: "Ceará",
            pais: 'Brasil',
            servico: "Social Média, Copywritter, Email Marketing, Gestor de Tráfego, Fotógrafo",
            descricao: 'Atualmente trabalho como analista de performance digital, onde minha principal função é analisar e criar estratégias de tráfego e performance para o aplicativo da empresa. Além disso, sou fotógrafa de eventos, famílias, eventos corporativos, gestante e mais. Também atuou como social media para uma oficina de caminhões. ',
            portfolio: "https://www.instagram.com/fotografiabiaferreira/",
            experiencia: "+5 anos",
        },
        {
            id: 1,
            nome: 'LAYSA MAIRA BORGES SILVA DE BARROS',
            whatsapp: "7999973-5234",
            cidade: "Aracaju",
            estado: "Sergipe",
            pais: 'Brasil',
            servico: "Social Média, Designer, Desenvolvedor de Landing Page, Designer gráfico, Gestor de Tráfego",
            descricao: 'Competências: Google Analytics, Google Ads, Google Meu Negócio, Corel Draw, Photoshop, Redes Sociais, Instagram e outros. Mais de 15 anos na área de marketing digital. ',
            portfolio: "https://www.instagram.com/ideia.digital/",
            experiencia: "+5 anos",
        },
        {
            id: 1,
            nome: 'Álvaro Gabriel Silva Nascimento ',
            whatsapp: "(81)99375-6363",
            cidade: "Recife",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Designer, Desenvolvedor de Landing Page, Designer gráfico",
            descricao: 'Eu sei fazer landing pages bem elaboradas e sites responsivos com uma boa interação de usuário. ',
            portfolio: "https://github.com/AlvaroNasc01",
            experiencia: "6 meses - 1 ano",
        },
        {
            id: 1,
            nome: 'Guilherme Pedro',
            whatsapp: "(81) 99694-8689",
            cidade: "Recife",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Social Média, Copywritter",
            descricao: '"Tenho experiência com social media em agências e diretamente com profissionais que vendem hora (personal trainers, nutricionistas). Atualmente trabalho como customer success numa empresa digital chamada Personal Launch e procurando os primeiros trabalhos em copywriting. Sou social media certificado pelo Novo Mercado e aluno da Formação de Gestão de Marketing Digital e Formação de Copywriting da mesma instituição.',
            portfolio: "https://drive.google.com/file/d/1oZJFPcqRXmRGbLYGJ886XaaXlbCUnd8B/view?usp=drivesdk",
            experiencia: "1 - 2 anos",
        },
        {
            id: 1,
            nome: 'Mayson Carvalho da Silva ',
            whatsapp: "81984039833",
            cidade: "Recife",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Gestor de Tráfego",
            descricao: 'Atualmente trabalho como estrategista digital,  subo campanha, analiso métrica e trago leads de qualidades para cada empreendimento. ',
            portfolio: "",
            experiencia: "0 - 6 meses",
        },
        {
            id: 1,
            nome: 'Suellen Sales Silva ',
            whatsapp: "81 998450036",
            cidade: "Recife",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Social Média, Fotógrafo, Filmmaker",
            descricao: 'Sou profissional da fotografia e vídeo, há mais de 10 anos produzindo imagens para as redes sociais e ecommerce para grandes e pequenas marcas, tais como Esposende, Ferreira Costa, Amázzoni Gin, San Paolo,  Recanto Paraibano e entre outras marcas.',
            portfolio: "https://suellensalesfotografias.myportfolio.com/",
            experiencia: "+5 anos",
        },
        {
            id: 1,
            nome: 'Guilherme Carvalho',
            whatsapp: "87988581617",
            cidade: "Salgueiro",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Designer, Designer gráfico",
            descricao: 'Faço artes para as redes sociais. Trabalho com profissionais de alguma área, lojas, eventos, entre outros',
            portfolio: "https://drive.google.com/drive/folders/1UJ-fsWp7IHtaLuOQQfoSPz7ktSO5Reoj?usp=share_link",
            experiencia: "2 - 3 anos",
        },
        {
            id: 1,
            nome: 'Hannah Letícia Gomes Aragão ',
            whatsapp: "81 985182145",
            cidade: "Recife",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Social Média, Copywritter, Especialista em SEO",
            descricao: 'Iniciei minha experiência profissional em assessoria de comunicação, posteriormente passei por comunicação interna de uma distribuidora de remédios. Atuei na redação online do Diário de Pernambuco e na sequência acumulei experiências na área de marketing em uma agência atuando como social media. Passei por diferentes redações, destacando finanças e esportes e atualmente trabalho no portal de notícias Seu Crédito Digital.',
            portfolio: "clippings.me/hannaharagao",
            experiencia: "2 - 3 anos",
        },
        {
            id: 1,
            nome: 'Brenda Bezerra Dias',
            whatsapp: "(81)99786-2270",
            cidade: "Recife",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Social Média, Email Marketing, Desenvolvedor de Landing Page, Gestor de Tráfego",
            descricao: 'Estudante de Publicidade e Propaganda na UFPE com uma paixão por comunicação e marketing. Com quase 3 anos de experiência profissional, adquiri habilidades valiosas em diversas áreas, incluindo produção de eventos, planejamento estratégico e análise de dados. Atualmente, trabalho em uma empresa de tecnologia em saúde, atuando na equipe de Marketing.',
            portfolio: "https://www.instagram.com/p/Cqq0Gv5L3in/?img_index=1",
            experiencia: "2 - 3 anos",
        },
        {
            id: 1,
            nome: 'EDVALDO PAIVA',
            whatsapp: "81985558125",
            cidade: "Vitória de Santo Antão",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Designer gráfico, Fotógrafo, Filmmaker",
            descricao: 'Sou graduando em Jornalismo e trabalho administrando uma página no Instagram e site de nome "O Povo Vitória".',
            portfolio: "https://www.instagram.com/opovovitoria/",
            experiencia: "3 - 5 anos",
        },
        {
            id: 1,
            nome: 'Maria Eduarda Marins Magalhães',
            whatsapp: "(87)9.9911-5922",
            cidade: "Recife ",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Social Média, Designer gráfico",
            descricao: 'Trabalho com posts para social media e criação de inserida de visual, dentro muitas outras áreas do design.',
            portfolio: "https://www.behance.net/meduardamac5f0",
            experiencia: "2 - 3 anos",
        },
        {
            id: 1,
            nome: 'Alessandro Santos',
            whatsapp: "81996658910",
            cidade: "Paulista",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Social Média, Designer, Designer gráfico, Gestor de Tráfego",
            descricao: 'faço trabalhos de comunicação digital desde do planejamento até a produção e lançamento, sempre fui apaixonado por marketing e tive muita facilidade com ferramentas de design digital, então juntei os dois para iniciar nessa nova carreira ;)',
            portfolio: "https://www.instagram.com/dizaisantos/",
            experiencia: "6 meses - 1 ano",
        },
        {
            id: 1,
            nome: 'João Vitor da Silva ',
            whatsapp: "(81) 9 9460-8193",
            cidade: "Recife",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Social Média, Copywritter",
            descricao: 'Estudante de Publicidade e Propaganda na Universidade Federal de Pernambuco (UFPE), Estrategista digital, Copywriting e heavy user das redes sociais. Entre as minhas afinidades e principais experiências profissionais estão as áreas de: planejamento em comunicação, produção de conteúdo para as diferentes plataformas digitais e gerenciamento de campanhas para mídia online.Além disso, também atuo no setor de entretenimento produzindo e desenvolvendo estratégias de comunicação para eventos executivos, shows e festivais.',
            portfolio: "https://www.linkedin.com/in/jo%C3%A3o-vitor-499529230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            experiencia: "3 - 5 anos",
        },
        {
            id: 1,
            nome: 'Luiz Felipe Casado',
            whatsapp: "81999077869",
            cidade: "Recife",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Gestor de Tráfego",
            descricao: 'Gestor de Tráfego iniciante, busco oportunidades de me desenvolver na área. Capacitado para gerenciar campanhas no Google Ads e Meta Ads.',
            portfolio: "",
            experiencia: "0 - 6 meses",
        },
        {
            id: 1,
            nome: 'Bianca Lucena da Silva Rocha',
            whatsapp: "+55 (81) 98794-1870",
            cidade: "Igarassu",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Social Média, Designer, Copywritter, Especialista em SEO, Designer gráfico, Gestor de Tráfego, Fotógrafo, Filmmaker",
            descricao: `"Sou uma profissional com mais de 3 anos de experiência em branding e comunicação, uma executora comunicadora apaixonada por mídias sociais desde os 12 anos. Durante a minha jornada profissional já trabalhei em empresas como a Eikon Soluções e também sou empreendedora, além de estudante de Publicidade e Propaganda — Comunicação Social na UFPE.

            Experiência em atividades:
            - Gestão dos projetos de rebranding.
            - Criação de identidade visual e manual de marca.
            - Gestão de mídias sociais (Instagram, YouTube, LinkedIn).
            - Design para mídias sociais.
            - Criação de conteúdo estratégico para multicanais.
            - Desenvolvimento de linha editorial e calendário mensal de conteúdo.
            - Copywriting/redação para mídias sociais.
            - Captação e edição de fotografias e filmagens corporativas.
            - Cobertura de mídia em eventos.
            - Construção de posicionamento estratégico das marcas nas mídias sociais.
            - Direcionamento de imagem/decoração/equipamentos no podcast ao vivo + cobertura de mídia para redes sociais.
            - Assessoria da marca pessoal.
            - Gestão de tráfego pago.
            - Mensuração de métricas das mídias sociais para análise de resultados.
            - Insights de comportamento e mercado.
            - Gerenciamento e análises de resultados."`,
            portfolio: "https://www.behance.net/biancalucena2",
            experiencia: "3 - 5 anos",
        },
        {
            id: 1,
            nome: 'JOSÉ LUIS GARTNER',
            whatsapp: "(11)991864866",
            cidade: "Recife",
            estado: "Pernambuco",
            pais: 'Brasil',
            servico: "Social Média, Designer, Copywritter, Designer gráfico",
            descricao: `
            "Publicitário formado pela ESPM e Especialista em Marketing Imobiliário, desde 1988, estou a frente da PUBLIMIX / PACTO PROPAGANDA , dando retaguarda total a área de marketing das empresas, oferecendo soluções abrangentes.

            🏆 VASTA EXPERIÊNCIA
            
            Com três décadas de experiência acumulada, tenho apostado na parceria e envolvimento total com os desafios de marketing de nossos clientes e o resultado prático dessa filosofia tem sido uma relação perene e de vínculos estáveis. 
            
            🚀 EXPERTISE
            
            > Assessoria em Planejamento Estratégico de Marketing e de Comunicação,
            > Criação e Releitura de LOGO
            > Projeto de Identidade Visual
            > Design Gráfico
            > Branding
            > Marketing Digital
            > Criativos e Conteúdo para Social Media
            > Desenvolvimento de E-books e Folders Eletrônicos
            > Produção de vídeos
            > Organização de Eventos Corporativos
            
            Para desenvolvimento de soluções integradas, trabalho com equipes multidisciplinares e conto com o apoio de consultores e colaboradores em áreas específicas da comunicação.
             
            🔑 MARKETING IMOBILIÁRIO
            
            Desde 1992, atuo fortemente no atendimento ao Mercado Imobiliário através da PUBLIMIX, braço da agência criado para atender com exclusividade este setor, participando de vários lançamentos de Loteamentos, Condomínios Residenciais e Comerciais o que contribuiu para eu acumular uma experiência sólida e abrangente neste segmento específico.
            
            📢 PORTFÓLIO
            
            Contamos com um amplo repertório de cases em diversos segmentos de mercado.
            
            "
            `,
            portfolio: "https://instagram.com/gartner.designer?igshid=OGQ5ZDc2ODk2ZA==",
            experiencia: "+5 anos",
        },
    ];

    return (
        <>
            <Head title="Colisio | Profissionais" />
            <Content page="component">
                <BlockHead size="lg" className='p-0' wide="sm">
                    <BlockBetween className="g-3">
                        <BlockContent>
                            <BlockTitle>Bem-vindos a Colisio</BlockTitle>
                            <BlockDes className="text-soft">
                                <p>Tenha acesso rápido aos COLISERs (profissionais de seu interesse), com isso economize tempo e burocracia nos serviços que você contrata.</p>
                            </BlockDes>
                        </BlockContent>
                    </BlockBetween>
                    {/* <BlockTitle tag="h2" className="fw-normal mb-0">
                            Bem vindos a Colisio
                        </BlockTitle>
                        <BlockDes>
                            <p className="mt-0 mb-0">
                                Tenha acesso rápido aos profissionais de seu interesse, E economize tempo e burocracia
                                contrate um coliser.
                            </p>
                        </BlockDes> */}
                    <BlockDes>
                        <p className="text-soft mt-3 mb-0">
                            Caso queira buscar por um serviço sem COLISER (profissional) específico, clique abaixo:
                        </p>
                        <Link to="/colisio/servicos" className="btn btn-dark d-flex justify-content-start col-lg-5" p='0' m='0' color="dark">
                            {/* <Button outline className="btn-dim d-flex justify-content-start" p='0' m='0' color="dark"> */}
                                <Icon name="curve-down-right" />
                                <span>Visualizar serviços disponíveis</span>
                            {/* </Button> */}
                        </Link>
                    </BlockDes>
                </BlockHead>

                <Block size="lg" className='p-0'>
                    <BlockHead className='p-0'>
                        <BlockDes>
                            <p className="text-soft mt-4 mb-0">
                                Caso queira buscar um COLISER ou saber mais sobre cada um, veja a lista abaixo e clique para ver mais:
                            </p>
                        </BlockDes>
                    </BlockHead>

                    <PreviewCard>
                        <ReactDataTable
                            data={userData}
                            columns={dataTableColumns2}
                            pagination
                            className="nk-tb-list"
                        // selectableRows
                        />
                    </PreviewCard>
                </Block>
            </Content>
            <Modal className="modal-lg" isOpen={isOpen} toggle={toggle} backdrop='static'>
                <ModalHeader
                    toggle={toggle}
                    close={
                        <button className="close" onClick={() => {
                            toggle()
                            setDadosColiser(null)
                        }}>
                            <Icon name="cross" />
                        </button>
                    }
                >
                    Dados Coliser
                </ModalHeader>
                <ModalBody>
                    {/* <div className="card-inner"> */}
                    {
                        dadosColiser === null ? (
                            <Block>

                            </Block>
                        ) : (
                            <Block>
                                <BlockHead>
                                    <BlockTitle tag="h5">{dadosColiser.nome}</BlockTitle>
                                    <p>{dadosColiser.descricao}</p>
                                </BlockHead>
                                <div className="profile-ud-list">
                                    <div className="profile-ud-item">
                                        <div className="profile-ud wider">
                                            <span className="profile-ud-label">Serviço</span>
                                            <span className="profile-ud-value">{dadosColiser.servico}</span>
                                        </div>
                                    </div>
                                    {/* <div className="profile-ud-item">
                                        <div className="profile-ud wider">
                                            <span className="profile-ud-label">Email</span>
                                            <span className="profile-ud-value">{dadosColiser.email}</span>
                                        </div>
                                    </div> */}
                                    <div className="profile-ud-item">
                                        <div className="profile-ud wider">
                                            <span className="profile-ud-label">Experiência</span>
                                            <span className="profile-ud-value">{dadosColiser.experiencia}</span>
                                        </div>
                                    </div>
                                    {/* <div className="profile-ud-item">
                                        <div className="profile-ud wider">
                                            <span className="profile-ud-label">Certificados</span>
                                            <span className="profile-ud-value">{dadosColiser.cert_qualif}</span>
                                        </div>
                                    </div> */}
                                    {/* <div className="profile-ud-item">
                                        <div className="profile-ud wider">
                                            <span className="profile-ud-label">Disponibilidade</span>
                                            <span className="profile-ud-value">{dadosColiser.disponibilidade}</span>
                                        </div>
                                    </div> */}
                                    <div className="profile-ud-item">
                                        <div className="profile-ud wider">
                                            <span className="profile-ud-label">Portfólio</span>
                                            <span className="profile-ud-value">
                                            {/* {
                                                dadosColiser.portfolio === '' ? <span>Não informado</span> : ( */}
                                                    <Button className="btn-dim" onClick={() => {
                                                        window.open(dadosColiser.portfolio, '_blank')
                                                    }}>
                                                        <Icon className='me-1' name="eye" />
                                                        Clique
                                                    </Button>
                                                {/* )
                                            } */}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Block>
                        )
                    }

                    {/* <Block>
                            <BlockHead className="nk-block-head-line">
                                <BlockTitle tag="h6" className="overline-title text-base">
                                    Additional Information
                                </BlockTitle>
                            </BlockHead>
                            <div className="profile-ud-list">
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Joining Date</span>
                                        <span className="profile-ud-value">08-16-2018 09:04PM</span>
                                    </div>
                                </div>
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Reg Method</span>
                                        <span className="profile-ud-value">Email</span>
                                    </div>
                                </div>
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Country</span>
                                        <span className="profile-ud-value">teste</span>
                                    </div>
                                </div>
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Nationality</span>
                                        <span className="profile-ud-value">teste</span>
                                    </div>
                                </div>
                            </div>
                        </Block> */}

                    {/* <div className="nk-divider divider md"></div> */}
                    {/* </div> */}
                </ModalBody>
                <ModalFooter className="bg-light d-flex flex-row">
                    {/* <span className="sub-text">&copy; Colisio</span> */}
                    <Button className="btn-dim d-flex justify-content-start" p='0' m='0' color="secondary" onClick={
                        () => {
                            toggle()
                            setDadosColiser(null)
                        }
                    }>
                        {/* <Icon name="list-thumb" /> */}
                        <Icon name="cross" />
                        <span>Fechar</span>
                    </Button>
                    <Button className="btn d-flex justify-content-start" p='0' m='0' color="success" onClick={() => {
                        enviarMensagem(dadosColiser)
                    }}>
                        {/* <Icon name="list-thumb" /> */}
                        <Icon style={{ color: '#fff' }} name="curve-down-right" />
                        <span style={{ color: '#fff' }}>Tenho interesse</span>
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};
export default Colisio;
