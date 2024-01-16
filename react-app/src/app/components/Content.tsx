import { Greetings } from '../../generated';
import "./Content.css";

type Props = {
    greetings: Greetings;
}

const Content = (props: Props) => {
    const greetings = props.greetings.greetings === undefined ? [] : props.greetings.greetings;
    return (
    <div className="content">
        <h1 className='heading'>My favourite foods</h1>
        <div className='list-wrapper'>
            <ul className='ul-list'> { greetings.map((greeting, index) => (
                <li key={index} className='list-item'>
                    <div className="greeting-wrapper">
                        <span className='greeting'>{greeting.message}</span>
                    </div>
                </li>) ) }
            </ul>
        </div>
    </div>);
}

export default Content;