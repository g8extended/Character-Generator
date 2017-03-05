import map from 'lodash/map';

export const getIndexByOffset = (length, index, offset) => {
  return (length + index + offset) % length;
};

export const getFiles = ({ current: { asset, type, color }, items }) => {
  const colorFiles = map(items[asset].types[type].colors[color].files, file => ({
    ...file,
    type,
    color,
    src: `/svg/${asset}/${type}/${color}/${file.id}`
  }));

  if (colorFiles.length < 2) {
    const typeFiles = map(items[asset].types, type => ({
      ...type.colors[color].files[0],
      type: type.id,
      color,
      src: `/svg/${asset}/${type.id}/${color}/${type.colors[color].files[0].id}`
    }));

    return typeFiles;
  }

  return colorFiles;
};
