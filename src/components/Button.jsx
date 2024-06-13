import { useCallback, useState } from "react";

const Button = () => {
    const [color, setColor] = useState("#bbf245")
    const [text, setText] = useState('texto')

    const changeColor = useCallback(() => {
        setColor('#f2f')
        setText('novo texto')
    }, [])

    return (
        <div>
            <div style={{ backgroundColor: color }}>
                {text}
            </div>
            <Button onClick={changeColor}>Trocar a cor do card</Button>
        </div>
    );
}

export default Button;