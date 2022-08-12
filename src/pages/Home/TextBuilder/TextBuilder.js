
import React from 'react'

import { FloatingLettersTextBuilder } from 'react-animated-text-builders'
const TextBuilder = () => {
    return (
        <div>

            <h1>
                <FloatingLettersTextBuilder
                    floatingSpeed={500}
                    lettersAppearanceDelay={250}
                    animationMaxMargin={"200px"}
                    animationMinMargin={"0px"}

                >
                    hello world
                </FloatingLettersTextBuilder>
            </h1>
        </div>
    );
};

export default TextBuilder;