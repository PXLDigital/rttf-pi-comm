# PiComm

This project can be used to send bash commands to a remote Raspberry Pi, from any device in the same network. (e.g. phone)
Initially created for Race to the Future @Hasselt, Belgium.

## Setup
Clone the project on the Pi.
Make sure the Flask module is started at boot. Best way is to use crontab. (`@reboot sh /path/to/startup/script.sh`)


Adjust the `config.js` file in `html` folder so it contains the commands you will frequently use. A button will be created on the web page for every entry in the JSON file.


Put the `html` folder somewhere where you can access it (e.g. online via FTP) and optionally set the default IP to the expected Pi IP for convenience.


Access the webpage and click the buttons. The commands from the config file should be sent to the device at the given IP, which in turn should trigger the Flask module that will execute the commands.

## Requirements
* `pip3 install flask`
* `pip3 install flask-cors`
