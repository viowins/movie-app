'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import cn from 'classnames';
import { Button, Icon } from "@/components";

export default function Card({ image, alt, name }) {
  const [showCardBody, setShowCardBody] = useState(false)

  return (
    <div
    style={{ width: `calc(calc((( 100vw - 2 * 72px - ( 5 - 1 ) * 24px ) / 5 ) / 0.66667) * 0.66667)`}}>
      <motion.div
        className="overflow-hidden rounded-lg transition-all duration-200 hover:shadow-2xl"
        whileHover={{ scale: 1.1 }}
        transition={{ ease: 'easeInOut', duration: 0.2 }}
        onMouseEnter={() => setShowCardBody(true)}
        onMouseLeave={() => setShowCardBody(false)}
      >
        <div className="relative aspect-video">
          <img
            className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
            width="600"
            height="400"
            src={image}
            alt={alt}
          />
        </div>

        <div className={cn("grid transition-all duration-150 delay-200", showCardBody ? 'grid-rows-1fr' : 'grid-rows-0fr')}>
          <div className='overflow-hidden'>
            <div className='bg-zinc-900 px-4 pt-4 pb-5'>
              <div className='flex flex-row items-center justify-between flex-nowrap gap-4 mb-3'>
                <div className="flex items-center gap-3">
                  <Button variant='contained' color='white' width='square' rounded='circle' startIcon={<Icon name='PlayFill' />} />
                  <span className="font-medium">Resume S2 E3</span>
                </div>
                <Button variant='contained' color='white' width='square' rounded='circle' startIcon={<Icon name='Plus' />} />
              </div>

              <h3 className="text-lg font-semibold mb-2">{name}</h3>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-bold text-zinc-400">2023</span>
                <span className="bg-zinc-700 rounded text-xs font-semibold text-white py-1 px-1.5">+18</span>
              </div>
              <p className="text-zinc-400 font-medium text-sm">
                After an accident derails their exploits in Europe, The Hunters must band back together to hunt down...
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
