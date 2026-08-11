
import { MyStore } from '../context/MyContext'

const StatusCard = ({ icon: Icon, value, title, subtitle, iconBg, iconColor }) => {

  return (
    <div className=" group flex flex-col sm:justify-center lg:flex-row lg:justify-start items-start gap-5
      rounded-3xl
      border border-zinc-600
      p-5
      transition-all duration-300"
    >

      <div className={` ${iconBg} flex p-3  items-center justify-center rounded-xl `} >
        <Icon size={24} className={iconColor} strokeWidth={2} />
      </div>

      {/* Content */}

      <div>
        <h2 className="font-clash text-2xl font-semibold text-white">
          { value }
        </h2>

        <h3 className=" text-sm font-medium text-zinc-400">{title}</h3>

        <p className="mt-1 text-xs text-zinc-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default StatusCard;