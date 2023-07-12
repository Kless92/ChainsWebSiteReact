import { Card, CardImg, CardText, CardBody, Row, Col } from 'reactstrap';
import chan from '../../app/assets/imag/image1.jpg'
const storyCompoenent = () => {
    return (
        <Card>
            <CardBody>
                <Row>
                    <Col>
                        <CardImg src={chan} alt={"image not found"} style={{ height: 500, width: 400 }} />
                    </Col>
                    <Col>
                        <CardText style={{alignItems: 'center', display: 'flex', height: "100%"}}>
                            Put Story Text Here!Put Story Text Here!Put Story Text Here!
                            Put Story Text Here!Put Story Text Here!Put Story Text Here!
                            Put Story Text Here!Put Story Text Here!Put Story Text Here!
                            Put Story Text Here!Put Story Text Here!Put Story Text Here!
                            Put Story Text Here!Put Story Text Here!Put Story Text Here!
                        </CardText>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default storyCompoenent;