import React, { useState } from 'react'

export const DependDropDown = () => {

    const [selectedCountry, setselectedCountry] = useState("")
    const [selectedState, setselectedState] = useState("")
    const [selectedCity, setselectedCity] = useState("")

    //     var data = [
    //         {
    //             country: "India",
    //             states: {
    //                 Gujarat: ["Amh" , "G_nagar"] ,
    //                 Maha : ["Mumbai" , "Pune"]
    //             }
    //         },
    //         {
    //             country: "USA",
    //             states: {
    //                 California : ["Bayonne", "Camden"] ,
    //                 New_Jersey : ["Alameda", "Alhambra"]
    //             },

    //         }
    //     ];



    //     const countryHandler = (event) => {
    //         console.log(event.target.value)
    //         setselectedCountry(event.target.value)
    //             setselectedState("")
    //             setselectedCity("") 
    //     }

    //     const stateHandler = (event) => {
    //         console.log(event.target.value)
    //         setselectedState(event.target.value)
    //     }

    //     const cityHandler = (event) => {
    //         console.log(event.target.value)
    //         setselectedCity(event.target.value)
    //     }

    //     return (
    //         <div style={{ textAlign: "center" }}>

    //             <h1>Depend Drop Down</h1>

    //             <select onChange={(event) => { countryHandler(event) }}>
    //                 <option>SELECTED COUNTRY</option>
    //                 {
    //                     data.map((d) => {
    //                         return <option value={d.country}>{d.country}</option>
    //                     })
    //                 }
    //             </select>

    //             <h2>{selectedCountry}</h2>

    //             <select onChange={(event) => { stateHandler(event) }}>
    //                 <option >SELECT STATE</option>
    //                 {
    //                     selectedCountry && data.find((d) => d.country == selectedCountry).states.map((s) => {
    //                         return <option>{s}</option>
    //                     })
    //                 }
    //                 <h2>{selectedState}</h2>
    //             </select>
    //             <br /><br />
    //             <select onChange={(event) => { cityHandler(event) }}>
    //                 <option>SELECT CITY</option>
    //                 {
    //                     selectedState  && data.find((s) => s.country == selectedCountry).states.find((s)=>s==selectedState).city?.map((c) => {
    //                         return <option>{c}</option>
    //                     })
    //                 }
    //             </select>
    //             <h2>{selectedCity}</h2>

    //         </div>
    //     )
    // }

    var data = [
        {
            country: "India",
            states: {
                Gujarat: ["Amh", "G_nagar"],
                Maha: ["Mumbai", "Pune"]
            }
        },
        {
            country: "USA",
            states: {
                California: ["Bayonne", "Camden"],
                New_Jersey: ["Alameda", "Alhambra"]
            }
        }
    ]

    const countryHandler = (event) => {
        setselectedCountry(event.target.value)
        console.log(event.target.value)
        setselectedState("")
        setselectedCity("")
    }

    const stateHandler = (event) => {
        setselectedState(event.target.value)
        console.log(event.target.value)
        setselectedCity("")
    }

    const cityHandler = (event) => {
        setselectedCity(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div style={{ textAlign: "center" }}>

            <h1>Depend Drop Down</h1>

            {/* COUNTRY */}
            <select onChange={countryHandler}>
                <option value="">SELECT COUNTRY</option>
                {
                    data.map((d) => (
                        <option key={d.country} value={d.country}>
                            {d.country}
                        </option>
                    ))
                }
            </select>

            <h2>{selectedCountry}</h2>

            {/* STATE */}
            <select onChange={stateHandler} disabled={!selectedCountry}>
                <option value="">SELECT STATE</option>
                {
                    selectedCountry &&
                    Object.keys(
                        data.find(d => d.country === selectedCountry).states
                    ).map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))
                }
            </select>

            <h2>{selectedState}</h2>

            {/* CITY */}
            <select onChange={cityHandler} disabled={!selectedState}>
                <option value="">SELECT CITY</option>
                {
                    selectedState &&
                    data
                        .find(d => d.country === selectedCountry)
                        .states[selectedState]
                        .map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))
                }
            </select>

            <h2>{selectedCity}</h2>

        </div>
    )
}
