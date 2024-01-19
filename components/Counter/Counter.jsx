"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

function Counter({ initialCount = 99 }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={styles.counter}>
      <button className={styles.btn} onClick={decrement}>
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button className={styles.btn} onClick={increment}>
        +
      </button>


      <div style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
{/* <img style={{width: '100%', height: '100%'}} src="/img/hero-background-overlay.png" /> */}
<div style={{width: 570, height: 432.69, paddingLeft: 25, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
    <div style={{width: 570, height: 398, position: 'relative'}}>
     
        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', height: 59.98, paddingBottom: 7.18, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{}}>
                    <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                       
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* get a quote */}
        {/* <div style={{height: 47, paddingBottom: 20, left: 0, top: 27, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', height: 27, paddingRight: 377, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{color: '#14C3BF', fontSize: 18, fontFamily: 'Nunito', fontWeight: '700', textTransform: 'uppercase', lineHeight: 27, letterSpacing: 0.01, wordWrap: 'break-word'}}>Get free quote for</div>
            </div>
        </div> */}
    </div>
</div>
<img style={{width: 545, height: 385.67, position: 'relative'}} src="/img/hero-right.png" />
</div>
    
  );
}

export default Counter;
