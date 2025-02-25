import MapPinIcon from "@/../public/home/map-pin.svg";
import Image from "next/image";

function MapPin() {
  return <Image className="w-full h-full" src={MapPinIcon} width="50" height="50" alt="" unoptimized />;
}

export default MapPin;
