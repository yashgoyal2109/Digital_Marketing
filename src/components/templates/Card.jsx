import { Link } from "react-router-dom"

export default function Card({ title, className, index }) {
    return (
        <Link to={`${index===0? '/userhome' : '/dashboard'}`}>
            <div className="p-6 md:w-[80%] text-black font-bold text-[1.5rem] min-h-[12rem] rounded-sm bg-primary_green">
                {title}
            </div>
        </Link>
    )
}