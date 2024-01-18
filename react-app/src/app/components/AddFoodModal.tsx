import { Dispatch, SetStateAction, useRef } from "react";
import { FoodsApi } from "../../generated";
import { AddFoodRequest } from "../../generated";
import "./AddFoodModal.css";

type Props = {
    setUpdate: Dispatch<SetStateAction<boolean>>;
    setShowAddModal: Dispatch<SetStateAction<boolean>>;
}

const AddFoodModal = (props: Props) => {
    const foodsApi = new FoodsApi();
    const foodName = useRef<string>();
    const foodRating = useRef<number>();

    const closeClick = (): void => {
        props.setShowAddModal(false);
    }
    const handleFoodNameChange = (foodNameEvent: any) => {
        foodName.current = foodNameEvent.target.value;
    }
    const handleFoodRatingChange = (foodRatingEvent: any) => {
        foodRating.current = foodRatingEvent.target.value;
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        try {
            const requestObject: AddFoodRequest = { food: { name: foodName.current, rating: foodRating.current } };
            const response = await foodsApi.addFood(requestObject);
            console.log(response);
            props.setUpdate(true);
        } catch (error) {
            console.error('Error fetching foods');
        }
    }
    
    
    return (<>
        <div className='overhang' onClick={closeClick} />
        <div className='addFoodModal'>
        <div className="add-food">
            <h3 className='h3-title'>Add a yummy food</h3>
        <form className="add-food-form"
            onSubmit={handleSubmit}>
            <input
                onChange={handleFoodNameChange} 
                placeholder="Type a food name..." 
                className="input-add"
                required={true} 
            />
            <input 
                onChange={handleFoodRatingChange} 
                placeholder="Choose a rating..." 
                className="input-add"
                type="number"
                required={true} 
            />
            <input className="add-button" type="submit" value="Add food" />
        </form>
        </div>
        </div>
    </>);
}

export default AddFoodModal;