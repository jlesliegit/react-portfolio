import {TypeAnimation} from "react-type-animation";
export default function Tagline() {
    return(
        <TypeAnimation
            className={'font-light'}
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
