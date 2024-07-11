import './Collapsible.css';
import { useState, useRef, useEffect } from 'react';

interface CollapsibleProps {
  title: string;
  children: any;
}

function Collapsible(props: CollapsibleProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null as null | HTMLDivElement);
  const classes = `list-group-item ${
    isExpanded ? "is-expanded" : null
  }`;
  const currentHeight = isExpanded ? height : 0;

  const handleToggle = (e: any) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    if (ref.current && ref.current.getBoundingClientRect()) {
      const height = ref.current.getBoundingClientRect().height;
      setHeight(height);
    }
    // e.stopPropagation();
  }

  useEffect(() => {
    if (!height || !isExpanded || !ref.current) return undefined;
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isExpanded]);

  return (
    <div
      className={classes}
    >
      <div onClick={handleToggle} className="card-title">
        <h2>{props.title}</h2>
      </div>
      <div
        className="card-collapse"
        style={{ height: currentHeight + "px" }}
      >
        <div className="card-body" ref={ref}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Collapsible;
