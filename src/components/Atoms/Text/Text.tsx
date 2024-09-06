import { JustChildrenProps } from "../../../types/global"
import "./styles.css"

const Text: React.FC<JustChildrenProps> = ({ children }) => {
    return (
        <p className="playfair-display">{children}</p>
    )
}

export default Text