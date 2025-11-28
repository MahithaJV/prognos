// pages/Forecast.jsx
import React, { useState } from 'react';
import ChartCard from '../components/ChartCard';
import { useTheme } from '../context/Themecontext';

const Forecast = () => {
  const [timeRange, setTimeRange] = useState('72h');
  const { isDark } = useTheme();

  const forecastData = {
    '24h': [
      { type: 'Respiratory', patients: 35 },
      { type: 'Cardiac', patients: 18 },
      { type: 'General', patients: 22 },
      { type: 'Emergency', patients: 15 }
    ],
    '48h': [
      { type: 'Respiratory', patients: 52 },
      { type: 'Cardiac', patients: 20 },
      { type: 'General', patients: 25 },
      { type: 'Emergency', patients: 18 }
    ],
    '72h': [
      { type: 'Respiratory', patients: 45 },
      { type: 'Cardiac', patients: 22 },
      { type: 'General', patients: 28 },
      { type: 'Emergency', patients: 16 }
    ]
  };

  const correlationData = [
    { aqi: 50, patients: 20 },
    { aqi: 100, patients: 35 },
    { aqi: 150, patients: 52 },
    { aqi: 200, patients: 68 },
    { aqi: 250, patients: 85 }
  ];

  const surgeJustification = `Rise in PM2.5 levels (AQI: 156) combined with sudden temperature drop and elevated humidity levels correlates with a 37% increase in respiratory cases. Historical data shows similar patterns during previous pollution spikes.`;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-3xl font-bold transition-colors ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Surge Forecast Analysis
          </h1>
          <p className={`transition-colors ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            AI-powered patient inflow predictions and correlations
          </p>
        </div>
        
        {/* Time Range Selector */}
        <div className={`flex space-x-2 rounded-lg p-1 shadow-sm border transition-colors ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          {['24h', '48h', '72h'].map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-md transition-all ${
                timeRange === range
                  ? 'bg-blue-600 text-white shadow-md'
                  : isDark 
                    ? 'text-gray-300 hover:bg-gray-700' 
                    : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patient Type Forecast */}
        <ChartCard
          title={`Patient Type Forecast - ${timeRange}`}
          chartType="bar"
          data={forecastData[timeRange]}
          dataKey="patients"
          nameKey="type"
        />

        {/* AQI-Patient Correlation */}
        <ChartCard
          title="AQI - Patient Correlation"
          chartType="scatter"
          data={correlationData}
          dataKey="patients"
          nameKey="aqi"
        />
      </div>

      {/* Surge Justification Panel */}
      <div className={`rounded-xl shadow-sm border p-6 transition-colors ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center space-x-3 mb-4">
          <div className={`p-2 rounded-lg transition-colors ${
            isDark ? 'bg-purple-900' : 'bg-purple-100'
          }`}>
            <span className="text-2xl">🧠</span>
          </div>
          <div>
            <h3 className={`text-lg font-semibold transition-colors ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              AI Surge Justification
            </h3>
            <p className={`text-sm transition-colors ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Explainable AI insights behind the forecast
            </p>
          </div>
        </div>
        
        <div className={`rounded-lg p-4 border transition-colors ${
          isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
        }`}>
          <p className={`leading-relaxed transition-colors ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {surgeJustification}
          </p>
        </div>

        {/* Key Factors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* Air Quality */}
          <div className={`p-4 rounded-lg border transition-colors ${
            isDark ? 'bg-red-900 border-red-700' : 'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-center space-x-2 mb-2">
              <span className={isDark ? 'text-red-300' : 'text-red-600'}>🌫️</span>
              <span className={`font-semibold transition-colors ${
                isDark ? 'text-red-300' : 'text-red-700'
              }`}>
                Air Quality
              </span>
            </div>
            <p className={`text-sm transition-colors ${
              isDark ? 'text-red-200' : 'text-red-600'
            }`}>
              PM2.5: 68 μg/m³ (Unhealthy)
            </p>
          </div>
          
          {/* Weather */}
          <div className={`p-4 rounded-lg border transition-colors ${
            isDark ? 'bg-blue-900 border-blue-700' : 'bg-blue-50 border-blue-200'
          }`}>
            <div className="flex items-center space-x-2 mb-2">
              <span className={isDark ? 'text-blue-300' : 'text-blue-600'}>🌡️</span>
              <span className={`font-semibold transition-colors ${
                isDark ? 'text-blue-300' : 'text-blue-700'
              }`}>
                Weather
              </span>
            </div>
            <p className={`text-sm transition-colors ${
              isDark ? 'text-blue-200' : 'text-blue-600'
            }`}>
              Temp drop: 32°C → 28°C
            </p>
          </div>
          
          {/* Historical Pattern */}
          <div className={`p-4 rounded-lg border transition-colors ${
            isDark ? 'bg-yellow-900 border-yellow-700' : 'bg-yellow-50 border-yellow-200'
          }`}>
            <div className="flex items-center space-x-2 mb-2">
              <span className={isDark ? 'text-yellow-300' : 'text-yellow-600'}>📈</span>
              <span className={`font-semibold transition-colors ${
                isDark ? 'text-yellow-300' : 'text-yellow-700'
              }`}>
                Historical Pattern
              </span>
            </div>
            <p className={`text-sm transition-colors ${
              isDark ? 'text-yellow-200' : 'text-yellow-600'
            }`}>
              37% increase expected
            </p>
          </div>
        </div>
      </div>

      {/* Additional Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Confidence Metrics */}
        <div className={`rounded-xl shadow-sm border p-6 transition-colors ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <h3 className={`text-lg font-semibold mb-4 transition-colors ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Forecast Confidence
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className={`text-sm transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Respiratory Cases
                </span>
                <span className={`text-sm font-medium transition-colors ${
                  isDark ? 'text-green-400' : 'text-green-600'
                }`}>
                  92%
                </span>
              </div>
              <div className={`w-full rounded-full h-2 transition-colors ${
                isDark ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className={`text-sm transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Overall Accuracy
                </span>
                <span className={`text-sm font-medium transition-colors ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  87%
                </span>
              </div>
              <div className={`w-full rounded-full h-2 transition-colors ${
                isDark ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Assessment */}
        <div className={`rounded-xl shadow-sm border p-6 transition-colors ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <h3 className={`text-lg font-semibold mb-4 transition-colors ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Risk Assessment
          </h3>
          <div className="space-y-3">
            <div className={`p-3 rounded-lg border-l-4 transition-colors ${
              isDark ? 'bg-orange-900 border-orange-500' : 'bg-orange-50 border-orange-400'
            }`}>
              <div className="flex justify-between items-center">
                <span className={`font-medium transition-colors ${
                  isDark ? 'text-orange-200' : 'text-orange-700'
                }`}>
                  Staffing Shortage Risk
                </span>
                <span className={`text-sm px-2 py-1 rounded-full font-medium transition-colors ${
                  isDark ? 'bg-orange-800 text-orange-200' : 'bg-orange-100 text-orange-700'
                }`}>
                  High
                </span>
              </div>
            </div>
            <div className={`p-3 rounded-lg border-l-4 transition-colors ${
              isDark ? 'bg-yellow-900 border-yellow-500' : 'bg-yellow-50 border-yellow-400'
            }`}>
              <div className="flex justify-between items-center">
                <span className={`font-medium transition-colors ${
                  isDark ? 'text-yellow-200' : 'text-yellow-700'
                }`}>
                  Supply Chain Risk
                </span>
                <span className={`text-sm px-2 py-1 rounded-full font-medium transition-colors ${
                  isDark ? 'bg-yellow-800 text-yellow-200' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  Medium
                </span>
              </div>
            </div>
            <div className={`p-3 rounded-lg border-l-4 transition-colors ${
              isDark ? 'bg-green-900 border-green-500' : 'bg-green-50 border-green-400'
            }`}>
              <div className="flex justify-between items-center">
                <span className={`font-medium transition-colors ${
                  isDark ? 'text-green-200' : 'text-green-700'
                }`}>
                  Facility Capacity
                </span>
                <span className={`text-sm px-2 py-1 rounded-full font-medium transition-colors ${
                  isDark ? 'bg-green-800 text-green-200' : 'bg-green-100 text-green-700'
                }`}>
                  Adequate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;