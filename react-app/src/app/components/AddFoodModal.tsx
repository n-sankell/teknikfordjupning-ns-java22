import { Dispatch, SetStateAction } from "react";
import "./Content.css";

type Props = {
    setUpdate: Dispatch<SetStateAction<boolean>>;
    setShowAddModal: Dispatch<SetStateAction<boolean>>;
}

const AddFoodModal = (props: Props) => {

    return (
    <div className="modal-content">
        <h1 className='heading'>Add new food</h1>
        <div className='form-wrapper'>
            <form>
                <input type="text" required />
                
            </form>
        </div>
    </div>);
}

export default AddFoodModal;