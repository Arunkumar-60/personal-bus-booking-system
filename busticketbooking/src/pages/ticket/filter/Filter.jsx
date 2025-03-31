import React from 'react'
import PriceFilterRange from '../../../components/pricerange/PriceRangeSlider';

const Filter = ({className}) => {

    const [rangeValues, setRangeValues] = React.useState({
        min:0,
        max:100
    });

    const handleRangeChange = (values) => {
        setRangeValues({values});
    };

    const BusTypeLabelItems = [
        {itemid : "ac", labelname: "ac deluxe", quantity:10},
        {itemid : "tourist", labelname: "tourist ac deluxe",quantity:12},
        {itemid : "airsusp", labelname: "air suspension",quantity:15},
        {itemid : "luxuryac", labelname: "luxury ac deluxe" , quantity:6},


];


  return (
    <div className={`w-full ${className}`}>

        <h1 className="text-xl capitalize text-neutral-700 font-semibold mt-1">
            Apply Filters
        </h1>

        {/* price filter */}
        <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-1 my-3">
        <h1 className="text-xl capitalize text-neutral-600 font-medium">
            Apply Filters
        </h1>

        <PriceFilterRange 
            min={0}
            max={7000}
            values={rangeValues}
            onChange={handleRangeChange}
        />
        </div>

        {/* Bus Type Filter */}
        <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3 my-3">
        <h1 className="text-xl capitalize text-neutral-700 font-semibold mt-1">
            bus type
        </h1>

        {BusTypeLabelItems.map((item,ind)=>(
             <div className="space-y-2.5">
             <div className="w-full flex items-center gap-2">
                 <input type="checkbox" key={ind} id ={item.itemid}className="h-3.5 w-3.5 cursor-pointer
                 border  border-neutral-300 text-neutral-300" />
                 <label htmlFor={item.itemid} className="text-sm capitalize text-neutral-600 hover:text-neutral-900 font-normal cursor-pointer">
                    {item.labelname} <span className="text-xs text-neutral-600">({item.quantity})</span>
                 </label>
             </div>
 
         </div>
        ))}

        


        </div>

        {/* Amenities Filter */}
        <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3 my-3">
        <h1 className="text-xl capitalize text-neutral-700 font-semibold mt-1">
            bus Amenities
        </h1>

        

        


        </div>
    </div>
  )
}

export default Filter