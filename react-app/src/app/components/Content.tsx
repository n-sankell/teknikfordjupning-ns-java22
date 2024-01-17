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
                        <span className='food'>{food.name}</span>
                        <span className='food-rating'>{food.rating}</span>
                    </div>
                </li>) ) }
            </ul>
        </div>
    </div>);
}

export default Content;