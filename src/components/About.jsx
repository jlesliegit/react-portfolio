export default function About(){
    return(
        <div className={'grid grid-cols-3'}>
            <div className={'flex flex-col gap-4 col-start-1 ml-20 mt-30 p-10'}>
                <h1 className={"text-2xl"}>A little bit more about me</h1>
                <p>I'm a Full Stack Developer based in Bristol, passionate about building dynamic and efficient applications.</p>
                <p>I take a holistic approach to development, ensuring that both front-end and back-end are optimised for performance and user experience.</p>
                <p>I utilise a range of technologies to achieve this but specialise in React and Laravel and also MySQL for working with relational databases.</p>
            </div>
        </div>
    )
}