export const loadData = async (url) => {
  const data = await d3.json(url);
  return data;
}
