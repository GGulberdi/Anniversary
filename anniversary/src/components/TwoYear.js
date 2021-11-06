import React from 'react'
import '../css/twoyear.css'
import mainphoto from '../images/yeartwo.PNG'

export default function TwoYear() {
    return (
        <div className='container'>
            <p>Bilelikdäki durmuşymyzyň ikinji ýylynda biziň öňümize uzyn ýollar çykdy, we bir Amerikanyň birleşen şatlaryna göçüp gaýtdyk. Bu bir uly ädimdi we henize çhenli yashayan ulkämiz bolan Amerika bizi gaty gowy garşy aldy.</p>
            <img src={mainphoto} alt='main_photo'></img>
        </div>
    )
}
