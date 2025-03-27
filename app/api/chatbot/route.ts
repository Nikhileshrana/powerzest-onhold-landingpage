import { NextResponse, NextRequest } from "next/server";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { stringify } from "querystring";


export async function POST(req: NextRequest) {

    try {
        
        const apiKey = process.env.GEMINI_API_KEY || "";
        const genAI = new GoogleGenerativeAI(apiKey);

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        // const model = genAI.getGenerativeModel({ model: "text-embedding-004" });
        
        const { prompt } = await req.json();
        const message = "You are PowerzestAI , The answer shall only be in paragraph form with maximum of 50 Words. You have to answer about Company Powerzest only and what is required. so ,\
Powerzest\'s goal is to make renewable energy accessible and affordable for a broader public, ensuring sustainability without compromising on efficiency.\
Powerzest is a forward-thinking green technology company dedicated to democrazing the advantages of renewable energy through pioneering technological and business soluons.\
Our core acvies encompass research, development, and implementaon of renewable energy projects, aimed at advancing sustainable pracces and fostering environmental stewardship on a global scale.\
Powerzest\'s Features are as follows - 1) Plug and Play (• Convenonal products require addional equipment for power delivery. PowerZest\'s plug-and-play soluon integrates energy producon,\
 storage, and conversion.\
• Operaonal immediately post-installaon; streamlined setup reduce\
 complexity. ) 2) Wind Solar Hybrid , 3) Easy Installation , 4) Comfortable Payments Plans , Best Customer Experience , 5) Easy Maintenance and Lifespan.\
Now I will tell you the products \
1)DynaDisc (Wind and Solar Hybrid Energy System)\
2)Helical Spiral Wind Turbine (FX Wind Turbine)\
3)X Series Windmill \
4)FS Series Windmill\
5)Tulip type Windmill\
6)M Series Windmill\
7)Wind Mill with Solar\
8)Pocket Watt (Meet Pocketwa your ulmate portable power companion, designed to keep you\
connected and powered up on the go. Equipped with two DC jacks and a USB port,\
PocketWa effortlessly charges your electronic devices, DC-powered lights, and\
fans. Whether you\'re outdoors or off-grid, PocketWa offers versality with dual\
charging opons: harness solar power or use an AC-DC adapter for connuous\
power supply. Simply connect your device or DC appliance to one of the jacks or\
USB port, and experience reliable, uninterrupted power anyme, anywhere with\
PocketWa.)\
9)Solar PV Cells\
10) Mono Perc\
11)Poly Crystalline\
12)BIPV\
13)Flexible Panels\
14)Solar Street Light\
15)DC Fan\
16)DC / Inverter LED Light\
to reach out Powerzest contact support call on +91 77386 67167.\
Now answer question based on this prompt. Now i will ask question so be ready my question is =>"

        const finalprompt = `${message} => ${prompt}`;

        const result = await model.generateContent(finalprompt);

        const response = await result.response;

        const text = await response.text();

        console.log(text);
    
        return NextResponse.json({ message: text });

    }
    catch (error) { console.log("error"); }

    return NextResponse.json({ error: "An error occurred" });

}
