import React from 'react';
import CustomButton from '../Sheared/CustomButton/CustomButton';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard pages</h1>
            <CustomButton bgColor="customGreen" outlineColor="border-red-500">
             Red Button
            </CustomButton>
            <div class="grid grid-cols-3 gap-4">
  <div class="...  border ">01</div>
  <div class="...">02</div>
  <div class="...">03</div>
  <div class="col-span-5 ...  border ">04</div>
  <div class="...">05</div>
  <div class="...">06</div>
  <div class="col-span-2 ...">07</div>
</div>
        </div>
    );
};

export default Dashboard;