import React, { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
}

interface HeaderProps {
  children: ReactNode;
}

interface BodyProps<T> {
  data: T[];
  render: (item: T, index: number) => ReactNode;
}

interface RowProps {
  children: ReactNode;
}

interface CellProps {
  children: ReactNode;
  isHeader?: boolean;
}

const Table: React.FC<TableProps> & {
  Header: React.FC<HeaderProps>;
  Body: <T>(props: BodyProps<T>) => JSX.Element;
  Row: React.FC<RowProps>;
  Cell: React.FC<CellProps>;
} = ({ children }) => {
  return (
    <div className="shadow-accent-light-color dark:shadow-accent-dark-color overflow-x-auto rounded-tl-[12px] rounded-tr-[12px] shadow-md">
      <table className="w-full text-center text-sm">{children}</table>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <thead className="bg-accent-light-color dark:bg-accent-dark-color text-lg font-semibold tracking-widest uppercase">
      <tr>{children}</tr>
    </thead>
  );
};

const Body = <T,>({ data, render }: BodyProps<T>): JSX.Element => {
  return <tbody>{data.map(render)}</tbody>;
};

const Row: React.FC<RowProps> = ({ children }) => {
  return (
    <tr className="border-accent-light-color even:bg-primary-light-color odd:bg-secondary-light-color dark:border-accent-dark-color dark:odd:bg-secondary-dark-color dark:even:bg-primary-dark-color not-last:border-b-[0.5px]">
      {children}
    </tr>
  );
};

const Cell: React.FC<CellProps> = ({ children, isHeader = false }) => {
  const Tag = isHeader ? "th" : "td";
  return (
    <Tag scope={isHeader ? "col" : "row"}>
      <div
        className={`flexCenter ${isHeader ? "min-h-[80px] p-4" : "min-h-[100px] p-2"} flex-col text-center`}
      >
        {children}
      </div>
    </Tag>
  );
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
