import React from 'react';

const SubscriptionTableItem = ({ email = "No email", onDelete }) => {
  return (
    <tr className="bg-white border-b text-left hover:bg-gray-100">
      {/* Email Cell */}
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {email}
      </th>

      {/* Placeholder Column */}
      <td className="px-6 py-4 hidden sm:block">N/A</td>

      {/* Delete Button */}
      <td
        className="px-6 py-4 cursor-pointer text-red-500 hover:text-red-700"
        onClick={onDelete ?? (() => console.warn("Delete function not provided"))}
      >
        x
      </td>
    </tr>
  );
};

export default SubscriptionTableItem;
