// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the area of a triangle.
 */
function calculate () {
  // input
  const hoursWorked = parseInt(document.getElementById("number--of-hours-worked").value)
  const hourlyRate = parseInt(document.getElementById("hourly-rate").value)
  // process
  const pay = (hoursWorked * hourlyRate) * (1.00 - 0.18)
  const taxes = (hoursWorked * hourlyRate) * 0.18
  // output
  document.getElementById("payment").innerHTML =
    "Your pay will be: " + ' $' + pay.toFixed(2)
  document.getElementById("income-tax").innerHTML =
    "The government will take: " + ' $' + taxes.toFixed(2)
}
