import './App.css';
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1); 
  const totalSteps = 5; 

  function NextBtn() {
    if (step < totalSteps) {
      setStep(step + 1); 
    }
  }

  function PreviousBtn() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  return (
    <div className="App" style={{ padding: "20px", textAlign: "center" }}>
      <h2>Step {step}</h2> 
      
      <div>
        <span style={{ 
          width: "30px", 
          height: "30px", 
          display: "inline-block", 
          margin: "0 5px", 
          borderRadius: "50%", 
          backgroundColor: step === 1 ? "purple" : "#e0e0e0", 
          lineHeight: "30px",
          color: "white"
        }}>1</span>

        <span style={{ 
          width: "30px", 
          height: "30px", 
          display: "inline-block", 
          margin: "0 5px", 
          borderRadius: "50%", 
          backgroundColor: step === 2 ? "purple" : "#e0e0e0", 
          lineHeight: "30px",
          color: "white"
        }}>2</span>

        <span style={{ 
          width: "30px", 
          height: "30px", 
          display: "inline-block", 
          margin: "0 5px", 
          borderRadius: "50%", 
          backgroundColor: step === 3 ? "purple" : "#e0e0e0", 
          lineHeight: "30px",
          color: "white"
        }}>3</span>

        <span style={{ 
          width: "30px", 
          height: "30px", 
          display: "inline-block", 
          margin: "0 5px", 
          borderRadius: "50%", 
          backgroundColor: step === 4 ? "purple" : "#e0e0e0", 
          lineHeight: "30px",
          color: "white"
        }}>4</span>

        <span style={{ 
          width: "30px", 
          height: "30px", 
          display: "inline-block", 
          margin: "0 5px", 
          borderRadius: "50%", 
          backgroundColor: step === 5 ? "purple" : "#e0e0e0", 
          lineHeight: "30px",
          color: "white"
        }}>5</span>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button 
          onClick={PreviousBtn} 
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor:"blue",
            borderRadius:"3px",
            color: "white",
            border:"none"
          
          }}
        >
          Previous
        </button>
        <button 
          onClick={NextBtn} 
          style={{
            padding: "10px 20px",
            backgroundColor:"blue",
            borderRadius:"3px",
            color: "white",
            border:"none"
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;



