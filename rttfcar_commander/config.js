let CONFIG = {
    "commands": [
        {
            "command": "docker exec rttf_edgecar_cardrivers_1 /home/master/start_ai.sh",
            "title": "Start AI"
        },

        {
            "command": "docker exec rttf_edgecar_cardrivers_1 /home/master/start_ai.sh",
            "title": "Stop AI"
        },

        {
            "command": "docker exec rttf_edgecar_cardrivers_1 /home/master/start_recording.sh",
            "title": "Start REC",
            "disabled": true
        },

        {
            "command": "docker exec rttf_edgecar_cardrivers_1 /home/master/stop_recording.sh",
            "title": "Stop REC",
            "disabled": true
        }
    ]
}