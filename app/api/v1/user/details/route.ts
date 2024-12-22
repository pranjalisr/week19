
// creating GET endpoint handler

import { NextResponse } from "next/server";
// BE endpts in NXTjs
export function GET() {
    // CONST export
    return NextResponse.json({
        user: "xyz",
        email: "xyz@gmail.com"
    })

}


export function POST() {
    
    return NextResponse.json({
        user: "xyz",
        email: "xyz@gmail.com"
    })

}

export function PUT() {
    
    return NextResponse.json({
        user: "xyz",
        email: "xyz@gmail.com"
    })

}


// default export
//{export function UseHandler() {
   // return <div>

   // <div>

// }



