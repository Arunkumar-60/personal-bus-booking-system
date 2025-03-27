import React from 'react'
import RootLayout from '../../../layout/RootLayout'
import ServiceCard from '../../../components/service/ServiceCard'
import { RiRefund2Line, RiSecurePaymentLine } from 'react-icons/ri'
import { PiHeadsetFill } from 'react-icons/pi'

const Services = () => {
  return (
    <RootLayout className="space-y-12">
        {/* tag */}
        <div className="w-full flex items-center justify-center text-center">
            <h1 className="text-3xl text-neutral-800 font-bold">
                Our <span className="text-red-500">Services</span>
            </h1>
        </div>

        {/* service cards */}
        <div className="w-full grid grid-cols-3 gap-10 ">
          <ServiceCard icon={RiSecurePaymentLine} title={"secure Payment" } desc={"Integrate secure payment gateways for users to pay for their tickets"} className=""/>
          <ServiceCard icon={RiRefund2Line} title={"refund policy" } desc={"Offer options for the users to purchase refundable tickets with clear terms"} className=""/>
          <ServiceCard icon={PiHeadsetFill} title={"24/7 support " } desc={"get assistance anytime via chat, Email or Phone"} className=""/>
        </div>

    </RootLayout>
  )
}

export default Services