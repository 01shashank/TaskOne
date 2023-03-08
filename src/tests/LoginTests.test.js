import React from 'react'
import { render ,userEvent, screen} from '@testing-library/react'
import Login from '../pages/Login'


test("Input textfield should be present", ()=>{
    render(<Login/>)
    const usernameEl = screen.getByLabelText('Enter the username')
    expect(usernameEl).toBeInTheDocument()
})

test("Password textfield should be present", ()=>{
    render(<Login/>)
    const passwordEl = screen.getByLabelText('Enter the password')
    expect(passwordEl).toBeInTheDocument()
})

test("Button should be present", ()=>{
    render(<Login/>)
    const buttonLog = screen.getByRole("Button")
    expect(buttonLog).toBeInTheDocument()
})


test("pass login test",()=>{
    render(<Login/>)

    const username = screen.getByTestId('username-testid')
    const password = screen.getByTestId('password-testid')

    userEvent.type(username, "shashanks@yahoo.com")
    userEvent.type(password, "shashank@123")

    

})



