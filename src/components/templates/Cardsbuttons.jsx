export default function CardButton({ img, title }) {
    return (
        <button className="text-white font-heading bg-secondary_gray px-10 py-3 flex gap-2 justify-center items-center rounded-sm border border-outline">
            {img !== undefined && <img src={img} alt="" />}
            {title}
        </button>
    );
}
