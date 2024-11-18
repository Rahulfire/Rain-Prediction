import React from 'react';
import { useParams } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const UnderpassDetail = () => {
  const { id } = useParams();

  const underpassDetails = {
    1: {
      name: "KR Circle Underpass",
      description: "Located at KR Circle, this underpass helps ease traffic congestion.",
      vehicleLimits: [
        {
          vehicle: "Motorbikes",
          limit: "Up to 0.15 meters (15 cm or 6 inches)",
          note: "Beyond this level, engine stalling risk increases."
        },
        {
          vehicle: "Cars",
          limit: "Up to 0.30 meters (30 cm or 1 foot)",
          note: "Water above this level could affect engine and electrical components."
        },
        {
          vehicle: "Buses",
          limit: "Up to 0.45 meters (45 cm or 1.5 feet)",
          note: "Control and visibility become challenging beyond this depth."
        },
        {
          vehicle: "Trucks",
          limit: "Up to 0.6 meters (60 cm or 2 feet)",
          note: "Trucks have higher clearance but may face challenges at deeper levels."
        }
      ],
      image: "/path/to/underpass1.jpg",
      rainfallData: [10, 15, 8, 20, 12],
    },
    2: {
      name: "Madiwala Underpass",
      description: "Madiwala is one of the busiest underpasses in Bangalore.",
      vehicleLimits: [
        {
          vehicle: "Motorbikes",
          limit: "Up to 0.15 meters (15 cm or 6 inches)",
          note: "Beyond this level, engine stalling risk increases."
        },
        {
          vehicle: "Cars",
          limit: "Up to 0.25 meters (25 cm or 10 inches)",
          note: "Water above this level could affect engine and electrical components."
        },
        {
          vehicle: "Buses",
          limit: "Up to 0.4 meters (40 cm or 1.3 feet)",
          note: "Control and visibility become challenging beyond this depth."
        },
        {
          vehicle: "Trucks",
          limit: "Up to 0.6 meters (60 cm or 2 feet)",
          note: "Trucks have higher clearance but may face challenges at deeper levels."
        }
      ],
      image: "/path/to/underpass2.jpg",
      rainfallData: [12, 18, 10, 25, 14],
    },
    3: {
      name: "Hennur Underpass",
      description: "Hennur Underpass connects the north part of the city with the central area.",
      vehicleLimits: [
        {
          vehicle: "Motorbikes",
          limit: "Up to 0.15 meters (15 cm or 6 inches)",
          note: "Beyond this level, engine stalling risk increases."
        },
        {
          vehicle: "Cars",
          limit: "Up to 0.30 meters (25 cm or 10 inches)",
          note: "Water above this level could affect engine and electrical components."
        },
        {
          vehicle: "Buses",
          limit: "Up to 0.45 meters (40 cm or 1.3 feet)",
          note: "Control and visibility become challenging beyond this depth."
        },
        {
          vehicle: "Trucks",
          limit: "Up to 0.6 meters (60 cm or 2 feet)",
          note: "Trucks have higher clearance but may face challenges at deeper levels."
        }
      ],
      image: "/path/to/underpass3.jpg",
      rainfallData: [5, 7, 3, 10, 6],
    },
    4: {
      name: "Richmond Circle Underpass",
      description: "Richmond Circle Underpass connects two major roads in the city.",
      vehicleLimits: [
        {
          vehicle: "Motorbikes",
          limit: "Up to 0.15 meters (6 inches)",
          note: "Beyond this level, engine stalling risk increases."
        },
        {
          vehicle: "Cars",
          limit: "Up to 0.25 meters (10 inches)",
          note: "Water above this level could affect engine and electrical components."
        },
        {
          vehicle: "Buses",
          limit: "Up to 0.4 meters (1.3 feet)",
          note: "Control and visibility become challenging beyond this depth."
        },
        {
          vehicle: "Trucks",
          limit: "Up to 0.6 meters (2 feet)",
          note: "Trucks have higher clearance but may face challenges at deeper levels."
        }
      ],
      image: "/path/to/underpass4.jpg",
      rainfallData: [8, 12, 5, 15, 9],
    },
  };

  const underpass = underpassDetails[id];

  if (!underpass) {
    return (
      <div className="w-full h-screen bg-black flex flex-col items-center justify-center text-white p-4">
        <h2 className="text-4xl font-semibold mb-4">Underpass not found</h2>
        <p className="text-lg">Sorry, the underpass you are looking for does not exist.</p>
      </div>
    );
  }

  const chartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [
      {
        label: "Rainfall (mm)",
        data: underpass.rainfallData,
        backgroundColor: "rgba(59, 130, 246, 0.6)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white flex items-center justify-center p-6">
      <div className="text-center flex flex-col items-center space-y-6">
        {/* Rainfall Graph */}
        <div className="w-full max-w-sm">
          <Bar
            data={chartData}
            options={{
              maintainAspectRatio: true,
              plugins: { legend: { display: false } },
            }}
          />
        </div>

        {/* Underpass Details */}
        <h2 className="text-4xl md:text-5xl font-bold">{underpass.name}</h2>
        <p className="text-lg">{underpass.description}</p>

        {/* Vehicle Limits */}
        <ul className="text-left space-y-4 text-lg font-medium mx-auto max-w-xl">
          {underpass.vehicleLimits.map((limit, index) => (
            <li key={index} className="list-disc pl-5">
              <span className="font-semibold">{limit.vehicle}:</span> {limit.limit} – {limit.note}
            </li>
          ))}
        </ul>

        {/* Back Button */}
        <a
          href="/underpasses"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg transition duration-300 ease-in-out"
        >
          Back to Underpasses
        </a>
      </div>
    </div>
  );
};

export default UnderpassDetail;





