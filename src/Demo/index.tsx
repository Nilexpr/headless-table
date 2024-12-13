import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { MultiLeverTable } from './example';

const defaultData: CardCell[][] = [
  [
    {
      values: '1',
    },
    {
      values: '2',
    },
    {
      values: '3',
    },
  ],
  [
    {
      values: '3',
    },
    {
      values: '2',
    },
    {
      values: '1',
    },
  ],
];

export const Demo = () => {
  return (
    <>
      <MultiLeverTable></MultiLeverTable>
    </>
  );
};
