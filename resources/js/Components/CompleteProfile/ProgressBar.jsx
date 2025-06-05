import React from 'react'

const ProgressBar = ({currentStep}) => {
  const totalSteps = 3;
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <section>
      <div className="w-full mb-6">
        <div className="w-full bg-white rounded-full h-2">
          <div
            className="bg-primary-4 h-2 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default ProgressBar