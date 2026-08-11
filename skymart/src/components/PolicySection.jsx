import { Shield, Tag, Zap } from 'lucide-react';

const PolicySection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10">

            <div className="p-4 border border-zinc-700 rounded-2xl flex flex-row gap-4 items-center justify-start ">
                <Zap  size={24} strokeWidth={2} className="text-lime-400" fill="black" />
                <div>
                    <h3 className="font-clash font-semibold text-gray-300 text-md">Fast Delivery</h3>
                    <p className="text-xs text-zinc-500">Same-day on select items.</p>
                </div>
            </div>

            <div className="p-4 border border-zinc-700 rounded-2xl flex flex-row gap-4 items-center justify-start ">
                <Shield  size={24} strokeWidth={2} className="text-blue-400" fill="black" />
                <div>
                    <h3 className="font-clash font-semibold text-gray-300 text-md">Secure Payments</h3>
                    <p className="text-xs text-zinc-500">100% encrypted checkout.</p>
                </div>
            </div>

            <div className="p-4 border border-zinc-700 rounded-2xl flex flex-row gap-4 items-center justify-start ">
                <Tag  size={24} strokeWidth={2} className="text-green-400" fill="black" />
                <div>
                    <h3 className="font-clash font-semibold text-gray-300 text-md">Best Prices</h3>
                    <p className="text-xs text-zinc-500">Price-match guarantee.</p>
                </div>
            </div>

        </div>
    )
}

export default PolicySection