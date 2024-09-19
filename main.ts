/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Emre Gzuel
 * Created on: Sep 19 2024
 * This program  mesusres the temputer of the room
*/

 //basic.showString('Emre Gzuel!')
basic.clearScreen()
basic.pause(1000)

let temperature:number
input.onButtonPressed( Button.A,function(){
    temperature = input.temperature()
    basic.showString(" the temperature is"+temperature)
})