import map from 'lodash/map';

const convert = base => value => value / base * 100 + '%';
const width = value => convert(739.6)(value);
const height = value => convert(909.9)(value);

const getComputedStyle = (asset, style) => {
  return {
    width: width(style.width),
    height: height(style.height),
    left: width(style.left),
    top: height(style.top)
  };
};

export const getIndexByOffset = (length, index, offset) => {
  return (length + index + offset % length) % length;
};

export const getFiles = ({ current: { asset, type, color }, items }) => {
  const colorFiles = map(items[asset].types[type].colors[color].files, file => ({
    ...file,
    type,
    color,
    src: `/svg/${asset}/${type}/${color}/${file.id}`,
    computedStyle: getComputedStyle(asset, file.style)
  }));

  if (colorFiles.length < 2) {
    const typeFiles = map(items[asset].types, type => ({
      ...type.colors[color].files[0],
      type: type.id,
      color,
      src: `/svg/${asset}/${type.id}/${color}/${type.colors[color].files[0].id}`,
      computedStyle: getComputedStyle(asset, type.colors[color].files[0].style)
    }));
    return typeFiles;
  }

  return colorFiles;
};
