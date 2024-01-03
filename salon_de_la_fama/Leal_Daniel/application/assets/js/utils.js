export const translate = (dx = 0, dy = 0) => `translate(${dx},${dy})`;

export const lineCreator = (vertices) => {
  const creator = d3.line()
  .curve(d3.curveMonotoneY)
    .x((d) => d[0])
    .y((d) => d[1]);
  return creator(vertices);
}
