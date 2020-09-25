let CONFIG = {
    "default_ip": "192.168.43.171",
    "commands": [
        {
            "command": "docker exec rttf-edgecar_cardrivers_1 /home/cardrivers/start_ai.sh",
            "title": "Start AI"
        },

        {
            "command": "docker exec rttf-edgecar_cardrivers_1 /home/cardrivers/stop_ai.sh",
            "title": "Stop AI"
        },

        {
            "command": "docker exec rttf-edgecar_cardrivers_1 /home/cardrivers/start_recording.sh",
            "title": "Start REC",
            "disabled": true
        },

        {
            "command": "docker exec rttf-edgecar_cardrivers_1 /home/cardrivers/stop_recording.sh",
            "title": "Stop REC",
            "disabled": true
        }
    ]
}