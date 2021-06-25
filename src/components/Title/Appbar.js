import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faHome,
    faCity,
    faFileAlt,
    faHandsHelping,
    faComments,
    faAngleDoubleRight,
    faLink,
    faHandHoldingUsd,
    faChartLine,
    faUser,
    faCogs
} from '@fortawesome/free-solid-svg-icons'
import styles from './appbar.module.scss'
import { style } from '@material-ui/system'

const Appbar = () => {

    const [isDrawerOpen, setDrawerOpen] = useState(false)

    //for testing simulate if the user is an admin.
    const [isAdmin, setIsAdmin] = useState(true)
    const [currentPage, setCurrentPage] = useState('0')
    const [hideShow, setHideShow] = useState(false)

    const expandSideMenu = () => {
        setDrawerOpen(!isDrawerOpen)
        if (!isDrawerOpen) {
            setTimeout(() => {
                setHideShow(true)
            }, 400)
        } else {
            setHideShow(false)
        }
    }

    return (
        <React.Fragment>
            <div className={styles.header}>
                <div className={styles.leftTitle}>
                    <FontAwesomeIcon
                        className={styles.burgerMenu}
                        icon={faBars}
                        size="lg"
                        onClick={expandSideMenu}
                    />
                    <h5 className={styles.titleClient}><FontAwesomeIcon icon={faUser} />  Name of the client.</h5>
                </div>
            </div>
            <div className={`${styles.navCont} ${isDrawerOpen ? styles.expand : ''}`}>
                <div className={styles.nav}>
                    <div
                        className={`${styles.navItems} ${currentPage === '0' ? styles.active : styles.notActive}`}
                        onClick={() => setCurrentPage('0')}
                    >
                        <div className={styles.iconDiv}>
                            <FontAwesomeIcon className={styles.icon} size='lg' icon={faHome} />
                        </div>
                        <div>
                            <h6 className={`${hideShow ? styles.show : styles.hidden}`}>Home</h6>
                        </div>
                    </div>
                    <div
                        className={`${styles.navItems} ${currentPage === '1' ? styles.active : styles.notActive}`}
                        onClick={() => setCurrentPage('1')}
                    >
                        <div className={styles.iconDiv}>
                            <FontAwesomeIcon className={styles.icon} size='lg' icon={faCity} />
                        </div>
                        <div>
                            <h6 className={`${hideShow ? styles.show : styles.hidden}`}>Overview</h6>
                        </div>

                    </div>
                    <div
                        className={`${styles.navItems} ${currentPage === '2' ? styles.active : styles.notActive}`}
                        onClick={() => setCurrentPage('2')}
                    >
                        <div className={styles.iconDiv}>
                            <FontAwesomeIcon className={styles.icon} size='lg' icon={faFileAlt} />
                        </div>
                        <div>
                            <h6 className={`${hideShow ? styles.show : styles.hidden}`}>Compliance</h6>
                        </div>
                    </div>
                    <div
                        className={`${styles.navItems} ${currentPage === '3' ? styles.active : styles.notActive}`}
                        onClick={() => setCurrentPage('3')}
                    >
                        <div className={styles.iconDiv}>
                            <FontAwesomeIcon className={styles.icon} size='lg' icon={faHandHoldingUsd} />
                        </div>
                        <div>
                            <h6 className={`${hideShow ? styles.show : styles.hidden}`}>Opportunities</h6>
                        </div>

                    </div>
                    <div
                        className={`${styles.navItems} ${currentPage === '4' ? styles.active : styles.notActive}`}
                        onClick={() => setCurrentPage('4')}
                    >
                        <div className={styles.iconDiv}>
                            <FontAwesomeIcon className={styles.icon} size='lg' icon={faComments} />
                        </div>
                        <div>
                            <h6 className={`${hideShow ? styles.show : styles.hidden}`}>Communication</h6>
                        </div>
                    </div>
                    <div
                        className={`${styles.navItems} ${currentPage === '5' ? styles.active : styles.notActive}`}
                        onClick={() => setCurrentPage('5')}
                    >
                        <div className={styles.iconDiv}>
                            <FontAwesomeIcon className={styles.icon} size='lg' icon={faAngleDoubleRight} />
                        </div>
                        <div>
                            <h6 className={`${hideShow ? styles.show : styles.hidden}`}>Workflow</h6>
                        </div>
                    </div>
                    <div
                        className={`${styles.navItems} ${currentPage === '6' ? styles.active : styles.notActive}`}
                        onClick={() => setCurrentPage('6')}
                    >
                        <div className={styles.iconDiv}>
                            <FontAwesomeIcon className={styles.icon} size='lg' icon={faLink} />
                        </div>
                        <div>
                            <h6 className={`${hideShow ? styles.show : styles.hidden}`}>Linked Individuals</h6>
                        </div>
                    </div>
                    <div
                        className={`${styles.navItems} ${currentPage === '7' ? styles.active : styles.notActive}`}
                        onClick={() => setCurrentPage('7')}
                    >
                        <div className={styles.iconDiv}>
                            <FontAwesomeIcon className={styles.icon} size='lg' icon={faHandsHelping} />
                        </div>
                        <div>
                            <h6 className={`${hideShow ? styles.show : styles.hidden}`}>Financial relationships</h6>
                        </div>

                    </div>
                    <div
                        className={`${styles.navItems} ${currentPage === '8' ? styles.active : styles.notActive}`}
                        onClick={() => setCurrentPage('8')}
                    >
                        <div className={styles.iconDiv}>
                            <FontAwesomeIcon className={styles.icon} size='lg' icon={faChartLine} />
                        </div>
                        <div>
                            <h6 className={`${hideShow ? styles.show : styles.hidden}`}>Marketing</h6>
                        </div>
                    </div>
                    {isAdmin &&
                        <React.Fragment>
                            <hr></hr>
                            <div
                                className={`${styles.navItems} ${currentPage === '9' ? styles.active : styles.notActive}`}
                                onClick={() => setCurrentPage('9')}
                            >
                                <div className={styles.iconDiv}>
                                    <FontAwesomeIcon className={styles.icon} size='lg' icon={faCogs} />
                                </div>
                                <div>
                                    <h6 className={`${hideShow ? styles.show : styles.hidden}`}>Admin</h6>
                                </div>

                            </div>
                        </React.Fragment>
                    }
                </div>
            </div>
        </React.Fragment >
    )
}

export default Appbar