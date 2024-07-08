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
                        <CardText tag='h3'style={{alignItems: 'center', display: 'flex', height: "100%"}}>
                        Autism at Work, LLC is a safe and supportive program where adults with autism 
                        are taught vocational, self help, daily living, and skills that can support 
                        independence.   The program is tailored to meet the needs of each and every 
                        individual that participates. 

                        Everyone is supported, focusing on independence and success both on campus
                        and in the community. 

                        Our mission is to not only help individuals find enjoyment within their 
                        community by being understood and accepted but to also help them find 
                        enjoyment and acceptance within themselves.  

                        </CardText>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default storyCompoenent;