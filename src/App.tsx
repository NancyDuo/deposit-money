import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
import { styled, Box } from '@mui/system';
import SliderUnstyled from '@mui/core/SliderUnstyled'

function App() {
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney, bankRupt } = bindActionCreators(actionCreators, dispatch)
  const amount = useSelector((state: State) => state.bank)
  const [sliderValue, setSliderValue] = useState<number>(0)
  const StyledSlider = styled(SliderUnstyled)(
    () => `
  color: #EBECF0;
  height: 14px;
  width: 100%;
  display: inline-block;
  position: relative;
  margin:20px;
  cursor: pointer;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
  
  & .MuiSlider-rail {
    display:block;
    position:absolute;
    height: 14px;
    width:100%;
    background-color: #EBECF0;
    border-radius: 10px;
    box-sizing:border-box; 
    border: 4px solid #f3f4f7;
    box-shadow: 7px 7px 15px rgba(55, 84, 170, .15),
                -7px -7px 20px rgba(255, 255, 255, 1),
                inset 0px 0px 4px rgba(255, 255, 255, 0),
                inset 7px 7px 15px rgba(55, 84, 170, .15),
                inset -7px -7px 20px rgba(255, 255, 255, 1),
                0px 0px 4px rgba(255, 255, 255, .2);
  }

  & .MuiSlider-track {
    display: block;
    position: absolute;
    border-radius: 10px;
    height: 14px;
    box-sizing:border-box; 
    background-color: #185BF1;
    opacity: 1;
  }

  & .MuiSlider-thumb {
    box-shadow: 7px 7px 15px rgba(55, 84, 170, .15),
    -7px -7px 20px rgba(255, 255, 255, 1),
    0px 0px 4px rgba(255, 255, 255, .2);  
    color: #6D7587;   
    position: absolute;
    border-radius: 20%;
    top: -30px;
    margin-left: 15px;
    cursor: pointer;
    box-sizing:border-box; 
    padding:5px;
    text-align:center;
    }
  }
  `,
  );
  // set slider value to dispatch
  const hanldeSliderChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setSliderValue(newValue);
    }
  }
  return (
    <div className="App">

      <Box width={500}>

        {/* current money */}
        <h1 style={{ color: '#a3aab9' }}>Current Money : {amount}</h1>

        {/* slider */}
        <StyledSlider defaultValue={50}
          step={1}
          max={1000}
          valueLabelDisplay="auto"
          value={sliderValue}
          onChange={hanldeSliderChange}
        />

        {/* buttons */}
        <div className='btn-wrapper'>
          <button className='btn btn-default' onClick={() => depositMoney(sliderValue)}>DEPOSIT</button>
          <button className='btn btn-default' onClick={() => withdrawMoney(sliderValue)}>WITHDRAW</button>
          <button className='btn btn-default' onClick={() => bankRupt()}>BANKRUPT</button>
        </div>

      </Box>

    </div>
  );
}

export default App;
