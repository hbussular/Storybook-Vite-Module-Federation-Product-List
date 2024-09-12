import { JustChildrenProps } from "../../../interfaces/global"
import Container from "../../Atoms/Container/Container"

const BasicTemplate: React.FC<JustChildrenProps> = ({ children }) => {
    return (
        <Container bgColor="white" maxHeight="100vh" maxWidth="100vw" minHeight="50vh" >
            {children}
        </Container>
    )
}

export default BasicTemplate