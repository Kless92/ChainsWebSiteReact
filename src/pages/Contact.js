import { Container, Table } from "reactstrap";

const Contact = () => {
    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <td>Address</td>
                        <td>Contact</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>733 Fort Worth Drive</td>
                        <td>Lisa Klessens</td>
                    </tr>
                    <tr>
                        <td>Suite 104-105</td>
                        <td>
                            <a
                                role='button'
                                className='btn btn-link'
                                href='tel:+9072302234'
                            >
                                <i className='fa fa-phone' />
                                907-230-2234
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Denton, TX</td>
                        <td>
                            <a
                                role='button'
                                className='btn btn-link'
                                href='mailto:autismatworkllc@gmail.com'
                            >
                                <i className='fa fa-envelope-o' />
                                autismatworkllc@gmail.com
                            </a>
                        </td>
                    </tr>
                    <tr><td>76021</td></tr>
                </tbody>
            </Table>
        </Container>
    )
}
export default Contact;