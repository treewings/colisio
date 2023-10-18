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
    BlockDes,
    BlockHead,
    BlockHeadContent,
    BlockContent,
    BlockBetween,
    BlockTitle,
    PreviewCard,
    ReactDataTable,
    UserAvatar
} from "../../components/Component";
import Icon from "../../components/icon/Icon";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { findUpper } from "../../utils/Utils";
import {
    // dataTableColumns2, 
    // userData
} from "../components/table/TableData";


const Colisio = () => {
    const [dadosColiser, setDadosColiser] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = (dadosColiser) => {
        setDadosColiser(dadosColiser)
        setIsOpen(!isOpen)
    };

    const enviarMensagem = () => {
        const numero = '+5581983487214';  // Substitua pelo número desejado
        const mensagem = encodeURIComponent(`Olá, tenho interesse em contratar $$$$$$$$, 
sobre demandas de $$$$$$$$$, 
podemos conversar ?`);
        window.open(`https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`);
    };

    const dataTableColumns2 = [
        {
            name: <p className="ms-3 pt-3">User</p>,
            selector: (row) => row.name,
            compact: true,
            grow: 2,
            style: { paddingRight: "20px" },
            cell: (row) => (
                <Button className="btn-dim" p='0' m='0' color="transparent" onClick={() => {
                    toggle(row)
                    console.log(row)
                }}>
                    <div className="user-card">
                        <UserAvatar theme={row.avatarBg} text={findUpper(row.name)} ></UserAvatar>
                        <div className="user-info d-flex flex-column justify-content-start">
                            <span className="tb-lead text-start">
                                {row.name}{" "}
                                <span
                                    className={`dot dot-${row.status === "Active" ? "success" : row.status === "Pending" ? "warning" : "danger"
                                        } d-md-none`}
                                ></span>
                            </span>
                            <span>{row.email}</span>
                        </div>
                    </div>
                </Button>
            ),
            sortable: true,
        },
        {
            name: "Balance",
            selector: (row) => row.balance,
            minWidth: "140px",
            cell: (row) => (
                <span className="tb-amount">
                    {row.balance} <span className="currency">USD</span>
                </span>
            ),
            sortable: true,
            hide: 480,
        },
        {
            name: "Phone",
            selector: (row) => row.phone,
            sortable: true,
            cell: (row) => <span>{row.phone}</span>,
            hide: "md",
        },
        {
            name: "Verified",
            selector: (row) => row.verified,
            sortable: true,
            minWidth: "170px",
            hide: "md",
            cell: (row) => (
                <ul className="list-status d-flex">
                    <li>
                        <Icon
                            className={`text-${row.emailStatus === "success" ? "success" : row.emailStatus === "pending" ? "info" : "secondary"
                                }`}
                            name={`${row.emailStatus === "success"
                                ? "check-circle"
                                : row.emailStatus === "alert"
                                    ? "alert-circle"
                                    : "alarm-alt"
                                }`}
                        ></Icon>{" "}
                        <span>Email</span>
                    </li>
                    <li>
                        <Icon
                            className={`text-${row.kycStatus === "success"
                                ? "success"
                                : row.kycStatus === "pending"
                                    ? "info"
                                    : row.kycStatus === "warning"
                                        ? "warning"
                                        : "secondary"
                                }`}
                            name={`${row.kycStatus === "success" ? "check-circle" : row.kycStatus === "pending" ? "alarm-alt" : "alert-circle"
                                }`}
                        ></Icon>{" "}
                        <span>KYC</span>
                    </li>
                </ul>
            ),
        },
        {
            name: "Last Login",
            selector: (row) => row.lastLogin,
            sortable: true,
            cell: (row) => <span>{row.lastLogin}</span>,
            hide: "lg",
        },
        {
            name: "Status",
            selector: (row) => row.status,
            sortable: true,
            hide: "sm",
            cell: (row) => (
                <span
                    className={`tb-status ms-1 text-${row.status === "Active" ? "success" : row.status === "Pending" ? "warning" : "danger"
                        }`}
                >
                    {row.status}
                </span>
            ),
        },
    ];

    const userData = [
        {
          id: 1,
          avatarBg: "purple",
          name: "Abu Bin Ishtiyak",
          displayName: "Ishtiak",
          dob: "10 Aug, 1980",
          role: "Customer",
          checked: false,
          email: "info@softnio.com",
          balance: "35,040.34",
          phone: "818474958",
          emailStatus: "success",
          kycStatus: "success",
          lastLogin: "10 Feb 2020",
          status: "Active",
          address: "2337 Kildeer Drive",
          state: "Kentucky",
          country: "Canada",
          designation: "UI/UX Designer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 2,
          avatarBg: "purple",
          image: 'User3',
          name: "Ashley Lawson",
          dob: "10 Sept, 1990",
          role: "Investor",
          email: "ashley@softnio.com",
          balance: "580.00",
          checked: false,
          phone: "1243941787",
          emailStatus: "success",
          kycStatus: "pending",
          lastLogin: "07 Feb 2020",
          status: "Pending",
          country: "United States",
          designation: "UI/UX Designer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 3,
          avatarBg: "info",
          name: "Joe Larson",
          dob: "19 Jan, 1985",
          role: "Customer",
          email: "larson@example.com",
          balance: "32,000.34",
          checked: false,
          phone: "1686032320",
          emailStatus: "success",
          kycStatus: "success",
          lastLogin: "04 Feb 2020",
          status: "Active",
          country: "England",
          designation: "UI/UX Designer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 4,
          avatarBg: "danger",
          name: "Jane Montgomery",
          dob: "24 April, 1985",
          role: "Subscriber",
          email: "jane84@example.com",
          balance: "0.00",
          checked: false,
          phone: "4392715360",
          emailStatus: "alert",
          kycStatus: "alert",
          lastLogin: "01 Feb 2020",
          status: "Suspend",
          country: "United States",
          designation: "UI/UX Designer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 5,
          avatarBg: "purple",
          name: "Frances Burns",
          dob: "30 May, 2000",
          role: "Manager",
          image: 'User',
          email: "frances@example.com",
          balance: "42.50",
          checked: false,
          phone: "6391303150",
          emailStatus: "pending",
          kycStatus: "error",
          lastLogin: "31 Jan 2020",
          status: "Active",
          country: "Bangladesh",
          designation: "UI/UX Designer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 6,
          avatarBg: "primary",
          name: "Alan Butler",
          dob: "10 Feb, 1997",
          role: "Investor",
          image: 'User2',
          email: "butler@example.com",
          balance: "440.34",
          checked: false,
          phone: "9633091706",
          emailStatus: "pending",
          kycStatus: "warning",
          lastLogin: "18 Jan 2020",
          status: "Inactive",
          country: "India",
          designation: "UI/UX Designer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 7,
          avatarBg: "warning",
          name: "Victoria Lynch",
          dob: "02 May, 1993",
          role: "Investor",
          email: "victoria@example.com",
          balance: "59,400.68",
          checked: false,
          phone: "8119854846",
          emailStatus: "success",
          kycStatus: "success",
          lastLogin: "15 Jan 2020",
          status: "Active",
          country: "China",
          designation: "UI/UX Designer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 8,
          avatarBg: "success",
          name: "Patrick Newman",
          dob: "15 Feb, 1997",
          role: "Customer",
          email: "patrick@example.com",
          balance: "30.00",
          checked: false,
          phone: "9422384474",
          emailStatus: "success",
          kycStatus: "pending",
          lastLogin: "08 Jan 2020",
          status: "Active",
          country: "India",
          designation: "UI/UX Designer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 9,
          avatarBg: "purple",
          name: "Jane Harris",
          dob: "28 Feb, 1985",
          role: "Customer",
          image: 'User4',
          email: "harris@example.com",
          balance: "5,530.23",
          checked: false,
          phone: "1234472384",
          emailStatus: "pending",
          kycStatus: "pending",
          lastLogin: "02 Jan 2020",
          status: "Pending",
          country: "Vietnam",
          designation: "UI/UX Designer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 10,
          avatarBg: "purple",
          name: "Emma Walker",
          dob: "30 Dec, 1998",
          role: "Investor",
          email: "walker@example.com",
          balance: "55.00",
          checked: false,
          phone: "4634717173",
          emailStatus: "success",
          kycStatus: "success",
          lastLogin: "25 Dec 2019",
          status: "Active",
          country: "United States",
          designation: "UI/UX Designer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 11,
          avatarBg: "pink",
          name: "Lilja Peltola",
          dob: "30 Dec, 1998",
          role: "Investor",
          email: "lilja@example.com",
          balance: "105.00",
          checked: false,
          phone: "4634717173",
          emailStatus: "success",
          kycStatus: "pending",
          lastLogin: "25 Dec 2019",
          status: "Active",
          country: "Canada",
          designation: "Web Developer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 12,
          avatarBg: "secondary",
          name: "Annette Hunter",
          dob: "30 Dec, 1998",
          role: "Investor",
          email: "hunter@example.com",
          balance: "55.00",
          checked: false,
          phone: "4634717173",
          emailStatus: "success",
          kycStatus: "success",
          lastLogin: "25 Dec 2019",
          status: "Pending",
          country: "United States",
          designation: "UI/UX Designer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 13,
          avatarBg: "pink",
          name: "Sara Koivisto",
          dob: "30 Dec, 1998",
          role: "Customer",
          email: "sara@example.com",
          balance: "165.00",
          checked: false,
          phone: "4634717173",
          emailStatus: "rejected",
          kycStatus: "pending",
          lastLogin: "25 Dec 2019",
          status: "Active",
          country: "Russia",
          designation: "Web Developer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 14,
          avatarBg: "blue",
          name: "Kianna Pham",
          dob: "30 Dec, 1998",
          role: "Admin",
          email: "kiana@example.com",
          balance: "55.00",
          checked: false,
          phone: "4634717173",
          emailStatus: "success",
          kycStatus: "rejected",
          lastLogin: "25 Dec 2019",
          status: "Suspend",
          country: "South Korea",
          designation: "Accountant",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 15,
          avatarBg: "pink",
          name: "Raymond Atkins",
          dob: "30 Dec, 1998",
          role: "Customer",
          image: 'User4',
          email: "sara@example.com",
          balance: "165.00",
          checked: false,
          phone: "4634717173",
          emailStatus: "rejected",
          kycStatus: "pending",
          lastLogin: "25 Dec 2019",
          status: "Active",
          country: "Russia",
          designation: "Web Developer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 16,
          avatarBg: "blue",
          name: "Amira Talley",
          dob: "30 Dec, 1998",
          role: "Admin",
          email: "amira@example.com",
          balance: "55.00",
          checked: false,
          phone: "4634717173",
          emailStatus: "pending",
          kycStatus: "rejected",
          lastLogin: "25 Dec 2019",
          status: "Active",
          country: "Saudi Arabia",
          designation: "Lecturer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 17,
          avatarBg: "secondary",
          name: "Lana Steiner",
          dob: "30 Dec, 1998",
          role: "Admin",
          email: "steinar@example.com",
          balance: "55.00",
          checked: false,
          phone: "4634717173",
          emailStatus: "pending",
          kycStatus: "rejected",
          lastLogin: "25 Dec 2019",
          status: "Pending",
          country: "Latvia",
          designation: "Accountant",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 18,
          avatarBg: "warning",
          name: "Joshua Mcnair",
          dob: "30 Dec, 1998",
          image: 'User4',
          role: "Admin",
          email: "joshua@example.com",
          balance: "55.00",
          checked: false,
          phone: "4634717173",
          emailStatus: "pending",
          kycStatus: "rejected",
          lastLogin: "25 Dec 2019",
          status: "Suspend",
          country: "Ireland",
          designation: "Web Developer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 19,
          avatarBg: "secondary",
          name: "Asiya Wolff",
          dob: "30 Dec, 1998",
          role: "Customer",
          email: "asia@example.com",
          balance: "55.00",
          checked: false,
          phone: "4634717173",
          emailStatus: "success",
          kycStatus: "success",
          lastLogin: "25 Dec 2019",
          status: "Active",
          country: "Latvia",
          designation: "Accountant",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
        {
          id: 20,
          avatarBg: "warning",
          name: "Fox Mccloud",
          dob: "30 Dec, 1998",
          role: "Admin",
          email: "fox@example.com",
          balance: "55.00",
          checked: false,
          phone: "4634717173",
          emailStatus: "pending",
          kycStatus: "rejected",
          lastLogin: "25 Dec 2019",
          status: "Suspend",
          country: "Ireland",
          designation: "Web Developer",
          projects: "213",
          performed: "87.5",
          tasks: "587",
        },
    ];

    return (
        <>
            <Head title="Colisio" />
            <Content page="component">
                <BlockHead size="lg" className='p-0' wide="sm">
                        <BlockBetween className="g-3">
                            <BlockContent>
                                <BlockTitle>Bem vindos a Colisio</BlockTitle>
                                <BlockDes className="text-soft">
                                    <p>Tenha acesso rápido aos profissionais de seu interesse, E economize tempo e burocracia contrate um coliser.</p>
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
                                Caso queira buscar por um serviço sem profissional específico, clique abaixo:
                            </p>
                            <Button outline className="btn-dim d-flex justify-content-start" p='0' m='0' color="dark">
                                <Icon name="curve-down-right" />
                                <span>Visualizar serviços disponíveis</span>
                            </Button>
                        </BlockDes>
                </BlockHead>

                <Block size="lg" className='p-0'>
                    <BlockHead className='p-0'>
                        <BlockDes>
                            <p className="text-soft mt-4 mb-0">
                                Caso queira buscar um profissional ou saber mais sobre cada um, veja a lista abaixo e clique para ver mais:
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
                        <button className="close" onClick={toggle}>
                            <Icon name="cross" />
                        </button>
                    }
                >
                    Dados Coliser
                </ModalHeader>
                <ModalBody>
                    {/* <div className="card-inner"> */}
                        <Block>
                            <BlockHead>
                                <BlockTitle tag="h5">Personal Information</BlockTitle>
                                <p>Basic info, like your name and address, that you use on Nio Platform.</p>
                            </BlockHead>
                            <div className="profile-ud-list">
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Title</span>
                                        <span className="profile-ud-value">Mr.</span>
                                    </div>
                                </div>
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Full Name</span>
                                        <span className="profile-ud-value">teste</span>
                                    </div>
                                </div>
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Date de Birth</span>
                                        <span className="profile-ud-value">teste</span>
                                    </div>
                                </div>
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Surname</span>
                                        <span className="profile-ud-value">teste</span>
                                    </div>
                                </div>
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Mobile Number</span>
                                        <span className="profile-ud-value">teste</span>
                                    </div>
                                </div>
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Email Address</span>
                                        <span className="profile-ud-value">teste</span>
                                    </div>
                                </div>
                            </div>
                        </Block>

                        <Block>
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
                        </Block>

                        <div className="nk-divider divider md"></div>
                    {/* </div> */}
                </ModalBody>
                <ModalFooter className="bg-light d-flex flex-row">
                    {/* <span className="sub-text">&copy; Colisio</span> */}
                    <Button className="btn-dim d-flex justify-content-start" p='0' m='0' color="secondary" onClick={
                        () => {
                            toggle()
                        }
                    }>
                        {/* <Icon name="list-thumb" /> */}
                        <Icon name="cross" />
                        <span>Fechar</span>
                    </Button>
                    <Button className="btn d-flex justify-content-start" p='0' m='0' color="success" onClick={() => {
                        enviarMensagem()
                    }}>
                        {/* <Icon name="list-thumb" /> */}
                        <Icon style={{ color: '#fff' }} name="whatsapp" />
                        <span style={{ color: '#fff' }}>Tenho interesse</span>
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};
export default Colisio;
