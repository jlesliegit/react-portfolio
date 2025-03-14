import {TypeAnimation} from "react-type-animation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function() {
    return(
        <TypeAnimation
            sequence={[
                'Lifelong learner',
                1000,
                'Problem solver',
                1000,
                'Full Stack Developer'
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: '2em', display: 'inline-block' }}
        />
    )
}
