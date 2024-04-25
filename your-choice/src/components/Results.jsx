import React, { useEffect } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import {
  clothes,
    laptop,
    shopping,
} from "../constant"

const db_projects = [
  {
    name: "Laptop Store",
    description: "An online platform for the latest laptops and accessories.",
    image: laptop,
    source_code_link: ""
  },
  {
    name: "Fashion Hub",
    description: "A trendy clothing store with a wide selection of modern fashion.",
    image: clothes,
    source_code_link: ""
  },
  {
    name: "Gadget World",
    description: "A site offering a variety of gadgets and tech products.",
    image: shopping,
    source_code_link: ""
  }
];

const Works = () => {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
      <h2 style={{ fontSize: '4vw' }}>Results</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Here are the results based on your search
        </motion.p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
      <button
          className={`bg-slate-800 hover:bg-slate-500 text-white px-4 py-2 rounded ${selectedType === 'ALL' ? 'bg-slate-500' : ''
            }`}
          onClick={() => setSelectedType('')}>
          ALL
        </button>
        <button
          className={`bg-slate-800 hover:bg-slate-500 text-white px-4 py-2 rounded ${selectedType === 'TaoBao' ? 'bg-slate-500' : ''
            }`}
          onClick={() => setSelectedType('TaoBao')}>
          Taobao
        </button>
        <button
          className={`bg-slate-800 hover:bg-slate-500 text-white px-4 py-2 rounded ${selectedType === 'Google' ? 'bg-slate-500' : ''
            }`}
          onClick={() => setSelectedType('Google')}>
          Google
        </button>
        <button
          className={`bg-slate-800 hover:bg-slate-500 text-white px-4 py-2 rounded ${selectedType === 'Bing' ? 'bg-slate-500' : ''
            }`}
          onClick={() => setSelectedType('Bing')}>
          Bing
        </button>
        <button
          className={`bg-slate-800 hover:bg-slate-500 text-white px-4 py-2 rounded ${selectedType === 'Amazon' ? 'bg-slate-500' : ''
            }`}
          onClick={() => setSelectedType('Amazon')}>
          Amazon
        </button>
        
      </div>
      <div className="mt-20 flex flex-wrap gap-7" style={{ justifyContent: 'space-between' }}>
        {db_projects.map((project, index) => (
          <div key={index} className="project-item">
            <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
            <div style={{ position: 'relative', width: '100%', height: '230px' }}>
                <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
            </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Works, '')
