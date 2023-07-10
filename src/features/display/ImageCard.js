import { Card, CardText, CardBody, Row } from 'reactstrap';
import HomeCarousel from './HomeCarousel';

const ImageCard = () => {
    return (
        <Card>
            <Row>
                <HomeCarousel/>
                <CardBody >
                    <CardText>
                        My name is Chandler Klessens and I am 24 years old. I experience significant autism,
                        sensory integration issues and some difficulty communicating, which can make it hard
                        for me to work in a large or crowded environment. My parents have helped me find a
                        quiet space to feel safe so I can use my skills to make products that I hope will put
                        a smile on your face. Send a handmade bookmark or note card to a loved one, hang a
                        Freshie in your car to make it smell nice, relax with soothing bath soaps & salts,
                        foot & body scrubs,  feed the beautiful birds in your backyard, or send a gift with a
                        handmade gift tag. Thank you for supporting me and the work I am doing!
                    </CardText>
                </CardBody>
            </Row>
        </Card>
    );
};

export default ImageCard