export default function Button({className, title}) {
    return (
        <button
            className={`${className} px-10 py-3 font-bold rounded-sm text-black bg-primary_green`}
        >
            {title}
        </button>
    )
}