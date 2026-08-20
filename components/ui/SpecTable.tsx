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
  className = "",
  ...props
}) => {
  return (
    <div className={`w-full overflow-x-auto max-w-full border border-rule ${className}`.trim()}>
      <table className="w-full min-w-[550px] text-left border-collapse" {...props}>
        {caption && (
          <caption className="text-left font-display text-xs uppercase font-bold tracking-wider text-slate mb-2">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-ink text-paper font-display text-xs uppercase tracking-wider font-bold">
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
        <tbody className="divide-y divide-rule font-mono text-xs sm:text-sm text-ink bg-card">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-rule transition-colors hover:bg-linen"
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
