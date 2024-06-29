import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ButtonRoute = ({ text, route, onClick, params }) => {

    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        if (route) {
            navigate(route, params)
        }
        if (onClick) {
            onClick()
        }
    }, [navigate, route])

    return (
        <div>
            <button
                style={{ backgroundColor: "#bbf245", padding: "10px", marginBottom: "10px", borderRadius: "10px" }}
                onClick={handleClick}
            >{text}
            </button>
        </div>
    );
}

export default ButtonRoute;