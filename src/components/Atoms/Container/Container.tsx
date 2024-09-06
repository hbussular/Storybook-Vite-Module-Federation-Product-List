import { JustChildrenProps } from "../../../types/global"
import './styles.css'

const Container: React.FC<JustChildrenProps> = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Container