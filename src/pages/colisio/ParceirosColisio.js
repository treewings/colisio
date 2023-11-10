import React, { useState } from "react";
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
    ReactDataTable
} from "../../components/Component";
import viralizy from '../../images/agenciasParceiras/viralizy.jpg'
import Icon from "../../components/icon/Icon";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";


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
        const mensagem = encodeURIComponent(`Olá, tenho interesse em contratar a Agência Parceira da Colisio, ${dados.nome},
podemos conversar ?`);
        window.open(`https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`);
        toggle()
        setDadosColiser(null)
    };

    // const getInitials = (nomeCompleto) => {
    //     const nomes = nomeCompleto.split(' ');
    //     if (nomes.length > 1) {
    //         return (nomes[0][0] + nomes[1][0]).toUpperCase();
    //     }
    //     return nomes[0][0].toUpperCase();
    // }

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
                        {/* <UserAvatar theme='dark' text={getInitials(row.nome)} ></UserAvatar> */}
                        <span className="tb-product">
                            <img src={row.logo} alt='' className="thumb" />
                        </span>
                        <div className="user-info d-flex flex-column justify-content-start">
                            <span className="text-success tb-lead text-start">
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
            name: "Tempo de Mercado",
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
            nome: 'Viralizy Digital',
            whatsapp: "88997035462",
            cidade: "Juazeido do Norte",
            estado: "Ceará",
            pais: 'Brasil',
            servico: "Social Média, Designer, Desenvolvedor de Landing Page, Designer gráfico, Gestor de Tráfego, Fotógrafo, Filmmaker",
            descricao: '',
            portfolio: "viralizy.com.br",
            experiencia: "2 - 3 anos",
            logo: viralizy
        },
    ];

    return (
        <>
            <Head title="Colisio | Profissionais" />
            <Content page="component">
                <BlockHead size="lg" className='p-0' wide="sm">
                    <BlockBetween className="g-3">
                        <BlockContent>
                            <BlockTitle style={{ color: '#05B055' }}>Agências Parceiros</BlockTitle>
                            <BlockDes className="text-soft">
                                <p>Tenha acesso rápido às Agências Parceiras.</p>
                                <p>Não se preocupe com proficionais ou servições, com as agências parceiras você também terá o seu objetivo concluído.</p>
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
                </BlockHead>

                <Block size="lg" className='p-0'>

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
                                            <span className="profile-ud-label">Agência</span>
                                            <span className="tb-product">
                                                <img src={dadosColiser.servico} alt="product" className="thumb" />
                                            </span>
                                        </div>
                                    </div>
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
                                            <span className="profile-ud-label">Tempo de Mercado</span>
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
