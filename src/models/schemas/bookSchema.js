const { Schema } = require('mongoose');

const BookSchema = new Schema({
  CTRL_NO: {
    type: String,
    required: true,
    unique: true,
  },
  AUTHR_NM: {
    type: String,
  },
  VLM_NM: {
    type: String,
  },
  PBLICTE_YEAR: {
    type: String,
  },
  CL_SMBL_NO: {
    type: String,
  },
  BOOK_SMBL_NO: {
    type: String,
  },
  TITLE_NM: {
    type: String,
  },
  LBRRY_CD: {
    type: Number,
    required: true,
    unique: true,
  },
  ISBN_THIRTEEN_NO: {
    type: Number,
  },
  REPRSNT_BOOK_AT: {
    type: String,
  },
  REGIST_NO: {
    type: String,
  },
  INCME_FLAG_NM: {
    type: String,
  },
  MANAGE_FLAG_NM: {
    type: String,
  },
  MEDIA_FLAG_NM: {
    type: String,
  },
  UTILIIZA_LMTT_FLAG_NM: {
    type: String,
  },
  UTILIIZA_TRGET_FLAG_NM: {
    type: String,
  },
  SGVL_ISBN_NO: {
    type: String,
  },
  SGVL_ISBN_ADTION_SMBL_NM: {
    type: String,
  },
  CL_SMBL_FLAG_NM: {
    type: String,
  },
  VLM_SMBL_NM: {
    type: String,
  },
  DUCACPY_SMBL_NM: {
    type: String,
  },
  REGIST_DE: {
    type: Date,
  },
  ISBN_THIRTEEN_ORGT_NO: {
    type: String,
  },
  MASTR_LBRRY_CD: {
    type: Number,
  },
  VLM_EXST_AT: {
    type: String,
  },
  SET_ISBN_CHG_AT: {
    type: String,
  },
  VLM_ORGT_NM: {
    type: String,
  },
  TITLE_SBST_NM: {
    type: String,
  },
  KDC_NM: {
    type: String,
  },
  BOOK_CL_CD: {
    type: String,
  },
  BOOK_LC_CD: {
    type: String,
  },
});

module.exports = { BookSchema };
