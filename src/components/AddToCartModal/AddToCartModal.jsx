import Modal from 'react-bootstrap/Modal';
import './AddToCartModal.css'


const AddToCartModal = (props) => {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title>
                    {props.msg}
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <button className="closeAlertButton" onClick={props.onHide}>Seguir comprando</button>
            </Modal.Footer>
        </Modal>
    );
}



export default AddToCartModal

