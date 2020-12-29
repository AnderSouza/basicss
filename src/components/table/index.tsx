import React from "react";
import styled from "styled-components";
import { TableProps, Column } from "../../types/index";
import { commonStyles } from "./../common-styles";
import left from "./../../img/left-arrow.svg";
import right from "./../../img/right-arrow.svg";

const Line = styled.div`
  background-color: black;
  width: 1px;
  height: 20px;
  margin: 0px 8px;
  display: inline-block;
`;

const Icon = styled.img`
  width: 24px;
  height: auto;
`;

const StyledTable = commonStyles(
  styled.table`
    border-collapse: collapse;
    background-color: #ffffff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    margin: 5px;
    td {
      text-align: left;
      padding: 1rem;
      width: 200px;
    }
    td > * {
      vertical-align: middle;
    }
    th {
      margin-top: 10px;
      text-align: left;
      padding: 1rem;
      border-right: solid 1px darkgray;
      width: 200px;
    }
    th:last-of-type {
      border-right: none;
    }
    thead {
    }
    tbody tr:nth-child(even) {
      background: #eee;
    }
    tbody tr:first-of-type td {
      padding: 0px;
    }
    tbody tr:hover {
      background-color: #ccc;
    }
    tbody tr:first-of-type:hover {
      background-color: #eee;
    }
    tfoot td {
      text-align: right;
    }
  `
);

export default (props: TableProps) => (
  <StyledTable
    {...props.config.tableProps}
    style={props.style}
    className={props.className}
  >
    <thead {...props.config.headProps}>
      <tr>
        {props.columns.map((column: Column) => (
          <th {...column.headerProps}>
            <div>{column.title}</div>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        {props.columns.map((column: Column) => (
          <td style={{ width: column.width }}>
            <div>{column.filter}</div>
          </td>
        ))}
      </tr>
      {props.data.map((item: any) => (
        <tr {...props.config.rowProps}>
          {props.columns.map((column: Column) => (
            <td {...column.cellProps}>{item[column.accessor]}</td>
          ))}
        </tr>
      ))}
    </tbody>
    <tfoot {...props.config.footProps}>
      <tr>
        <td colSpan={props.columns.length}>
          {props.config.pageIndex} de {props.config.pageCount}
          <Line />
          <Icon src={left} />
          <Icon src={right} />
        </td>
      </tr>
    </tfoot>
  </StyledTable>
);
