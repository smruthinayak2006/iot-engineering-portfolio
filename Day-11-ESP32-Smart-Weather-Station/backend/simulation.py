"""
============================================================

ESP32 Smart Weather Station
Simulation Provider

============================================================
"""

from datetime import datetime
from models import SensorData


class SimulationProvider:
    """
    Cycles through realistic weather conditions.
    """

    def __init__(self):

        self.index = 0

        self.samples = [

            (24.0, 55.0),
            (25.5, 58.0),
            (27.0, 62.0),
            (29.5, 67.0),

            (31.5, 72.0),
            (33.5, 76.0),
            (36.0, 80.0),
            (38.5, 84.0),

            (41.0, 87.0),
            (43.0, 91.0),
            (44.5, 94.0),

            (40.0, 88.0),
            (36.0, 80.0),
            (32.0, 72.0),
            (28.0, 65.0),
            (25.0, 58.0)

        ]

    def _next_reading(self):

        reading = self.samples[self.index]

        self.index = (self.index + 1) % len(self.samples)

        return reading

    def _calculate_status(self, temperature, humidity):

        if temperature < 30 and humidity < 70:

            return (

                "GOOD",

                "Pleasant Conditions"

            )

        if temperature < 40 and humidity < 85:

            return (

                "MODERATE",

                "Conditions Changing"

            )

        return (

            "EXTREME",

            "Dangerous Conditions"

        )

    def get_sensor_data(self):

        temperature, humidity = self._next_reading()

        status, description = self._calculate_status(

            temperature,

            humidity

        )

        return SensorData(

            temperature=temperature,

            humidity=humidity,

            status=status,

            description=description,

            ip="Simulation",

            online=False,

            simulated=True,

            timestamp=datetime.now().strftime(

                "%H:%M:%S"

            )

        )


simulation_provider = SimulationProvider()