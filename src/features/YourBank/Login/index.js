import { Wrapper } from "./styled"
import Footer from "../common/Footer"
import LoginForm from "./LoginForm"
import Navbar from "../common/Navbar"
import Testimonials from "../common/Testimonials"


const Login = () => {
    return (
        <>
            <Wrapper>
                <Navbar></Navbar>
                <LoginForm></LoginForm>
                <Testimonials></Testimonials>
            </Wrapper>
            <Footer></Footer>
        </>
    );
};

export default Login;