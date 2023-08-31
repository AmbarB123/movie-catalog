
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer =  () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <p>Copyright © 2023 Ambar Ballen. All rights reserved.</p>
                </Container>
            </Navbar>
        </div>
    )
}


export default Footer
