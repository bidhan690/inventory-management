import React from 'react'

interface SalesPurchaseChartProps {
  
}

const SalesPurchaseChart: React.FC<SalesPurchaseChartProps> = ({}) => {
  return <div className="col-span-0 md:col-span-3 w-full bg-white rounded-lg p-4 flex flex-col gap-2">
      <span className="text-zinc-700 text-base font-medium font-inter leading-loose">
       Sales & Purchase Overview
      </span>
      </div>
}

export default SalesPurchaseChart