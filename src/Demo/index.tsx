import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { MultiLeverTable } from './example';
import { CardCell } from './type';
import { Doc } from './doc';

export const Demo = () => {
  return (
    <>
      <MultiLeverTable></MultiLeverTable>
      <Doc></Doc>
    </>
  );
};
