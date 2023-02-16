import React, { useEffect, useState } from 'react';
import Pizza from '../images/pizza.png'

export default function Cart_card() {
    const [count, setCount] = useState(0);
    const [addOn, setAddOn] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [payAmount, setPayAmount] = useState(0);

    const handleDecrement = () => {
        if (count === 0) {
            alert('minimum value');
        }
        else {
            setCount(count - 1);

        }
        setTotalAmount(count * 50);

    }

    const handleIncrement = () => {
        // if(count === 0) {
        //     alert('minimum value');
        // }

        setCount(count + 1);

    }

    const handleDiscount = (e) => {
        // setDiscount(e.target.value);
        const value = Number(e.target.value);
        if (value >= 0 && value <= 60) {
          setDiscount(value);
        }
    }

    const handleChecked = () => {

        // setAddOn(!addOn);
        // if (!addOn) {
        //     if (payAmount === 0) {
        //         // setPayAmount(payAmount + 5);
        //         alert('Please add pizza quantity');
        //         setAddOn(false);
        //     }

        // }

        if(payAmount !==0) {
            setAddOn(!addOn)
        }
        else {
            alert('Please add pizza quantity');
            setAddOn(false);
        }


    }

    useEffect(() => {

        setTotalAmount(count * 50)
    }, [count])



    useEffect(() => {

        const addonsPrice = addOn ? 5 : 0;
        const subtotal = totalAmount + addonsPrice;
        const discountAmount = (subtotal * discount) / 100;
        const total = subtotal - discountAmount;

        setPayAmount(total);
    }, [totalAmount, discount, addOn])

    return (
        <div className='cart_layout'>
            {/*
            * One increment/decrement counter
            * Display count value between them
            * Addons checkbox to add 5$ to total amount
            * Display total Amount
            * Discount (not more than 60%)
            * To pay amount 
         */}

            {/* ------------- Increment and decrement -------- */}
            {/* <div >
                <img src = {Pizza} alt = '../pizza' height={500} width = {500}  />
            </div> */}

            <div className='head_layout'>
                <div className='pizza_head'>ABC Pizza</div>
                <div className='pizza_desc' >We are serving one pizza only. Please taste and review</div>
            </div>

            <div className='row' style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center', margin: '5%' }}>
                <div className='col-12 col-md-5 order-2 order-md-1 '  >
                    <div className='heading'>
                        Add Quantity
                    </div>
                    <div className='margin_btn'>
                        <div >
                            <button className='btn' disabled = {count ===0} onClick={handleDecrement} >-</button>
                        </div>

                        <div className='count' >
                            <span> {count} </span>
                        </div>

                        <div >
                            <button className='btn' onClick={handleIncrement} >+</button>
                        </div>
                    </div>

                    {/* -------------- Addon checkbox ----------- */}

                    <div className='margin_btn'>
                        <input className='btn ' type='checkbox' checked={addOn} onChange={handleChecked} />
                        <label className='count'>Add ons</label>
                    </div>


                </div>

                <div className='col-12 col-md-5 order-1 order-md-2' >
                    <img src={Pizza} alt='../pizza' height={400} width={400} />
                </div>
            </div>


            <div style={{ border: '2px solid black' }}>

                <div className='amount_panel'>
                    {/* ----------- Total Amount -------------- */}

                    <div >
                        <span className = 'margin_'>Total </span>
                        <span> ${totalAmount} </span>
                    </div>

                    <div className = 'discount'>
                        <label >
                            Discount-
                        </label>
                        <input className='discount_input' type='number' value={discount}
                            min="0" max="60"
                            onChange={handleDiscount}
                        />%
                    </div>

                    {/* --------------- Total Pay amount ------------- */}

                    <div className='payment'>
                        <span className = 'margin_'>To Pay</span>
                        <span> ${payAmount} </span>
                    </div>

                </div>


            </div>



        </div>
    )
}
