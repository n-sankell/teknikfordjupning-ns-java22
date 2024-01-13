import { Greetings } from '../../generated';

type Props = {
    greetings: Greetings;
}

const Content = (props: Props) => {
    const greetings = props.greetings.greetings === undefined ? [] : props.greetings.greetings;
    return (<div className="content">
    <ul>
        { greetings.map((greeting, index) => (
        <li key={index} className='greeting-li'>
            <div className="greeting-wrapper">
                <span className='greeting'>{greeting.message}</span>
            </div>
        </li>) ) }
    </ul>
    </div>);
}

export default Content;