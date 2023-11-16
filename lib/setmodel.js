const fs = require("fs");

const isModel = './database/Model/txt2img.json';

function saveDataToFile(data) {
  try {
    fs.writeFileSync('./database/Model/txt2img.json', JSON.stringify(data, null, 3));
  } catch (err) {
    console.error("Error saving data to txt2img.json:", err.message);
  }
}

function setModel(data, newModelId) {
  for (let i = 0; i < data.length; i++) {
    data[i].model_id = newModelId;
  }
  return data;
}

function setLora(data, newLoraModel) {
  for (let i = 0; i < data.length; i++) {
    data[i].lora_model = newLoraModel;
  }
  return data;
}

function setSampler(data, newSampler) {
  for (let i = 0; i < data.length; i++) {
    data[i].sampler = newSampler;
  }
  return data;
}

function setEmbeddings(data, newEmbeddings) {
  for (let i = 0; i < data.length; i++) {
    data[i].embeddings_model = newEmbeddings;
  }
  return data;
}

function setWidth(data, newWidth) {
  for (let i = 0; i < data.length; i++) {
    data[i].width = newWidth;
  }
}

function setHeight(data, newHeight) {
  for (let i = 0; i < data.length; i++) {
    data[i].height = newHeight;
  }
  return data;
}

module.exports = {
  saveDataToFile,
  setModel,
  setLora,
  setSampler,
  setEmbeddings,
  setWidth,
  setHeight
}