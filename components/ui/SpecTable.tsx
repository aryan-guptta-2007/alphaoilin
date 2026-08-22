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
    <div className={`w-full min-w-0 max-w-full overflow-hidden ${className}`.trim()}>
      {caption && (
        <div className="text-left font-display text-xs uppercase font-bold tracking-wider text-slate mb-2">
          {caption}
        </div>
      )}
      <div
        className="relative w-full min-w-0 max-w-full border border-rule group"
        style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}
      >
        <table className="w-full min-w-[540px] text-left border-collapse" {...props}>
          <thead>
            <tr className="bg-ink text-white font-display text-xs uppercase tracking-wider font-bold whitespace-nowrap">
              {columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className={`py-3.5 px-3.5 font-bold text-xs ${
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
          <tbody className="divide-y divide-rule font-mono text-xs text-ink bg-card">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-rule transition-colors hover:bg-linen"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`py-3.5 px-3.5 font-normal text-xs whitespace-nowrap ${
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
        {/* Visible Right Edge Scroll Indicator / Fade */}
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-ink/15 to-transparent opacity-90 sm:hidden" />
      </div>
    </div>
  );
};

export default SpecTable;
