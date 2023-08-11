const { Schema } = require('mongoose');

const LibrarySchema = new Schema({
  LBRRY_CD: {
    type: Number,
    required: true,
    unique: true,
  },
  LBRRY_NM: {
    type: String,
  },
  LBRRY_ADDR: {
    type: String,
  },
  LBRRY_LA: {
    type: String,
  },
  LBRRY_LO: {
    type: String,
  },
  ONE_AREA_NM: {
    type: String,
  },
  TWO_AREA_NM: {
    type: String,
  },
  LBRRY_NO: {
    type: String,
  },
  API_LBRRY_NO: {
    type: String,
  },
  TEL_NO: {
    type: String,
  },
  FAX_NO: {
    type: String,
  },
  HMPG_VALUE: {
    type: String,
  },
  OPNNG_TIME: {
    type: String,
  },
  CLOSEDON_DC: {
    type: String,
  },
  LBRRY_TY_CD: {
    type: Number,
  },
  LBRRY_TY_NM: {
    type: String,
  },
  FOND_MBY_VALUE: {
    type: String,
  },
  OPNNG_YEAR: {
    type: String,
  },
  ZIP_NO: {
    type: String,
  },
  X_CRDNT_VALUE: {
    type: String,
  },
  Y_CRDNT_VALUE: {
    type: String,
  },
  MUMM_LON_YEAR: {
    type: String,
  },
  BSNS_PARTCPTN_YEAR: {
    type: String,
  },
  MASTR_LBRRY_CD: {
    type: Number,
  },
  LBRRY_NCM_NM: {
    type: String,
  },
  ETC_LBRRY_CD: {
    type: String,
  },
  AREA_CD: {
    type: String,
  },
  ETC_LBRRY_ADDR: {
    type: String,
  },
  ETC_LBRRY_NM: {
    type: String,
  },
  TWO_ETC_LBRRY_NM: {
    type: String,
  },
  REPRSNT_AT: {
    type: String,
  },
  ONE_AREA_CD: {
    type: String,
  },
  TWO_AREA_CD: {
    type: String,
  },
  WETHR_AREA_CD: {
    type: String,
  },
});

module.exports = { LibrarySchema };
