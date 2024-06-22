"use client";
import React, { useState } from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const Page = () => {

    const [bulb, setBulb] = useState("");
    const [fan, setFan] = useState("");
    const [tableFan, setTableFan] = useState("");
    const [tv, setTv] = useState("");
    const [ac, setAc] = useState("");
    const [washingMachine, setWashingMachine] = useState("");
    const [pcLaptop, setPcLaptop] = useState("");
    const [electricIron, setElectricIron] = useState("");
    const [microwaveOven, setMicrowaveOven] = useState("");
    const [Refrigerator,setRefrigerator]=useState("");

    const [bulbCount, setBulbCount] = useState("");
    const [fanCount, setFanCount] = useState("");
    const [tableFanCount, setTableFanCount] = useState(""); 
    const [tvCount, setTvCount] = useState("");
    const [acCount, setAcCount] = useState("");
    const [washingMachineCount, setWashingMachineCount] = useState("");
    const [pcLaptopCount, setPcLaptopCount] = useState("");
    const [electricIronCount, setElectricIronCount] = useState("");
    const [microwaveOvenCount, setMicrowaveOvenCount] = useState("");
    const [RefrigeratorCount,setRefrigeratorCount]=useState("");

    return (
        <div className="w-full max-w-md mx-auto py-8 px-5 my-5">
            <h1 className="text-2xl font-bold mb-6 text-gray-600">Power<span className=' text-red-500'>Zest</span></h1>
            <div className="grid grid-cols-4 gap-4 mb-4 text-center text-green-400">
                <div className="font-medium text-left">Appliance</div>
                <div className="font-medium">Units/W</div>
                <div className="font-medium">Count</div>
                <div className="font-medium">Load</div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-2">
                <div className='flex self-center'>Led Bulb</div>
                <div>
                    <Select onValueChange={(e)=>{setBulb(e)}}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="5" >5W</SelectItem>
                            <SelectItem value="7" >7W</SelectItem>
                            <SelectItem value="9" >9W</SelectItem>
                            <SelectItem value="12">12W</SelectItem>
                            <SelectItem value="20">20W</SelectItem>
                            <SelectItem value="25">25W</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Input
                    type="number"
                    min={0}
                    value={bulbCount}
                    placeholder='Enter'
                    onChange={(e) => setBulbCount((e.target.value))}
                />
                <div className='self-center text-center'>{Number(bulbCount)*Number(bulb)} W</div>
            </div>


            <div className="grid grid-cols-4 gap-4 mb-2">
                <div className='flex self-center'>Fan</div>
                <div>
                    <Select onValueChange={(e)=>{setFan(e)}}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="50" >50W</SelectItem>
                            <SelectItem value="55" >55W</SelectItem>
                            <SelectItem value="60" >60W</SelectItem>
                            <SelectItem value="70" >70W</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Input
                    type="number"
                    min={0}
                    value={fanCount}
                    placeholder='Enter'
                    onChange={(e) => setFanCount((e.target.value))}
                />
                <div className='self-center text-center'>{Number(fanCount)*Number(fan)} W</div>
            </div>


            <div className="grid grid-cols-4 gap-4 mb-2">
                <div className='flex self-center'>Table Fan</div>
                <div>
                    <Select onValueChange={(e)=>{setTableFan(e)}}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="20" >20W</SelectItem>
                            <SelectItem value="30" >30W</SelectItem>
                            <SelectItem value="40" >40W</SelectItem>
                            <SelectItem value="50" >50W</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Input
                    type="number"
                    min={0}
                    value={tableFanCount}
                    placeholder='Enter'
                    onChange={(e) => setTableFanCount((e.target.value))}
                />
                <div className='self-center text-center'>{Number(tableFanCount)*Number(tableFan)} W</div>
            </div>



            <div className="grid grid-cols-4 gap-4 mb-2">
                <div className='flex self-center'>AC</div>
                <div>
                    <Select onValueChange={(e)=>{setAc(e)}}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1000" >1 TON</SelectItem>
                            <SelectItem value="1500" >1.5 TON</SelectItem>
                            <SelectItem value="2000" >2 TON</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Input
                    type="number"
                    min={0}
                    value={acCount}
                    placeholder='Enter'
                    onChange={(e) => setAcCount((e.target.value))}
                />
                <div className='self-center text-center'>{Number(acCount)*Number(ac)} W</div>
            </div>


            

            <div className="grid grid-cols-4 gap-4 mb-2">
                <div className='flex self-center'>Washing Machine</div>
                <div>
                    <Select onValueChange={(e)=>{setWashingMachine(e)}}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="500" >500W</SelectItem>
                            <SelectItem value="700" >700W</SelectItem>
                            <SelectItem value="1000" >1000W</SelectItem>
                            <SelectItem value="1500">1500W</SelectItem>
                            <SelectItem value="2000">2000W</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Input
                    type="number"
                    min={0}
                    value={washingMachineCount}
                    placeholder='Enter'
                    onChange={(e) => setWashingMachineCount((e.target.value))}
                />
                <div className='self-center text-center'>{Number(washingMachineCount)*Number(washingMachine)} W</div>
            </div>

            


            <div className="grid grid-cols-4 gap-4 mb-2">
                <div className='flex self-center'>PC/Laptop</div>
                <div>
                    <Select onValueChange={(e)=>{setPcLaptop(e)}}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="100" >100W</SelectItem>
                            <SelectItem value="150" >150W</SelectItem>
                            <SelectItem value="200" >200W</SelectItem>
                            <SelectItem value="250">250W</SelectItem>
                            <SelectItem value="300">300W</SelectItem>
                            <SelectItem value="400">400W</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Input
                    type="number"
                    min={0}
                    value={pcLaptopCount}
                    placeholder='Enter'
                    onChange={(e) => setPcLaptopCount((e.target.value))}
                />
                <div className='self-center text-center'>{Number(pcLaptopCount)*Number(pcLaptop)} W</div>
            </div>

            


            <div className="grid grid-cols-4 gap-4 mb-2">
                <div className='flex self-center'>Microwave Oven</div>
                <div>
                    <Select onValueChange={(e)=>{setMicrowaveOven(e)}}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1000" >1000W</SelectItem>
                            <SelectItem value="2000" >2000W</SelectItem>
                            <SelectItem value="3000" >3000W</SelectItem>
                            <SelectItem value="4000" >4000W</SelectItem>
                            <SelectItem value="5000" >5000W</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Input
                    type="number"
                    min={0}
                    value={microwaveOvenCount}
                    placeholder='Enter'
                    onChange={(e) => setMicrowaveOvenCount((e.target.value))}
                />
                <div className='self-center text-center'>{Number(microwaveOvenCount)*Number(microwaveOven)} W</div>
            </div>


            

            <div className="grid grid-cols-4 gap-4 mb-2">
                <div className='flex self-center'>Electric Iron</div>
                <div>
                    <Select onValueChange={(e)=>{setElectricIron(e)}}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="550" >550W</SelectItem>
                            <SelectItem value="750" >750W</SelectItem>
                            <SelectItem value="1000" >1000W</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Input
                    type="number"
                    min={0}
                    value={electricIronCount}
                    placeholder='Enter'
                    onChange={(e) => setElectricIronCount((e.target.value))}
                />
                <div className='self-center text-center'>{Number(electricIronCount)*Number(electricIron)} W</div>
            </div>


            

            <div className="grid grid-cols-4 gap-4 mb-2">
                <div className='flex self-center'>Refrigerator</div>
                <div>
                    <Select onValueChange={(e)=>{setRefrigerator(e)}}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1000" >1000W</SelectItem>
                            <SelectItem value="2000" >2000W</SelectItem>
                            <SelectItem value="3000" >3000W</SelectItem>
                            <SelectItem value="4000" >4000W</SelectItem>
                            <SelectItem value="5000" >5000W</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Input
                    type="number"
                    min={0}
                    value={RefrigeratorCount}
                    placeholder='Enter'
                    onChange={(e) => setRefrigeratorCount((e.target.value))}
                />
                <div className='self-center text-center'>{Number(RefrigeratorCount)*Number(Refrigerator)} W</div>
            </div>

            




            <div className='py-4 text-right text-green-400'>Total : {(Number(bulbCount)*Number(bulb))+(Number(fanCount)*Number(fan))+(Number(tableFanCount)*Number(tableFan))+(Number(acCount)*Number(ac))+(Number(washingMachineCount)*Number(washingMachine))+(Number(pcLaptopCount)*Number(pcLaptop))+(Number(microwaveOvenCount)*Number(microwaveOven))+(Number(electricIronCount)*Number(electricIron))+(Number(RefrigeratorCount)*Number(Refrigerator))} W</div>

            
        </div>
    );
}

export default Page;
