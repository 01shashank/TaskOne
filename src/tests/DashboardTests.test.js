import React from 'react'
import { render, waitForElement, fireEvent } from '@testing-library/react'
import axiosMock from 'axios'
import Dashboard from '../components/Dashboard'

jest.mock("axios")

test("Display table data on dashboard", async()=>{
    const url = "http://localhost:9090/allusers"

    axiosMock.get.mockImplementation(()=> Promise.resolve({status:200, data:[['jitendrak@gmail.com','jitendra@123','Jitendra Kashyap','Kolkata','B.Arch','Architect','Sketching,Travelling'],['mayurpatil@gmail.com','mayur@123','Mayur Patil','Nagpur','B.E.','Assistant Manager','Hiking']]}))

})

test()