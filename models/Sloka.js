const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const slokaSchema = new mongoose.Schema({
  sloka_num: { type: String, unique: true },
  sloka_text: String,
  padavibhaga: [
    {
      _id: 0,
      pada: String,
      subanta_or_dhatu: String,
      anta: String,
      linga: String,
      s_vachana: String,
      meaning: String,
      lakara: String,
      purusha: String,
      d_vachana: String,
      atman_or_paras: String,
      setvetanit: String,
      specific_type: String,
      synonyms: Array,
      literal_meaning: {
        san: String,
        eng: String,
        kan: String,
        hindi: String
      },
      visheshana_visheshya_bhava: String
    }
    ],
  sandhis:[
    {
      _id: 0,
      purvapada: String,
      uttarapada: String,
      sandhi_name: String,
      other_details: String
    }
    ],
  samasas:[
    {
      _id: 0,
      vigraha_vakya: String,
      samasa_name: String,
      other_details: String
    }
    ],
  chandas_vritta: String,
  alankara: String,
  anvaya: String,
  other_info: String,
  ref_works: String,
});

const Sloka = mongoose.model('Sloka', slokaSchema);

module.exports = Sloka;
