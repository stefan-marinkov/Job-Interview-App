import React, { useState } from 'react'
import './ListOfReports.scss'

import Modal from "react-modal";

Modal.setAppElement("#root");

const ListOfReports = props => {

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div className='ListOfReports'>
            <div className='inreports'>
                <div className='aboutRepo'>
                    <p>{props.companyName}</p>
                    <p className="headlinereport">Company</p>
                </div>
                <div className='aboutRepo'>
                    <p>{props.candidateName}</p>
                    <p className="headlinereport">Name</p>
                </div>
                <div className='aboutRepo'>
                    <p>{props.interviewDate.slice(4, 15)}</p>
                    <p className="headlinereport">Interview Date</p>
                </div>
                <div className='aboutRepo'>
                    <p>{props.status}</p>
                    <p className="headlinereport">Status</p>
                </div>
                <div className='aboutRepo btns'>
                    <i className="fa fa-eye" onClick={toggleModal} tia-hidden="true"></i>
                    <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModal}
                        contentLabel="My dialog"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={500}
                    >
                        <h2>{props.candidateName}</h2>
                        <div className='aboutAll'>
                            <div className='aboutC'>
                                <p>Company:</p>
                                <h4>{props.companyName}</h4>
                                <p>Interview Date:</p>
                                <h4>{props.interviewDate.slice(4, 15)}</h4>
                                <p>Phase:</p>
                                <h4>{props.phase}</h4>
                                <p>Status:</p>
                                <h4>{props.status}</h4>
                            </div>
                            <div className='aboutN'>
                                <h4>Notes:</h4>
                                <p>{props.note}</p>
                            </div>
                        </div>
                        <button className='btn' onClick={toggleModal}>Close</button>
                    </Modal>
                    <i className="fa fa-close" onClick={() => props.deleteReport(props.id)} tia-hidden="true"></i>
                </div>
            </div >
        </div >
    )
}

export default ListOfReports
