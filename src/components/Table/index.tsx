import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type CoreRow,
} from "@tanstack/react-table";
import { StyledTable, TH, THead, TBody, TR, TD } from "./styles";
import {
  PaginationButtonContainer,
  PaginationContainer,
  PaginationInput,
} from "./Pagination/styles";
import StyledButton from "@/components/UI/Buttons/StyledButton";
import { Flex } from "../Layout/Flex";

interface TableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  onClickRow: (id: string) => void;
}

const Table = <T extends object>({
  data,
  columns,
  onClickRow,
}: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const pageIndex = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;

  const pageRangeStart = pageIndex * pageSize + 1;
  const pageRangeEnd =
    (pageIndex + 1) * pageSize < data.length
      ? (pageIndex + 1) * pageSize
      : data.length;

  const pageRange = `${pageRangeStart}-${pageRangeEnd}`;

  return (
    <>
      <StyledTable>
        <THead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TR key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TH key={header.id} scope="col">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TH>
              ))}
            </TR>
          ))}
        </THead>
        <TBody>
          {table.getRowModel().rows.map((row) => (
            <TR
              key={row.id}
              onClick={() => {
                onClickRow((row.original as CoreRow<T>).id);
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <TD key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TD>
              ))}
            </TR>
          ))}
        </TBody>
      </StyledTable>

      <PaginationContainer>
        <PaginationButtonContainer>
          <StyledButton
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.setPageIndex(0)}
          >
            {"<<"}
          </StyledButton>
          <StyledButton
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            Previous
          </StyledButton>
          <StyledButton
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            Next
          </StyledButton>
          <StyledButton
            disabled={!table.getCanNextPage()}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            {">>"}
          </StyledButton>
        </PaginationButtonContainer>

        <PaginationButtonContainer className="pt-2">
          <Flex align="center">
            <Flex gap="5px">
              <div>Page</div>
              <strong>
                {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </strong>
            </Flex>
            <Flex gap="5px" align="center">
              | Go to page:
              <PaginationInput
                type="text"
                min={1}
                max={table.getPageCount()}
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
              />
            </Flex>
          </Flex>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </PaginationButtonContainer>
      </PaginationContainer>

      <p className="flex items-center justify-between pl-4 pt-2">
        <span className="text-sm font-normal text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-900">{pageRange}</span> of{" "}
          <span className="font-semibold text-gray-900">{data.length}</span>
        </span>
      </p>
    </>
  );
};

export default Table;
