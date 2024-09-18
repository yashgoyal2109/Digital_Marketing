export default function Circle({ img, title }) {
    return (
        <div className="text-white flex flex-col gap-6 items-center">
            {img !== undefined && <img className="rounded-full" width={200}src={img} alt="" />}
            {title}
        </div>
    );
}