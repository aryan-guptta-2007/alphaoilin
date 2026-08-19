import React from "react";

export interface SpecTableColumn {
  key: string;
  header: string;
  align?: "left" | "center" | "right";
}

export interface SpecTableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  columns: SpecTableColumn[];
  data: Record<string, React.ReactNode>[];
  caption?: string;
  onDark?: boolean;
  className?: string;
}

export const SpecTable: React.FC<SpecTableProps> = ({
  columns,
  data,
  caption,
  onDark = false,
  className = "",
  ...props
}) => {
  const borderColor = onDark ? "border-mist/15" : "border-steel/15";
  const textColor = onDark ? "text-paper" : "text-ink";
  const hoverRowBg = onDark ? "hover:bg-steel/40" : "hover:bg-mist/30";

  return (
    <div className={`w-full overflow-x-auto max-w-full border border-steel/20 ${className}`.trim()}>
      <table className="w-full min-w-[550px] text-left border-collapse" {...props}>
        {caption && (
          <caption className="text-left font-display text-xs uppercase font-bold tracking-wider text-slate mb-2">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-steel text-white font-display text-xs uppercase tracking-wider font-bold">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={`py-3.5 px-4 font-bold ${
                  col.align === "center"
                    ? "text-center"
                    : col.align === "right"
                    ? "text-right"
                    : "text-left"
                }`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={`divide-y ${borderColor} font-mono text-xs sm:text-sm ${textColor}`}>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-b ${borderColor} transition-colors ${hoverRowBg}`}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`py-3.5 px-4 font-normal text-xs sm:text-sm ${
                    col.align === "center"
                      ? "text-center"
                      : col.align === "right"
                      ? "text-right"
                      : "text-left"
                  }`}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecTable;
