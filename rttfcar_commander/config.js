let CONFIG = {
    "default_ip_T4SS": "172.16.104.182",
    "default_ip": "192.168.43.171",
    "commands": [
        {
            "command": "docker exec rttf-edgecar_cardrivers_1 /home/cardrivers/test.sh",
            "title": "Test"
        },

        {
            "command": "docker exec rttf-edgecar_cardrivers_1 /home/cardrivers/start_ai.sh",
            "title": "Start AI"
        },

        {
            "command": "docker exec rttf-edgecar_cardrivers_1 /home/cardrivers/stop_ai.sh",
            "title": "Stop AI"
        },

        {
            "command": "docker exec rttf-edgecar_cardrivers_1 /home/master/start_recording.sh",
            "title": "Start REC",
            "disabled": true
        },

        {
            "command": "docker exec rttf-edgecar_cardrivers_1 /home/master/stop_recording.sh",
            "title": "Stop REC",
            "disabled": true
        }
    ]
}