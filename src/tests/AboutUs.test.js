import Aboutus from '../components/Aboutus';
import { render, screen } from '@testing-library/react';


test('should have text', () => {
    render(<Aboutus />); 
    const element = screen.getByText(/ We are Secure employee database management./i);
    expect(element).toBeInTheDocument();
   });