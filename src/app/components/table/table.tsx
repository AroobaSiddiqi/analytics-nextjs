import { TableProps } from "./types";

export default function Table({ columns, data }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left divide-y divide-gray-600 bg-gray-100  dark:bg-gray-900  rounded-lg shadow-md">
        <thead>
          <tr>
            {columns.map((column) => {
              return (
                <th
                  key={column.field}
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td
                  key={`${index}-${column.field}`}
                  className="px-6 py-3 text-md font-light text-white uppercase tracking-wider"
                >
                  <div {...column.attributes}>{column.cellRenderer?.(row[column.field]) ?? row[column.field] }</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}