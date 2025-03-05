"use client"

import { Mail, Phone, MapPin, Car, Link2, UserCog, Facebook, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import { BsTwitterX } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";

const Footer = ({ role, userId }: { role: string; userId: number }) => {
  return (
    <div className="bg-blue-950">
      <div className="container mx-auto text-white pt-12 space-y-8">
        {/* TOP */}
        <div className="flex flex-col md:flex-row p-8 lg:p-0 gap-8 justify-between items-start">
          {/* LEFT */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b-2 w-max">Contact Us</h3>
            <div className="container mx-auto space-y-2">
              <p className="flex items-center gap-2"><Mail className="p-1 h-7 w-7" /> megafun@gmail.com</p>
              <p className="flex items-center gap-2"><Phone className="p-1 h-7 w-7" /> +94 77 211 4093, +94 76 020 2918</p>
              <p className="flex items-center gap-2"><MapPin className="p-1 h-7 w-7" /> Vavuniya, Sri Lanka</p>
            </div>
          </div>
          {/* MIDDLE */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b-2 w-max">Our Profiles</h3>
            <div className="space-y-2">
              <Link
                href="/vans"
                className="flex items-center gap-2"
              >
                <Facebook className="p-1 h-7 w-7" />
                Facebook
              </Link>
              <Link
                href="/vans"
                className="flex items-center gap-2"
              >
                <Instagram className="p-1 h-7 w-7" />
                Instagram
              </Link>
              <Link
                href={`/dashboard?u=`}
                className="flex items-center gap-2"
              >
                <BsTwitterX className="p-[6px] h-7 w-7" />
                X
              </Link>
              <Link
                href="/vans"
                className="flex items-center gap-2"
              >
                <Youtube className="p-1 h-7 w-7" />
                YouTube
              </Link>
              <Link
                href="/vans"
                className="flex items-center gap-2"
              >
                <FaTripadvisor className="p-1 h-7 w-7" />
                Trip Advisor
              </Link>
            </div>
          </div>
          {/* RIGHT */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b-2 w-max">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/vans"
                className="flex items-center gap-2"
              >
                <Car className="p-1 h-7 w-7" />
                Our Vans
              </Link>
              <Link
                href="/vans"
                className="flex items-center gap-2"
              >
                <Link2 className="p-1 h-7 w-7" />
                Book Now
              </Link>
              <Link
                href={`/dashboard?u=`}
                className="flex items-center gap-2"
              >
                <UserCog className="p-1 h-7 w-7" />
                Profile
              </Link>
              <Link
                href="/vans"
                className="flex items-center gap-2"
              >
                <UserCog className="p-1 h-7 w-7" />
                Dashboard
              </Link>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="py-8 border-t-2 border-blue-900">
          <p className="flex items-center justify-center gap-1">
            &copy; 2025 All rights reserved by
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text text-xl font-semibold">
              MegaFun
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer