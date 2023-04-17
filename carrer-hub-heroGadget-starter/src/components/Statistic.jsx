import React, { useContext } from 'react';
import { JobContext } from '../App';
import Chart from './Chart';

const Statistic = () => {
    const jobs = useContext(JobContext);
    console.log(jobs);
    return (
        <div>
            <div className='mt-[123px] text-center'>
                {/* Text */}
                <h1 className='text-5xl font-semibold'>Assignment Marks</h1>
                <div className='flex justify-center mt-[80px] mb-[80px]'>
                <table border={2} className=''>
                    <tr>
                        <td>Assignment - 1</td>
                        <td>Assignment - 2</td>
                        <td>Assignment - 3</td>
                        <td>Assignment - 4</td>
                        <td>Assignment - 5</td>
                        <td>Assignment - 6</td>
                    </tr>
                    <tr>
                        <td>49</td>
                        <td>54</td>
                        <td>60</td>
                        <td>60</td>
                        <td>60</td>
                        <td>60</td>
                        <td>60</td>
                    </tr>
                </table>
                </div>
            </div>
            <div className='flex justify-center mt-[120px]'>
                <Chart></Chart>
            </div>
        </div>
    );
};

export default Statistic;