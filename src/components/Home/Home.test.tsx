import {render, screen} from '@testing-library/react';
import {Home} from "."

describe("Home", () => {
    it('renders headline', () => {
        render(<Home />);
        const headline = screen.getByText(/Hello World/i);
        expect(headline).toBeInTheDocument();
    })
})