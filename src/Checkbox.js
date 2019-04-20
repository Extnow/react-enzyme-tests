import React from 'react';

export const Checkbox = ({ checked }) => {
  return (
    <div>
      <label>
        Получать уведомления на электронную почту
        <input type="checkbox" checked={checked} />
      </label>
    </div>
  );
};
