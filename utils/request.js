import axios from "axios";
const baseURL = "http://quanly.tincnc.vn:1337";

async function fetchQuery(path, params = null) {
  let url;
  if (params !== null) url = `${baseURL}/${path}/${params}`;
  else url = `${baseURL}/${path}`;

  const res = await axios.get(url);
  return res;
}

export { fetchQuery };
