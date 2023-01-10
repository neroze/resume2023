import Title from "antd/es/typography/Title";
import React from "react";

const table = ({ tableData }: any) => (
  <section className="frameworks" data-sr="wait 0.3s, enter right">
    <Title level={2}>{tableData.title}</Title>
    <table className="frameworks">
      <tbody>
        {tableData &&
          tableData.data.map((row: any, index: any) => (
            <tr key={row.title}>
              <td>{index}.</td>
              <td>{row.title}</td>
              <td>-</td>
              <td>{row.desc}</td>
            </tr>
          ))}
      </tbody>
    </table>
    <h1 className="green">&lt; / {tableData.title} &gt; </h1>
  </section>
);

export default table;
