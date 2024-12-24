import { IndividualBase } from "../types/types";
import { useFetch } from "../hooks/UseFetch";
import ItemAttribute from "./ItemAttribute";
import { getEndpointFromUrl } from "../utils/apiUtils";

interface Props<T> {
  dataUrl: string | null;
  label: string;
  renderItemAttribute: (item: T, label: string) => JSX.Element;
}

const Item = <T extends IndividualBase>({
  dataUrl,
  label,
  renderItemAttribute,
}: Props<T>) => {
  if (!dataUrl) {
    return <ItemAttribute label={label} data={"no data"} />;
  }
  const { data, loading, error } = useFetch<T>({
    endpoint: getEndpointFromUrl(dataUrl),
  });

  return (
    <>
      {loading && <ItemAttribute label={label} data="Loading..." />}
      {error && <ItemAttribute data={label + " error loading"} />}
      {data && renderItemAttribute(data, label)}
    </>
  );
};

export default Item;
