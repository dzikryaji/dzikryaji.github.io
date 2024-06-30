import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MotionIcon } from '../assets';

const MotionMedia = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const renderRows = (numRows, numItems) => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      const items = [];
      for (let j = 0; j < numItems; j++) {
        items.push(<MotionItem key={`${i}-${j}`} mousePosition={mousePosition} />);
      }
      rows.push(<div key={i} className='flex gap-10'>{items}</div>);
    }
    return rows;
  };
  return (
    <div className='hidden lg:flex flex-col gap-10'>
      {renderRows(15, 13)}
    </div>
  );
};

const MotionItem = ({ mousePosition }) => {
  const [angle, setAngle] = useState(0);
  const itemRef = useRef(null);

  useEffect(() => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      const divX = rect.left + rect.width / 2;
      const divY = rect.top + rect.height / 2;

      // Calculate the angle
      const deltaX = mousePosition.x - divX;
      const deltaY = mousePosition.y - divY;
      const angleInRadians = Math.atan2(deltaY, deltaX);
      const angleInDegrees = (angleInRadians * 180) / Math.PI;
      setAngle(angleInDegrees);
    }
  }, [mousePosition]);

  return (
    <motion.div
      ref={itemRef}
      style={{
        width: '1rem',
        transform: `rotate(${angle}deg)`
      }}
    >
      <MotionIcon />
    </motion.div>
  );
};


export default MotionMedia;