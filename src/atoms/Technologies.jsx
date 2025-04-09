export default function Technologies({ name }) {

    return (
        <div className={'flex text-center gap-1'}>
        <p className={'inline-block whitespace-nowrap w-fit px-3 py-1 bg-gray-100 text-sm text-gray-800 rounded-lg shadow-sm hover:bg-blue-100 transition'}>{name}</p>
        </div>
    );
}