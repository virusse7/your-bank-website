import {
    Wrapper,
    Header,
    TextGreen,
    SubTitle,
    Tile,
    Container,
    Button,
    Buttons,
    MainContainer
} from "./styled";
import { testimonialsData } from "./testimonialsData";
import doubleQuotes from "./doubleQuotes.svg"


const Testimonials = () => {
    return (
        <Wrapper>
            <MainContainer>
                <div>
                    <Header>Our <TextGreen>Testimonials</TextGreen></Header>
                    <SubTitle>
                        Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey
                    </SubTitle>
                </div>
                <Buttons>
                    <Button>For Individuals</Button>
                    <Button>For Businesses</Button>
                </Buttons>
            </MainContainer>
            <Tile>
                {testimonialsData.map((testimonial) => (
                    <Container key={testimonial.name}>
                        <img src={doubleQuotes} width="60px" alt="double quotes" />
                        <p>{testimonial.text}</p>
                        <TextGreen>{testimonial.name}</TextGreen>
                    </Container>
                ))}

            </Tile>
        </Wrapper>
    );
};

export default Testimonials;