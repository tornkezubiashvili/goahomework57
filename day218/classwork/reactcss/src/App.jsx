import { useRef, useState } from "react"

import logo from "../public/images/card-logo"

function App() {




    return (
        <>
            <div>
                <div>
                    <div>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <h1>00000000000000</h1>
                        <div>
                            <p>JANA APPLESEED</p>
                            <p>00/00</p>
                        </div>
                    </div>

                    <div>
                        <div></div>
                        <div>
                            <p>000</p>
                        </div>
                        <div></div>
                    </div>
                </div>

                <form>
                    <label htmlFor="name">CARDMODER NAME</label>
                    <input name="name" type="text" placeholder="e.g. Jana Applessed" />

                    <label htmlFor="number">CAR NUMBER</label>
                    <input name="number" type="text" placeholder="e.g. 1234 5678 9123 0000" />

                    <div>
                        <div>
                            <label>EXP.DATE(MM/YY)</label>
                            <div>
                                <input type="text" placeholder="MM" name="MM" />
                                <input type="text" placeholder="YY" name="YY" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="cvc">CVC</label>
                            <input type="text" placeholder="e.g 123" name="cvc" />
                        </div>
                    </div>

                    <button type="submit">Confirm</button>
                </form>
            </div>

        </>
    )

}

export default App
