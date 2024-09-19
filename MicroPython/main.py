"""
Created by: Emre Guzel
Created on: Sep 19 2024
This module is a Micro:bit MicroPython program that measures the temperature.
"""

from microbit import *

while True:

    if button_a.is_pressed():
        
        temperature = temperature()

        display.scroll("The temperature is " + str(temperature)+'C')

