import Navbar from "../common/Navbar"
import Footer from "../common/Footer"
import { Wrapper } from "./styled"
import SignUpForm from "./SignUpForm"
import Testimonials from "../common/Testimonials"

const SignUp = () => {
    return (
        <>
            <Wrapper>
                <Navbar />
                <SignUpForm />
                <Testimonials />
            </Wrapper>
            <Footer />
        </>
    );
};

export default SignUp;