import { DEFAULT_STALE_TIME } from '@/features/DatabaseRelationships';
import { DataSource, OrderBy, WhereClause } from '@/features/DataSource';
import { Table } from '@/features/hasura-metadata-types';
import { useHttpClient } from '@/features/Network';
import { useQuery } from 'react-query';

export type UseRowsPropType = {
  dataSourceName: string;
  table: Table;
  columns?: string[];
  options?: {
    where?: WhereClause[];
    offset?: number;
    limit?: number;
    order_by?: OrderBy[];
  };
};

export const useRows = ({
  dataSourceName,
  table,
  columns,
  options,
}: UseRowsPropType) => {
  const httpClient = useHttpClient();
  return useQuery({
    queryKey: [
      'browse-rows',
      dataSourceName,
      table,
      columns,
      JSON.stringify(options),
    ],
    queryFn: async () => {
      try {
        const tableColumns = await DataSource(httpClient).getTableColumns({
          dataSourceName,
          table,
        });

        const result = await DataSource(httpClient).getTableRows({
          dataSourceName,
          table,
          columns: columns ?? tableColumns.map(column => column.name),
          options,
        });

        return result;
      } catch (err: any) {
        throw new Error(err);
      }
    },
    refetchOnWindowFocus: false,
    staleTime: DEFAULT_STALE_TIME,
  });
};