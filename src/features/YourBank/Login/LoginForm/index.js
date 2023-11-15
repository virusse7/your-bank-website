import facebookIcon from "./icons/facebookIcon.svg";
import appleIcon from "./icons/appleIcon.svg";
import googleIcon from "./icons/googleIcon.svg";
import eyeIcon from "./icons/eyeIcon.svg";
import decoration from "../../assets/circle-top-right.svg";
import {
    Header,
    Wrapper,
    Title,
    Box,
    ActionContainer,
    LoginInputs,
    LoginButton,
    SignUpButton,
    Line,
    Text,
    ForgotPasswordButton,
    Input,
    ButtonContainer,
    Icon,
    Button,
    Decoration,
    ButtonIcon
} from "./styled";

const LoginForm = () => {
    return (
        <Wrapper>
            <Decoration src={decoration} />
            <Box>
                <Header>Login</Header>
                <Title>Welcome back! Please log in to access your account.</Title>
                <LoginInputs>
                    <Input type="email" placeholder="Enter your Email" />
                    <Input type="password" placeholder="Enter your Password" />
                    <ButtonIcon><img src={eyeIcon} alt="eyeIcon" /></ButtonIcon>
                </LoginInputs>
                <ForgotPasswordButton>Forgot Password?</ForgotPasswordButton>
                <ActionContainer>
                    <LoginButton>Login</LoginButton>
                    <SignUpButton>Sign Up</SignUpButton>
                    <Text>
                        <Line />
                        Or Continue with
                        <Line />
                    </Text>
                    <ButtonContainer>
                        <Button>
                            <Icon src={facebookIcon} alt="facebookIcon" />
                        </Button>
                        <Button>
                            <Icon src={googleIcon} alt="googleIcon" />
                        </Button>
                        <Button>
                            <Icon src={appleIcon} alt="appleIcon" />
                        </Button>
                    </ButtonContainer>
                </ActionContainer>
            </Box>
        </Wrapper>
    );
};

export default LoginForm;