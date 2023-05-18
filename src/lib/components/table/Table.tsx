import { H5, Row, Text } from "@components";
import { joinCls } from "@utilities";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

export const Table = forwardRef<HTMLTableElement, TableProps>(({ dataSource, columns, className, ...props }, ref) => {
	return (
		<table ref={ref} className={joinCls("border-collapse table-auto w-full", className)} {...props}>
			<thead className="text-left">
				<tr>
					{columns.map(({ key, title, renderHeader }, index) => {
						return (
							<th key={key} className="border-b border-black pl-0 pt-0 pr-4 pb-4">
								{renderHeader ? renderHeader(title, index) : <H5>{title}</H5>}
							</th>
						);
					})}
				</tr>
			</thead>
			<tbody>
				{dataSource.map((data) => (
					<tr key={Object.values(data).join("|")}>
						{columns.map(({ key, dataIndex, render }, index) => (
							<td key={key} className="border-b border-in-gray pl-0 pt-6 pr-4 pb-6">
								{render ? render(data[dataIndex || ""], data, index) : data[dataIndex || ""]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
});
