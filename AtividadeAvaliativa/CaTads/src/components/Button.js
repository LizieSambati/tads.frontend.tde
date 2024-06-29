import { useCallback, useState } from "react";

const Button = ({ text, text2 }) => {
    const [color, setColor] = useState("#bbf245")
    const [buttonText, setButtonText] = useState(text)

    const change = useCallback(() => {
        setColor('#f2f')
        setButtonText(text2)
    }, [text2])

    return (
        <div>
            <button
                style={{ backgroundColor: color, padding: "10px", marginBottom: "10px", borderRadius: "10px" }}
                onClick={change}>{buttonText}
            </button>
        </div>
    );
}

export default Button;