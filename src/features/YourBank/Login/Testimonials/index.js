import {
    Wrapper,
    Header,
    TextGreen,
    SubTitle,
    Tile
} from './styled';
import React from 'react'

const Testimonials = () => {
    return (
        <Wrapper>
            <div>
                <div>
                    <Header>Our <TextGreen>Testimonials</TextGreen></Header>
                    <SubTitle>
                        Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey
                    </SubTitle>
                    <div>
                        <button>For Individuals</button>
                        <button>For Businesses</button>
                    </div>
                </div>
            </div>
            <Tile>
                {/* ikona */}
                {/* text */}
                {/* imie */}
            </Tile>
        </Wrapper>
    )
}

export default Testimonials