import { IndividualBase } from "../types/types";
import { useFetch } from "../hooks/UseFetch";
import DataListItemAttribute from "./DataListItemAttribute";
import { getEndpointFromUrl } from "../utils/apiUtils";

interface Props<T> {
  dataUrl: string;
  label: string;
  renderItemAttribute: (item: T, label: string) => JSX.Element;
}

const DataListItem = <T extends IndividualBase>({
  dataUrl,
  label,
  renderItemAttribute,
}: Props<T>) => {
  const { data, loading, error } = useFetch<T>({
    endpoint: getEndpointFromUrl(dataUrl),
  });

  return (
    <>
      {loading && <DataListItemAttribute label={label} data="Loading..." />}
      {error && <DataListItemAttribute label={label + " error loading"} />}
      {data && renderItemAttribute(data, label)}
    </>
  );
};

export default DataListItem;
