import React from 'react';
import CustomButton from '../Sheared/CustomButton/CustomButton';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard pages</h1>
            <CustomButton bgColor="customGreen" outlineColor="border-red-500">
        Red Button
      </CustomButton>

      <CustomButton bgColor="customGreen" outlineColor="border-green-500">
        Green Button
      </CustomButton>
        </div>
    );
};

export default Dashboard;