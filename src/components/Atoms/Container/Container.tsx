import { ContainerProps } from "../../../interfaces/global"
import './styles.css'

const Container: React.FC<ContainerProps> = ({ children, bgColor = "#25e69f", maxWidth = "100vw", maxHeight = "100vh", minHeight = "50vh" }) => {
    return (
        <div className="container" style={{ 
                backgroundColor: bgColor,
                maxHeight: maxHeight,
                maxWidth: maxWidth,
                minHeight: minHeight
            }}>
            {children}
        </div>
    )
}

export default Container