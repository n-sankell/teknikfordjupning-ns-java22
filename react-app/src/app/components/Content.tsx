import { Foods } from '../../generated';
import "./Content.css";

type Props = {
    foods: Foods;
}

const Content = (props: Props) => {
    const foods = props.foods.foods === undefined ? [] : props.foods.foods;
    return (
    <div className="content">
        <h1 className='heading'>My favourite foods</h1>
        <div className='list-wrapper'>
            <ul className='ul-list'> { foods.map((food, index) => (
                <li key={index} className='list-item'>
                    <div className="food-wrapper">
                        <div className='food'>
                            <span className='food-name'>{food.name}</span>
                            <div className='food-rating-wrapper'>
                                <div className='food-rating-text'><span>Rating: </span></div>
                                <div className='food-rating-value'><span>{food.rating}</span></div>
                            </div>
                        </div>
                    </div>
                </li>) ) }
            </ul>
        </div>
    </div>);
}

export default Content;