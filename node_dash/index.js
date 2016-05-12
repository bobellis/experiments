"use strict"

import DashButton from 'dash-button';

const DASH_BUTTON_MAC_ADDRESS = '74:75:48:be:a5:29';

let button = new DashButton(DASH_BUTTON_MAC_ADDRESS);

let subscription = button.addListener({
  console.log("button pressed!");
});
