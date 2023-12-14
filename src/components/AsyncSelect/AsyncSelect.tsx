import React, { useCallback, useMemo, useState } from 'react';
import debounce from 'shared/utils/debounce';
import { Select } from 'antd';
import type { IOption } from 'shared/types/types';
import type { AsyncSelectProps } from 'components/AsyncSelect/AsyncSelect.type';

export function AsyncSelect({
  fetchOptions,
  debounceTimeout = 500,
  ...props
}: AsyncSelectProps) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<Array<IOption>>([]);

  const loadOptions = useCallback(() => {
    fetchOptions().then((data) => {
      const newOptions: Array<IOption> = data.data.map((item: any) => ({
        label: item.name
          ? item.name
          : item.last_name
            ? item.last_name
            : item.car_number
              ? item.car_number
              : item.group_name
                ? item.group_name
                : '',
        value: Number(item.id),
        key: String(item.id),
      }));

      setOptions((prev) => [...prev, ...newOptions]);
      setFetching(false);
    });
  }, [fetchOptions]);

  const debounceFetcher = useMemo(() => {
    setOptions([]);
    return debounce(loadOptions, debounceTimeout);
  }, [debounceTimeout, loadOptions]);

  function dropSelect(isOpen: boolean) {
    if (isOpen) {
      setFetching(true);
      debounceFetcher();
    } else {
      setOptions([]);
    }
  }

  return (
    <Select
      labelInValue
      filterOption={false}
      onDropdownVisibleChange={dropSelect}
      loading={fetching}
      notFoundContent={null}
      {...props}
      options={options as any}
    />
  );
}
